import React, {useEffect, useState} from 'react';
import { Navigate } from "react-router-dom";
import useFetchCustomersAll from "../../hooks/useFetchCustomersAll.jsx";
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Modal from "../Modal/Modal.jsx";
import CreateCustomerModal from "../CreateCustomerModal/CreateCustomerModal.jsx";
import EditCustomerModalContent from "../EditCustomerModalСontent/EditCustomerModalContent.jsx";
import useAdminCustomerUpdate from "../../hooks/useAdminCustomerUpdate.jsx";
import edit from './../../assets/images/edit.svg';
import del from './../../assets/images/bin.svg';
import search from './../../assets/images/search.svg';
import dataAr from './../../assets/images/data_ar.svg';
import angleRight from './../../assets/images/angle-right.svg';
import angleLeft from './../../assets/images/angle-left.svg';
import { CustomersAllContent } from "./Styles.jsx";
import TableEntries  from "../TableEntries/TableEntries.jsx";
import {Search} from "../Search/Search.jsx";
import {TableSize} from "../TableSize/TableSize.jsx";

const AdminCustomersAllTable = ({ accessToken }) => {
    const {
        customers,
        // customers: paginatedCustomers,
        pageSize,
        setPageSize,
        currentPage,
        setCurrentPage,
        totalPages,
        setTotalPages,
        searchTerm,
        setSearchTerm,
        handlePageChange,
        selectedDate,
        handleDateChange,
        fetchCustomers,
        allCustomers
    } = useFetchCustomersAll(accessToken);


    const startIndex = (currentPage - 1) * pageSize + 1;
    const endIndex = Math.min(startIndex + pageSize - 1, allCustomers.length);
    const totalEntries = allCustomers.length;

    const handlePageSizeChange = (newPageSize) => {
        setPageSize(newPageSize);
        setCurrentPage(1);
        setTotalPages(Math.ceil(customers.length / newPageSize));
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openEditModal = () => {
        setIsModalOpen(true);
    };

    const closeEditModal = () => {
        setIsModalOpen(false);
    };

    const handleCreateCustomer = (formData) => {
        fetchCustomers();
    };

    const getCurrentDate = () => {
        const now = new Date();
        return new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
    };

    const [isEModalOpen, setIsEModalOpen] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState(null);

    const handleEditCustomer = (customer) => {
        setIsEModalOpen(true);
        setSelectedCustomer(customer);
    };

    const { handleUpdateCustomer, error: updateError } = useAdminCustomerUpdate(fetchCustomers);

    const handleSaveEditedCustomer = async (editedCustomer) => {
        await handleUpdateCustomer(editedCustomer);
        setIsEModalOpen(false);
    };

    const [redirectToCustomer, setRedirectToCustomer] = useState(false);
    const [selectedCustomerId, setSelectedCustomerId] = useState(null);

    const handleEditPageCustomer = (customerId) => {
        setSelectedCustomerId(customerId.id);
        setRedirectToCustomer(true);
        console.log(customerId.id);
    };

    // const handleDeletePageCustomer = (customerId) => {
    //     // setSelectedCustomerId(customerId.id);
    //     // setRedirectToCustomer(true);
    //     console.log(customerId.id);
    // };

    const handleDeletePageCustomer = async (customerId) => {
        console.log(customerId.id);
        try {
            const accessToken = localStorage.getItem('accessToken');
            const apiUrl = `https://highdardata.xyz/office/v1/customers/delete?id=${customerId.id}`;

            const response = await fetch(apiUrl, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            if (response.ok) {
                // Успішне видалення, оновіть дані
                await fetchCustomers();
            } else {
                console.error('Error deleting customer:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting customer:', error);
        }
    };


    if (redirectToCustomer && selectedCustomerId) {
        return <Navigate to={`/admin/customer?id=${selectedCustomerId}`}/>;
    }

    return (
        <CustomersAllContent>
            <div className="table-control">
                <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                <div className="date-filter">
                    <ReactDatePicker
                        selected={selectedDate || getCurrentDate()}
                        onChange={handleDateChange}
                        dateFormat="dd.MM.yyyy"
                    />
                    <img
                        className="data-icon"
                        src={dataAr}
                        alt="icon"
                    />
                </div>
                <div className="create-new">
                    <button onClick={openEditModal}>Create</button>
                </div>
            </div>
            <TableSize handlePageSizeChange={handlePageSizeChange} pageSize={pageSize}/>
            <div className="table-info">
                <table>
                    <thead>
                    <tr>
                        <th> ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Case Number</th>
                        <th>Recovered Amount</th>
                        <th>Date</th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {customers.map((customer) => (
                        <tr key={customer.id}>
                            <td>{customer.numericId}</td>
                            <td>{customer.firstName} {customer.lastName}</td>
                            <td>{customer.email}</td>
                            <td>{customer.phone}</td>
                            <td>{customer.caseNumber}</td>
                            <td>${customer.totalWorth}</td>
                            <td>{customer.caseStarted}</td>
                            <td>
                                <img
                                    className="edit"
                                    src={edit}
                                    alt="icon"
                                    onClick={() => {
                                        handleEditPageCustomer(customer);
                                    }}
                                />
                            </td>
                            <td>
                                <img
                                    className="edit"
                                    src={del}
                                    alt="icon"
                                    onClick={() => {
                                        handleDeletePageCustomer(customer);
                                    }}
                                />
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <TableEntries
                startIndex={startIndex}
                endIndex={endIndex}
                totalEntries={totalEntries}
                handlePreviousPage={handlePreviousPage}
                currentPage={currentPage}
                totalPages={totalPages}
                handleNextPage={handleNextPage}
            />
            {isEModalOpen && selectedCustomer && (
                <Modal isOpen={isEModalOpen} onClose={() => setIsEModalOpen(false)}>
                    <EditCustomerModalContent customer={selectedCustomer} onSave={handleSaveEditedCustomer}/>
                </Modal>
            )}
            {isModalOpen && (
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <CreateCustomerModal isOpen={isModalOpen} onClose={closeEditModal} onCreate={handleCreateCustomer}/>
                </Modal>
            )}
        </CustomersAllContent>
    );
};

export default AdminCustomersAllTable;
