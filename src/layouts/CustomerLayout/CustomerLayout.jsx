import React from "react";
import { Sidebar } from "../../components/Sidebar/Sidebar.jsx";
import { User } from "../../components/User/User.jsx";
import {CustomerLayoutContent} from "./Styles.jsx";
import useCustomerData from "../../hooks/useCustomerData.jsx";
import {Outlet} from "react-router-dom";

const CustomerLayout = ({ children, setUserRole }) => {
    const { customerData, error } = useCustomerData();
    return (
        <CustomerLayoutContent>
            <User {...customerData} />
            <div className="page_content">
                <Sidebar setUserRole={setUserRole} />
                {children}
                <Outlet />
            </div>
        </CustomerLayoutContent>
    );
};

export default CustomerLayout;
