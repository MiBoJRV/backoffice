// LoginLayout.jsx
import React from 'react';
import {Outlet} from "react-router-dom";

const LoginLayout = ({ children }) => {
    return (
        <div>
            {children}
            <Outlet />
        </div>
    );
};

export default LoginLayout;
