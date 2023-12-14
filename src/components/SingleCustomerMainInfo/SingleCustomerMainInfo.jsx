import React, { useState } from 'react';
import { MainContent } from './Styles.jsx';
import { Control } from '../Control/Control.jsx';

export const SingleCustomerMainInfo = ({ ...customerData }) => {
    const [formData, setFormData] = useState({ ...customerData });
    const [showText, setShowText] = useState(true);
    const [errors, setErrors] = useState({});

    const validateField = (name, value) => {
        switch (name) {
            case 'firstName':
            case 'lastName':
                return /^[A-Za-z]{2,}$/.test(value)
                    ? null
                    : 'Should contain at least 2 non-numeric characters';
            case 'email':
                return /\S+@\S+\.\S+/.test(value) ? null : 'Should be a valid email address';
            case 'phone':
                return /^\d{9,}$/.test(value) ? null : 'Should be at least 9 digits, numbers only';
            case 'password':
                return value.length >= 8 ? null : 'Should be at least 8 characters';
            case 'numericId':
                return /^\d+$/.test(value) ? null : 'Should contain only numeric characters';
            default:
                return null;
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        setShowText(true);
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: validateField(name, value),
        }));
    };

    const handleSaveClick = async () => {
        try {
            if (Object.values(errors).some((error) => error !== null)) {
                console.error('Validation failed. Please check the form fields.');
                return;
            }

            const accessToken = localStorage.getItem('accessToken');
            const response = await fetch('https://highdardata.xyz/office/v1/customers/setMain', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Data saved successfully!');
                setShowText(false);
            } else {
                console.error('Error saving customer data:', response.statusText);
            }
        } catch (error) {
            console.error('Error saving customer data:', error);
        }
    };

    return (
        <MainContent>
            <Control title="Main" buttonText="Save" onClick={handleSaveClick} showText={showText} />
            <div className="main-info">
                <div className="main-info-group">
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="text" name="email" value={formData.email} onChange={handleInputChange} />
                        {errors.email && <p className="error-message">{errors.email}</p>}
                    </div>
                    <div>
                        <label htmlFor="password"> Password:</label>
                        <input
                            type="text"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                        {errors.password && <p className="error-message">{errors.password}</p>}
                    </div>
                    <div>
                        <label htmlFor="phone"> Phone Number:</label>
                        <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} />
                        {errors.phone && <p className="error-message">{errors.phone}</p>}
                    </div>
                    <div>
                        <label htmlFor="numericId">ID:</label>
                        <input
                            type="text"
                            name="numericId"
                            value={formData.numericId}
                            onChange={handleInputChange}
                        />
                        {errors.numericId && <p className="error-message">{errors.numericId}</p>}
                    </div>
                    <div>
                        <label htmlFor="firstName">First Name:</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                        />
                        {errors.firstName && <p className="error-message">{errors.firstName}</p>}
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name:</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                        />
                        {errors.lastName && <p className="error-message">{errors.lastName}</p>}
                    </div>
                </div>
                <div className="main-info-group">
                    <div>
                        <label htmlFor="caseNumber"> Case number:</label>
                        <input
                            type="text"
                            name="caseNumber"
                            value={formData.caseNumber}
                            onChange={handleInputChange}
                        />
                        {errors.caseNumber && <p className="error-message">{errors.caseNumber}</p>}
                    </div>
                    <div>
                        <label htmlFor="caseStarted">Case Started:</label>
                        <input
                            type="text"
                            name="caseStarted"
                            value={formData.caseStarted}
                            onChange={handleInputChange}
                        />
                        {errors.caseStarted && <p className="error-message">{errors.caseStarted}</p>}
                    </div>
                    <div>
                        <label htmlFor="description">Description:</label>
                        <input
                            type="text"
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                        />
                        {errors.description && <p className="error-message">{errors.description}</p>}
                    </div>
                    <div>
                        <label htmlFor="currencySymbol">Currency symbol:</label>
                        <input
                            type="text"
                            name="currencySymbol"
                            value={formData.currencySymbol}
                            onChange={handleInputChange}
                        />
                        {errors.currencySymbol && (
                            <p className="error-message">{errors.currencySymbol}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="kycStatus"> KYC status:</label>
                        <input
                            type="text"
                            name="kycStatus"
                            value={formData.kycStatus}
                            onChange={handleInputChange}
                        />
                        {errors.kycStatus && <p className="error-message">{errors.kycStatus}</p>}
                    </div>
                    <div>
                        <label htmlFor="customerStatus">Customer status:</label>
                        <input
                            type="text"
                            name="customerStatus"
                            value={formData.customerStatus}
                            onChange={handleInputChange}
                        />
                        {errors.customerStatus && (
                            <p className="error-message">{errors.customerStatus}</p>
                        )}
                    </div>
                </div>
            </div>
        </MainContent>
    );
};
