// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Sidebar } from "../../components/Sidebar/Sidebar.jsx";
// import { AdminHeader } from "../../components/AdminHeader/AdminHeader.jsx";
// import { AdminLayoutContent } from "./Styles.jsx";
// import { Outlet } from "react-router-dom";
//
// const AdminLayout = ({ children, setUserRole }) => {
//     const accessToken = localStorage.getItem('accessToken');
//     const navigate = useNavigate();
//
//     useEffect(() => {
//         if (!accessToken) {
//             navigate('/login');
//         }
//     }, [accessToken, navigate]);
//
//     return (
//         accessToken ? (
//             <AdminLayoutContent>
//                 <AdminHeader />
//                 <div className="page_content">
//                     <Sidebar setUserRole={setUserRole} />
//                     {children}
//                     <Outlet />
//                 </div>
//             </AdminLayoutContent>
//         ) : null
//     );
// };
//
// export default AdminLayout;





import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sidebar } from "../../components/Sidebar/Sidebar.jsx";
import {AdminLayoutContent} from "./Styles.jsx";
import { Outlet } from "react-router-dom";
import {AdminHeader} from "../../components/AdminHeader/AdminHeader.jsx";

const CustomerLayout = ({ children, setUserRole }) => {
    const accessToken = localStorage.getItem('accessToken');
    const userRole = localStorage.getItem('userRole');
    const navigate = useNavigate();

    useEffect(() => {
        if (!accessToken) {
            navigate('/login');
        } else if (accessToken && userRole !== "Admin") {
            navigate('/customer/dashboard');
        }
    }, [accessToken, userRole, navigate]);

    return (
        (accessToken && userRole === "Admin") ? (
            <AdminLayoutContent>
                <AdminHeader />
                <div className="page_content">
                    <Sidebar setUserRole={setUserRole} />
                    {children}
                    <Outlet />
                </div>
            </AdminLayoutContent>
        ) : null
    );
};

export default CustomerLayout;
