import useCustomerData from "../../../hooks/useCustomerData.jsx";
import React, {useEffect} from "react";
import {CustomerCustomersSection} from "../../../components/CustomerCustomersSection/CustomerCustomersSection.jsx";
import {CustomerCustomersContent} from "./Styles.jsx";
import {useNavigate} from "react-router-dom";

const CustomerCustomers = () => {
    const {customerData, error} = useCustomerData();

    const navigate = useNavigate();
    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        const userRole = localStorage.getItem('userRole');
        if (!accessToken) {
            navigate('/login');
        }
        if (userRole !== "Customer") {
            navigate('/login');
        }
    }, [navigate]);
    return (
        <CustomerCustomersContent>
            <div className="transactions_content">
                <CustomerCustomersSection {...customerData}/>
            </div>
            {error && <div className="error-message">{error}</div>}
        </CustomerCustomersContent>
    )
}

export default CustomerCustomers;