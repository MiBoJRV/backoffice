import React from 'react';
import {Sidebar} from "../../components/Sidebar/Sidebar.jsx";
import {AdminHeader} from "../../components/AdminHeader/AdminHeader.jsx";
import {AdminLayoutContent} from "./Styles.jsx";
import {Outlet} from "react-router-dom";

const AdminLayout = ({children, setUserRole}) => {
    return (
        <AdminLayoutContent>
            <AdminHeader/>
            <div className="page_content">
                <Sidebar setUserRole={setUserRole}/>
                {children}
                <Outlet />
            </div>
        </AdminLayoutContent>
    );
};

export default AdminLayout;
