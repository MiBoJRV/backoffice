import React from "react";
import {AdminDashboardContent} from "./Style.jsx";
import AdminCustomersAllTable from "../AdminCustomersAllTable/AdminCustomersAllTable.jsx";

export const AdminDashboardSection = () => {
    return (
     <AdminDashboardContent>
            <AdminCustomersAllTable/>
     </AdminDashboardContent>
    )
}