// import React from "react";
// import { Sidebar } from "../../components/Sidebar/Sidebar.jsx";
// import { User } from "../../components/User/User.jsx";
// import {CustomerLayoutContent} from "./Styles.jsx";
// import useCustomerData from "../../hooks/useCustomerData.jsx";
// import {Outlet} from "react-router-dom";
//
// const CustomerLayout = ({ children, setUserRole }) => {
//     const { customerData, error } = useCustomerData();
//
//     return (
//         <CustomerLayoutContent>
//             <User {...customerData} />
//             <div className="page_content">
//                 <Sidebar setUserRole={setUserRole} />
//                 {children}
//                 <Outlet />
//             </div>
//         </CustomerLayoutContent>
//     );
// };
//
// export default CustomerLayout;

// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Sidebar } from "../../components/Sidebar/Sidebar.jsx";
// import { CustomerLayoutContent } from "./Styles.jsx";
// import { Outlet } from "react-router-dom";
// import { User } from "../../components/User/User.jsx";
// import useCustomerData from "../../hooks/useCustomerData.jsx";
//
// const CustomerLayout = ({ children, setUserRole }) => {
//     const accessToken = localStorage.getItem('accessToken');
//     const userRole = localStorage.getItem('userRole');
//     const navigate = useNavigate();
//     const { customerData, error } = useCustomerData();
//
//     useEffect(() => {
//         if (!accessToken) {
//             navigate('/login');
//         } else if (accessToken && userRole !== "Customer") {
//             navigate('/admin/accounts');
//         }
//     }, [accessToken, userRole, navigate]);
//
//     return (
//         (accessToken && userRole === "Customer") ? (
//             <CustomerLayoutContent>
//                 <User {...customerData} />
//                 <div className="page_content">
//                     <Sidebar setUserRole={setUserRole} />
//                     {children}
//                     <Outlet />
//                 </div>
//             </CustomerLayoutContent>
//         ) : null
//     );
// };
//
// export default CustomerLayout;

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sidebar } from "../../components/Sidebar/Sidebar.jsx";
import { CustomerLayoutContent } from "./Styles.jsx";
import { Outlet } from "react-router-dom";
import { User } from "../../components/User/User.jsx";
import useCustomerData from "../../hooks/useCustomerData.jsx";

const CustomerLayout = ({ children, setUserRole }) => {
    const accessToken = localStorage.getItem('accessToken');
    const userRole = localStorage.getItem('userRole');
    const navigate = useNavigate();

    useEffect(() => {
        if (!accessToken) {
            navigate('/login');
        } else if (accessToken && userRole !== "Customer") {
            navigate('/admin/accounts');
        }
    }, [accessToken, userRole, navigate]);

    // Fetch customerData only when conditions are met
    const customerData = (accessToken && userRole === "Customer") ? useCustomerData().customerData : null;

    return (
        (accessToken && userRole === "Customer") ? (
            <CustomerLayoutContent>
                {customerData && <User {...customerData} />}
                <div className="page_content">
                    <Sidebar setUserRole={setUserRole} />
                    {children}
                    <Outlet />
                </div>
            </CustomerLayoutContent>
        ) : null
    );
};

export default CustomerLayout;

