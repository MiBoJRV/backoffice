import React, {useState} from 'react';
import {CustomerCustomersContent} from './Styles.jsx';
import useFetchCustomers from '../../hooks/useFetchCustomers.jsx';
import Modal from "../Modal/Modal.jsx";
import EditCustomerModalContent from "../EditCustomerModalСontent/EditCustomerModalcontent.jsx";
import AddCustomerModalContent from "../AddCustomerModalContent/AddCustomerModalContent.jsx";
import edit from '../../assets/images/edit.svg';
import bin from '../../assets/images/bin.svg';
import add from '../../assets/images/add.svg';
import useAdminCustomerLocalDelete from '../../hooks/useAdminCustomerLocalDelete.jsx';
import useAdminCustomerLocalAdd from "../../hooks/useAdminCustomerAdd.jsx";
import useAdminCustomerLocalUpdate from "../../hooks/useAdminCustomerLocalUpdate.jsx";
import angleLeft from "../../assets/images/angle-left.svg";
import angleRight from "../../assets/images/angle-right.svg";
import TableEntries from "../TableEntries/TableEntries.jsx";
import {TableSize} from "../TableSize/TableSize.jsx";

const CustomerCustomersTable = ({accessToken}) => {
    const {
        customers,
        pageSize,
        setPageSize,
        currentPage,
        setCurrentPage,
        totalPages,
        setTotalPages,
        handlePageChange,
        fetchCustomers,
    } = useFetchCustomers(accessToken);

    const {handleDeleteCustomer, error} = useAdminCustomerLocalDelete(fetchCustomers);

    const userRole = localStorage.getItem('userRole');

    const startIndex = (currentPage - 1) * pageSize + 1;
    const endIndex = Math.min(startIndex + pageSize - 1, customers.length);
    const totalEntries = customers.length;



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

    const isNextButtonDisabled = totalPages === 1 || currentPage === totalPages;


    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState(null); // Define selectedCustomer here

    const handleEditCustomer = (customer) => {
        setIsModalOpen(true);
        setSelectedCustomer(customer);
    };

    const {handleUpdateCustomer, error: updateError} = useAdminCustomerLocalUpdate(fetchCustomers);

    const handleSaveEditedCustomer = async (editedCustomer) => {
        await handleUpdateCustomer(editedCustomer);
        setIsModalOpen(false);
    };

    //Add Customer
    const {handleAddCustomer} = useAdminCustomerLocalAdd(fetchCustomers)

    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const openAddModal = () => {
        setIsAddModalOpen(true);
    };

    const closeAddModal = () => {
        setIsAddModalOpen(false);
    };

    return (
        <CustomerCustomersContent>
            <TableSize handlePageSizeChange={handlePageSizeChange} pageSize={pageSize}/>
            <div className="table-info">
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Country</th>
                        <th>Recovered amount</th>
                        <th>Date</th>
                        {userRole === 'Admin' && (<td></td>)}
                        {userRole === 'Admin' && (
                            <td className="edit">
                                <img
                                    className="add"
                                    src={add}
                                    alt="icon"
                                    onClick={openAddModal}
                                />
                            </td>
                        )}
                    </tr>
                    </thead>
                    <tbody>
                    {customers.slice((currentPage - 1) * pageSize, currentPage * pageSize).map((customer) => (
                        <tr key={customer.id}>
                            <td>{customer.numericId}</td>
                            <td>{customer.name}</td>
                            <td>{customer.status}</td>
                            <td>{customer.country}</td>
                            <td>{customer.recoveredAmount}</td>
                            <td>{customer.date}</td>
                            {userRole === 'Admin' && (
                                <td className="edit">
                                    <img
                                        className="edit"
                                        src={edit}
                                        alt="icon"
                                        onClick={() => {
                                            handleEditCustomer(customer);
                                        }}
                                    />
                                </td>
                            )}
                            {userRole === 'Admin' && (
                                <td className="bin">
                                    <img className="bin"
                                         src={bin}
                                         alt="icon"
                                         onClick={() => handleDeleteCustomer(customer.id)}/>
                                </td>
                            )}
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
            {isModalOpen && selectedCustomer && (
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <EditCustomerModalContent customer={selectedCustomer} onSave={handleSaveEditedCustomer}/>
                </Modal>
            )}
            {isAddModalOpen && (
                <Modal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)}>
                    <AddCustomerModalContent customer={selectedCustomer} onSave={handleSaveEditedCustomer}
                                             onClose={closeAddModal}/>
                </Modal>
            )}
        </CustomerCustomersContent>
    );
};

export default CustomerCustomersTable;
