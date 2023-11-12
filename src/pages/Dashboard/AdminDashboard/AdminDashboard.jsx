import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {AdminDashboardSection} from "../../../components/AdminDashboardSection/AdminDashboardSection.jsx";
import {AdminDashboardContent} from "./Styles.jsx";

const AdminDashboard = () => {
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
        <AdminDashboardContent>
            <div className="dashboard_content">
                <AdminDashboardSection/>
            </div>
        </AdminDashboardContent>

    );
};

export default AdminDashboard;
