import React from "react";
import {PageCustomerContent} from "../PageCustomerContent/PageCustomerContent.jsx";
import {CustomerPersonalInfo} from "../CustomerPersonalInfo/CustomerPersonalInfo.jsx";
import {CustomerContent} from "./Styles.jsx";
import {ClientsPortfolio} from "../ClientsPortfolio/ClientsPortfolio.jsx";
import CustomerCustomersTable from "../CustomerCustomersTable/CustomerCustomersTable.jsx";

export const CustomerCustomersSection = ({...customerData}) => {
    return (
        <CustomerContent>
            <PageCustomerContent>
                <h2 className="customers-title">Customers</h2>
                <CustomerPersonalInfo {...customerData}/>
                <ClientsPortfolio{...customerData}/>
                <CustomerCustomersTable/>
            </PageCustomerContent>
        </CustomerContent>
    )
}