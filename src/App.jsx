import React, {useState} from 'react';
import {BrowserRouter as Router, createBrowserRouter, Navigate, Route, RouterProvider, Routes} from 'react-router-dom';
import Login from './pages/Auth/Login/Login.jsx';
import CustomerDashboard from './pages/Dashboard/CustomerDashboard/CustomerDashboard.jsx';
import AdminDashboard from './pages/Dashboard/AdminDashboard/AdminDashboard.jsx';
import LoginLayout from './layouts/LoginLayout/LoginLayout.jsx';
import CustomerLayout from './layouts/CustomerLayout/CustomerLayout.jsx';
import AdminLayout from './layouts/AdminLayout/AdminLayout.jsx';
import CustomerTransactions from './pages/Dashboard/CustomerTransactions/CustomerTransactions.jsx';
import CustomerCustomers from './pages/Dashboard/CustomerCustomers/CustomerCustomers.jsx';
import AdminCustomers from './pages/Dashboard/AdminСustomers/AdminСustomers.jsx';
import AdminCustomerPage from './pages/Dashboard/AdminCustomerPage/AdminCustomerPage.jsx';
import {NotFoundPage} from './pages/NotFoundPage/NotFoundPage.jsx';

const App = () => {
    const [userRole, setUserRole] = useState(null);

    const router = createBrowserRouter([
        {
            path: "/",
            element: <LoginLayout/>,
            children: [
                {
                    path: "login",
                    element: <Login setUserRole={setUserRole}/>,
                },
            ],
        },
        {
            path: "admin",
            element: <AdminLayout/>,
            children: [
                {
                    path: "accounts",
                    element:  <AdminDashboard/>,
                },
                {
                    path: "customers",
                    element:  <AdminCustomers/>,
                },
                {
                    path: "customer",
                    element:  <AdminCustomerPage/>,
                },
            ],
        },
        {
            path: "customer",
            element: <CustomerLayout setUserRole={setUserRole}/>,
            children: [
                {
                    path: "dashboard",
                    element:  <CustomerDashboard/>,
                },
                {
                    path: "transactions",
                    element:  <CustomerTransactions/>,
                },
                {
                    path: "customers",
                    element:  <CustomerCustomers/>,
                },
            ],
        },

    ]);


    return (
        <React.StrictMode>
            <RouterProvider router={router}/>
        </React.StrictMode>
    );
};

export default App;
