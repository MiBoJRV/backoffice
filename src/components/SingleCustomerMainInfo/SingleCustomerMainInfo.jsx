import React, {useState} from 'react';
import {MainContent} from './Styles.jsx';
import {Control} from "../Control/Control.jsx";

export const SingleCustomerMainInfo = ({...customerData}) => {
    const [formData, setFormData] = useState({...customerData});
    const [showText, setShowText] = useState(true);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSaveClick = async () => {
        try {
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
            <Control title="Main" buttonText="Save" onClick={handleSaveClick} showText={showText}/>
            <div className="main-info">
                <div className="main-info-group">
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="text" name="email" value={formData.email} onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label htmlFor="password"> Password:</label>
                        <input type="text" name="password" value={formData.password} onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label htmlFor="phone"> Phone Number:</label>
                        <input type="text" name="phone" value={formData.phone} onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label htmlFor="numericId">ID:</label>
                        <input type="text" name="numericId" value={formData.numericId} onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange}/>
                    </div>
                </div>
                <div className="main-info-group">
                    <div>
                        <label htmlFor="caseNumber"> Case number:</label>
                        <input type="text" name="caseNumber" value={formData.caseNumber} onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label htmlFor="caseStarted">Case Started:</label>
                        <input type="text" name="caseStarted" value={formData.caseStarted}
                               onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label htmlFor="description">Description:</label>
                        <input type="text" name="description" value={formData.description}
                               onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label htmlFor="currencySymbol">Currency symbol:</label>
                        <input type="text" name="currencySymbol" value={formData.currencySymbol}
                               onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label htmlFor="kycStatus"> KYC status:</label>
                        <input type="text" name="kycStatus" value={formData.kycStatus} onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label htmlFor="customerStatus">Customer status:</label>
                        <input type="text" name="customerStatus" value={formData.customerStatus}
                               onChange={handleInputChange}/>
                    </div>
                </div>
            </div>
        </MainContent>
    );
};
