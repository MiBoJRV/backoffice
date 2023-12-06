// import React from 'react';
// import {TransactionsTableContent} from "./Styles.jsx";
//
// const TransactionsTable = ({...customerData}) => {
//     if (!customerData || !customerData.transactions) {
//         // return null; // Повертаємо null або інший компонент-завантажувач, якщо transactions є невизначеною
//         return <div>Loading...</div>;
//     }
//
//     return (
//         <TransactionsTableContent>
//             <div className="table-info">
//                 <table>
//                     <thead>
//                     <tr>
//                         <th>Transaction ID</th>
//                         <th>Name</th>
//                         <th>Status</th>
//                         <th>Description</th>
//                         <th>Country</th>
//                         <th>Recovered Amount</th>
//                         <th>Date</th>
//                     </tr>
//                     </thead>
//                     <tbody>
//                     {customerData.transactions.map(transaction => (
//                         <tr key={transaction.id}>
//                             <td>{transaction.numericId}</td>
//                             <td>{transaction.name}</td>
//                             <td>{transaction.statusFormatted}</td>
//                             <td>{transaction.description}</td>
//                             <td>{transaction.country}</td>
//                             <td>{transaction.recoveredAmount}</td>
//                             <td>{transaction.date}</td>
//                         </tr>
//                     ))}
//                     </tbody>
//                 </table>
//             </div>
//         </TransactionsTableContent>
//     );
// };
//
// export default TransactionsTable;


import React from 'react';
import {TransactionsTableContent} from "./Styles.jsx";
import edit from "../../assets/images/edit.svg";
import bin from "../../assets/images/bin.svg";
import styled from "styled-components";

const TransactionsTable = ({...customerData}) => {
    if (!customerData || !customerData.transactions) {
        // return null; // Повертаємо null або інший компонент-завантажувач, якщо transactions є невизначеною
        return <div>Loading...</div>;
    }

    const statusIconPath = '/src/assets/images/status/';
    const userRole = localStorage.getItem('userRole');

    const transactions = customerData?.transactions || [];
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
      //.symbol {
      //  margin-right: 5px;
      //}
`;

    return (
        <TransactionsTableContent>
            <div className="table-info">
                <table>
                    <thead>
                    <tr>
                        <th>Transaction ID</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Description</th>
                        <th>Address wallet</th>
                        <th>Fee Amount</th>
                        <th>Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    {transactions.map(transaction => (
                        <TableRow key={transaction.id} status={transaction.statusFormatted}>
                            <TableCell>{transaction.numericId}</TableCell>
                            <TableCell>{transaction.name}</TableCell>
                            <TableCell className="icon">
                                {/*{transaction.statusFormatted}*/}
                                <img className="coin-icon" src={`${statusIconPath}${transaction.statusFormatted}.svg`}
                                     alt=""/>
                            </TableCell>
                            <TableCell>{transaction.description}</TableCell>
                            <TableCell>{transaction.country}</TableCell>
                            <TableCell><span className="symbol">{customerData.currencySymbol}</span>{transaction.recoveredAmount}</TableCell>
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
            </div>
        </TransactionsTableContent>
    );
};

export default TransactionsTable;
