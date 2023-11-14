import React, {useEffect, useState} from 'react';
import {TransactionsTableContent} from "./Styles.jsx";
import edit from "../../assets/images/edit.svg";
import bin from "../../assets/images/bin.svg";
import Modal from "../Modal/Modal.jsx";
import EditAdminTransactionModalContent from "../EditAdminTransactionModalContent/EditAdminTransactionModalContent.jsx";
import CreateAdminTransactionModalContent
    from "../CreateAdminTransactionModalContent/CreateAdminTransactionModalContent.jsx";
import styled from "styled-components";

const useSingleCustomer = (id) => {
    const [customerData, setCustomerData] = useState(null);

    const fetchData = async () => {
        try {
            const accessToken = localStorage.getItem('accessToken');
            const response = await fetch(`https://highdardata.xyz/office/v1/customers/getSingle?id=${id}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            if (response.ok) {
                const data = await response.json();
                setCustomerData(data);
            } else {
                console.error('Error fetching customer data:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching customer data:', error);
        }
    };

    useEffect(() => {
        if (id) {
            fetchData();
            console.log("дані оновлено")
        }

        return () => {
            // Очищення даних або виконання інших дій, які потрібно зробити при видаленні компонента
        };
    }, [id]);

    return {customerData, fetchData};
};
const TableRow = styled.tr`
  background-color: ${(props) => {
    switch (props.status) {
      case 'InProgress':
        return '#BCF0FB';
      case 'Success':
        return '#C1F1DC';
      case 'Fail':
        return '#FFD0D0';
      case 4:
        return '#E8E8E8';
      default:
        return 'transparent';
    }
  }};

`;

const TableCell = styled.td`
  background-color: inherit !important; /* Щоб можна було успадковувати фон від TableRow */
`;

const AdminTransactionsTable = ({isTransactionCreateModalOpen, setIsTransactionCreateModalOpen}) => {
    // if (!customerData || !customerData.transactions) {
    //     // return null; // Повертаємо null або інший компонент-завантажувач, якщо transactions є невизначеною
    //     return <div>Loading...</div>;
    // }
    const statusIconPath = '/src/assets/images/status/';
    const userRole = localStorage.getItem('userRole');

    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get('id');

    const {customerData, fetchData} = useSingleCustomer(id);

    const transactions = customerData?.transactions || [];

    //del transaction from table

    const [error, setError] = useState(null);
    const handleDeleteTransactionTable = async (transactionId) => {
        try {
            const accessToken = localStorage.getItem('accessToken');
            const response = await fetch(`https://highdardata.xyz/office/v1/transactions/delete?id=${transactionId}`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            });

            if (response.ok) {
                console.log("Deleted successfully Transaction")
                await fetchData();
                console.log("Deleted successfully Transaction")
            } else {
                setError('Error deleting Transaction');
            }
        } catch (error) {
            setError('Error deleting Transaction');
        }
    };

    //edit
    const [isTransactionEditModalOpen, setIsTransactionEditModalOpen] = useState(false);
    const [editTransactionData, setEditTransactionData] = useState(null);

    const openEditTransactionModal = () => {
        setIsTransactionEditModalOpen(true);
    };

    const closeTransactionAssetModal = () => {
        setIsTransactionEditModalOpen(false);
    };

    const handleSetEditTransactionData = (data) => {
        setEditTransactionData(data);
    };

    const handleEditTransaction = (transactionId) => {
        const selectedAsset = transactions.find(transactions => transactions.id === transactionId);
        handleSetEditTransactionData(selectedAsset);
        setIsTransactionEditModalOpen(true);
    };

    const handleCreateTransaction = (formData) => {
        fetchData();
        setIsTransactionCreateModalOpen(false);
    };


    return (
        <TransactionsTableContent>
            <table>
                <thead>
                <tr>
                    <th>Transaction ID</th>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Description</th>
                    <th>Country</th>
                    <th>Recovered Amount</th>
                    <th>Date</th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {transactions.map(transaction => (
                    <TableRow key={transaction.id} status={transaction.statusFormatted}>
                        <TableCell>{transaction.numericId}</TableCell>
                        <TableCell>{transaction.name}</TableCell>
                        <TableCell>
                            {/*{transaction.statusFormatted}*/}
                            <img className="coin-icon" src={`${statusIconPath}${transaction.statusFormatted}.svg`}
                                 alt=""/>
                        </TableCell>
                        <TableCell>{transaction.description}</TableCell>
                        <TableCell>{transaction.country}</TableCell>
                        <TableCell>{transaction.recoveredAmount}</TableCell>
                        <TableCell>{transaction.date}</TableCell>
                        {userRole === 'Admin' && (
                            <td>
                                <img
                                    className="edit"
                                    src={edit}
                                    alt="icon"
                                    onClick={() => {
                                        handleEditTransaction(transaction.id);
                                    }}
                                />
                            </td>
                        )}
                        {userRole === 'Admin' && (
                            <td>
                                <img className="bin"
                                     src={bin}
                                     alt="icon"
                                     onClick={() => handleDeleteTransactionTable(transaction.id)}/>
                            </td>
                        )}
                    </TableRow>
                ))}
                </tbody>
            </table>
            {isTransactionEditModalOpen && (
                <Modal isOpen={setIsTransactionEditModalOpen} onClose={() => setIsTransactionEditModalOpen(false)}>
                    <EditAdminTransactionModalContent
                        onSave={fetchData}
                        isOpen={isTransactionEditModalOpen}
                        onClose={closeTransactionAssetModal}
                        onCreate={handleEditTransaction}
                        editTransactionData={editTransactionData}
                    />
                </Modal>
            )}
            {isTransactionCreateModalOpen && (
                <Modal isOpen={isTransactionCreateModalOpen} onClose={() => setIsTransactionCreateModalOpen(false)}>
                    <CreateAdminTransactionModalContent
                        isOpen={isTransactionCreateModalOpen}
                        onClose={() => setIsTransactionCreateModalOpen(false)}
                        onCreate={handleCreateTransaction}
                    />
                </Modal>
            )}
        </TransactionsTableContent>
    );
};

export default AdminTransactionsTable;
