import {AdminCustomersContent} from "./Styles.jsx";import React, {useEffect} from "react";
import {AdminCustomersSection} from "../../../components/AdminCustomersSection/AdminCustomersSection.jsx";
import {useNavigate} from "react-router-dom";

export const AdminCustomers = () => {

    const navigate = useNavigate();
    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        const userRole = localStorage.getItem('userRole');
        if (!accessToken) {
            navigate('/login');
        }
        if (userRole !== "Admin") {
            navigate('/login');
        }
    }, [navigate]);

    return (
        <AdminCustomersContent>
            <div className="customers_content">
               <AdminCustomersSection/>
            </div>
        </AdminCustomersContent>
    )
}

export default AdminCustomers;