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
import search from './../../assets/images/search.svg';
import dataAr from './../../assets/images/data_ar.svg';
import angleRight from './../../assets/images/angle-right.svg';
import angleLeft from './../../assets/images/angle-left.svg';
import { CustomersAllContent } from "./Styles.jsx";
import TableEntries  from "../TableEntries/TableEntries.jsx";

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

    if (redirectToCustomer && selectedCustomerId) {
        return <Navigate to={`/admin/customer?id=${selectedCustomerId}`}/>;
    }

    return (
        <CustomersAllContent>
            <div className="table-control">
                <div className="search">
                    <img
                        className="search-icon"
                        src={search}
                        alt="icon"
                    />
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
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
            <div className="table-size">
                Show
                <select value={pageSize} onChange={(e) => setPageSize(e.target.value)}>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
                entries
            </div>
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
                            <td>{customer.totalWorth}</td>
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
