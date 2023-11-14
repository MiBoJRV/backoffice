import React, { useState, useEffect } from "react";
import logo from "./../../assets/images/logo.svg"
import accountsIcon from "./../../assets/images/accounts.svg"
import customersIcon from "./../../assets/images/customers.svg"
import dashboardIcon from "./../../assets/images/dashboard.svg"
import transactionsIcon from "./../../assets/images/transactions.svg"
import { SidebarLeft } from "./Styles.jsx";
import {Link, useLocation} from "react-router-dom";

const ADMIN_MENUS = [
    {
        name: 'accounts', path: '/admin/accounts', icon: accountsIcon,
    },
    {
        name: 'customers', path: '/admin/customers', icon: customersIcon,
    },
];

const CUSTOMER_MENUS = [
    {
        name: 'dashboard', path: '/customer/dashboard', icon: dashboardIcon,
    },
    {
        name: 'transactions', path: '/customer/transactions', icon: transactionsIcon,
    },
    {
        name: 'customers', path: '/customer/customers', icon: customersIcon,
    },
];

export const Sidebar = ({ setUserRole }) => {
    const [cryptoPrices, setCryptoPrices] = useState({
        bitcoin: 0,
        ethereum: 0,
        litecoin: 0,
        tether: 0,
    });

    useEffect(() => {
        const fetchCryptoPrices = async () => {
            try {
                const responseBitcoin = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=eur");
                const dataBitcoin = await responseBitcoin.json();

                const responseEthereum = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=eur");
                const dataEthereum = await responseEthereum.json();

                const responseLitecoin = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=litecoin&vs_currencies=eur");
                const dataLitecoin = await responseLitecoin.json();

                const responseTether = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=eur");
                const dataTether = await responseTether.json();

                setCryptoPrices({
                    bitcoin: dataBitcoin.bitcoin.eur,
                    ethereum: dataEthereum.ethereum.eur,
                    litecoin: dataLitecoin.litecoin.eur,
                    tether: dataTether.tether.eur,
                });
            } catch (error) {
                console.error("Error fetching crypto prices", error);
            }
        };

        fetchCryptoPrices();
    }, []);

    const userRole = localStorage.getItem('userRole')
    const menus = userRole === "Customer" ? CUSTOMER_MENUS : ADMIN_MENUS;

    const location = useLocation();
    return (
        <SidebarLeft>
            <div className="header-sidebar">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <ul className="sidebar-list">
                    {menus.map((item) => (
                        <li key={item.name}>
                            <Link to={item.path} style={{ fontWeight: location.pathname === item.path ? 'bold' : 'inherit' }}>
                                <img src={item.icon} alt={item.name} />
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="coin-price">
                <ul>
                    <li>
                        <span>
                            Buy
                        </span>
                        <span>
                            USD
                        </span>
                    </li>
                    <li>
                        <span>1 BTC</span>
                        <span>{cryptoPrices.bitcoin.toFixed(2)}</span>
                    </li>
                    <li>
                        <span>1 ETH</span>
                        <span>{cryptoPrices.ethereum.toFixed(2)}</span>
                    </li>
                    <li>
                        <span>1 LTC</span>
                        <span>{cryptoPrices.litecoin.toFixed(2)}</span>
                    </li>
                    <li>
                        <span>1 USDT</span>
                        <span>{cryptoPrices.tether.toFixed(2)}</span>
                    </li>
                </ul>
            </div>
        </SidebarLeft>);
};
