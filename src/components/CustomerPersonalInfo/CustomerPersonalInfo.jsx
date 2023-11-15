import React from "react";
import {PersonalInfoContent} from "./Styles.jsx";

export const CustomerPersonalInfo = ({...customerData}) => {
    return (
        <PersonalInfoContent className="personal-info">
            <h2>Personal Info</h2>
            <div className="case_content">
                <div className="case_field">
                    <span className="label">Case number:</span>
                    <span>{customerData?.caseNumber}</span>
                </div>
                <div className="case_field">
                    <span className="label">Case Started:</span>
                    <span>{customerData?.caseStarted}</span>
                </div>
                <div className="case_field">
                    <span className="label">Email:</span>
                    <span>{customerData?.email}</span>
                </div>
                <div className="case_field">
                    <span className="label">First Name:</span>
                    <span>{customerData?.firstName}</span>
                </div>
                <div className="case_field">
                    <span className="label">Last Name:</span>
                    <span>{customerData?.lastName}</span>
                </div>
                <div className="case_field">
                    <span className="label">Description:</span>
                    <span>{customerData?.description}</span>
                </div>
                <div className="case_field">
                    <span className="label">Customer status:</span>
                    <span>{customerData?.customerStatus}</span>
                </div>
                <div className="case_field">
                    <span className="label">KYC status:</span>
                    <span>{customerData?.kycStatus}</span>
                </div>
            </div>
        </PersonalInfoContent>
    )
}