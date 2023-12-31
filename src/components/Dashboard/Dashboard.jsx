import React from "react";
import Tether from "./../../assets/images/Tether.svg"
import Bitcoin from "./../../assets/images/Bitcoin .svg"
import Ethereum from "./../../assets/images/Ethereum.svg"
import {DashboardContent} from "./Styles.jsx";
import {ChartsLine} from "../ChartsLine/ChartsLine.jsx";
import {ChartsLine13} from "../ChartsLine13/ChartsLine13.jsx";
import {ChartsDoughnut} from "../ChartDoughnut/ChartDoughnut.jsx";
import {CustomerPersonalInfo} from "../CustomerPersonalInfo/CustomerPersonalInfo.jsx";


export const Dashboard = ({...customerData}) => {
    if (!customerData || !customerData.assets) {
        return <div>Loading...</div>; // or any other loading indicator/message
    }

    const isMobileDevice = () => {
        // Your logic to determine if it's a mobile device
        // Example: Check if the screen width is below a certain threshold
        return window.innerWidth <= 600;
    };

    const differenceAmountValue = parseFloat(customerData?.differenceAmount);
    const isNegative = differenceAmountValue < 0;
    const formattedDifferenceAmount = `${isNegative ? "-" : "+"}${Math.abs(
        differenceAmountValue
    )}${customerData?.currencySymbol}`;

    const cryptoIconPath = '/src/assets/images/cryptoIcon/'

    return (
        <DashboardContent className="dashboard">
            <h1>Dashboard</h1>
            <CustomerPersonalInfo {...customerData}/>
            <div className="worth">
                <div className="worth_left">
                    <h2 className="total">Total Worth</h2>
                    <h2 className="total_worth">
                        <span>{customerData?.currencySymbol}</span>
                        <span>{customerData?.totalWorth}</span>
                        {/*{customerData?.assets.reduce((total, asset) => total + asset.amount * asset.price, 0).toFixed(3)}*/}
                    </h2>
                    <div className="difference">
                        <span className={`difference_amount ${isNegative ? "negative" : "positive"}`}>
                            {formattedDifferenceAmount}
                        </span>
                        <span
                            className={`difference_percent ${customerData?.differencePercent < 0 ? "negative" : "positive"}`}>
                            <svg width="11" height="6" viewBox="0 0 11 6" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.5 6L0.73686 0.75L10.2631 0.75L5.5 6Z"/>
                            </svg>
                            {customerData?.differencePercent > 0 ? "+" : "-"}
                            {Math.abs(customerData?.differencePercent).toFixed(2)}%
                        </span>
                    </div>
                </div>
                <div className="main-graph-chart">
                    <div className="worth_right chart-line"
                         style={{width: '540px', height: '111px'}}>
                        <ChartsLine{...customerData}/>
                    </div>
                </div>
            </div>
            <div className="assets">
                <h2>
                    <span>Assets</span>
                    <span>
                        <span>{customerData?.currencySymbol}</span>
                        <span>{customerData?.assets.reduce((total, asset) => total + asset.amount * asset.price, 0)}</span>
                    </span>
                </h2>
                <div className="assets_table">
                    {isMobileDevice() ? (
                        <div className="table-mobile">
                            {customerData?.assets.map((asset) => (
                                <div key={asset.id}>
                                    <div className="top">
                                        <div className="head">
                                            <span className="title">Name</span>
                                        </div>
                                        <div className="body">
                                            <span>
                                               <img className="assets_icon" src={`${cryptoIconPath}${asset.logoName}`}
                                                    alt={asset.name}/>
                                            </span>
                                            <span className="data"> {asset.name}</span>

                                        </div>
                                    </div>
                                    <div className="bottom">
                                        <div className="head">
                                            <div className="group">
                                                <span className="title">Amount</span>
                                                <span className="data">{asset.amount.toFixed(3)}</span>
                                            </div>
                                            <div className="group">
                                                <span className="title"> Price</span>
                                                <span className="data"><span
                                                    className={'symbol'}>{customerData?.currencySymbol}</span>{asset.price.toFixed(2)}</span>
                                            </div>
                                            <div className="group">
                                                <span className="title">Total</span>
                                                <span className="data"><span
                                                    className={'symbol'}>{customerData?.currencySymbol}</span>{(asset.amount * asset.price).toFixed(3)}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <table>
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Amount</th>
                                <th>Price</th>
                                <th>Total</th>
                            </tr>
                            </thead>
                            <tbody>
                            {customerData?.assets.map((asset) => (
                                <tr key={asset.id}>
                                    <td>
                                        <img className="assets_icon" src={`${cryptoIconPath}${asset.logoName}`}
                                             alt={asset.name}/>
                                        {asset.name}
                                    </td>
                                    <td>{asset.amount.toFixed(3)}</td>
                                    <td><span
                                        className={'symbol'}>{customerData?.currencySymbol}</span>{asset.price.toFixed(2)}
                                    </td>
                                    <td><span
                                        className={'symbol'}>{customerData?.currencySymbol}</span>{(asset.amount * asset.price).toFixed(3)}
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    )}
                </div>
                <div className="assets_charts">
                    <div className="assets_charts-doughnut">
                        <ChartsDoughnut{...customerData} />
                    </div>
                </div>
            </div>
            <div className="second-graph-chart">
                <div className="chart-line" style={{height: '369px', width: '958px'}}>
                    <ChartsLine13 {...customerData}/>
                </div>
            </div>
        </DashboardContent>
    )
};
