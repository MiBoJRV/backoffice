import React, { useState } from 'react';
import { CreateCustomerModalContent } from './Styles.jsx';

const CreateCustomerModal = ({ isOpen, onClose, onCreate, fetchCustomers }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        phone: '',
        numericId: '',
        firstName: '',
        lastName: '',
    });

    const [errors, setErrors] = useState({
        email: '',
        password: '',
        phone: '',
        numericId: '',
        firstName: '',
        lastName: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Validate if the input is for the phone or ID field, and if so, allow only digits
        if ((name === 'phone' || name === 'numericId') && !/^\d*$/.test(value)) {
            return;
        }

        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' }); // Clear previous errors when input changes
    };

    const validateForm = () => {
        let isValid = true;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validate First Name
        if (formData.firstName.trim().length < 2 || /\d/.test(formData.firstName)) {
            setErrors((prevErrors) => ({ ...prevErrors, firstName: 'First Name must be at least 2 characters long and cannot contain numbers' }));
            isValid = false;
        }

        // Validate Last Name
        if (formData.lastName.trim().length < 2 || /\d/.test(formData.lastName)) {
            setErrors((prevErrors) => ({ ...prevErrors, lastName: 'Last Name must be at least 2 characters long and cannot contain numbers' }));
            isValid = false;
        }

        // Validate Email
        if (!emailRegex.test(formData.email.trim())) {
            setErrors((prevErrors) => ({ ...prevErrors, email: 'Invalid email format' }));
            isValid = false;
        }

        // Validate Phone Number
        if (formData.phone.trim().length < 9) {
            setErrors((prevErrors) => ({ ...prevErrors, phone: 'Phone Number must be at least 9 characters long' }));
            isValid = false;
        }

        // Validate ID
        if (formData.numericId.trim() === '') {
            setErrors((prevErrors) => ({ ...prevErrors, numericId: 'ID cannot be empty' }));
            isValid = false;
        }

        // Validate Password
        if (formData.password.trim().length < 8) {
            setErrors((prevErrors) => ({ ...prevErrors, password: 'Password must be at least 8 characters long' }));
            isValid = false;
        }

        return isValid;
    };

    const handleSave = async () => {
        try {
            if (!validateForm()) {
                // If form validation fails, don't proceed with the save
                return;
            }

            const accessToken = localStorage.getItem('accessToken');
            const response = await fetch('https://highdardata.xyz/office/v1/customers/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                onCreate(formData);
                console.log('Customer created successfully!');
                onClose();
                fetchCustomers();
            } else {
                console.error('Помилка при відправці даних на сервер');
            }
        } catch (error) {
            console.error('Помилка:', error);
        }
    };

    if (!isOpen) {
        return null;
    }

    return (
        <CreateCustomerModalContent>
            <div className="modal-content-wrap">
                <div className="create-customer-modal-fields">
                    <div>
                        <label>Email:</label>
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
                        <span className="error-message">{errors.email}</span>
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
                        <span className="error-message">{errors.password}</span>
                    </div>
                    <div>
                        <label>Phone Number:</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} />
                        <span className="error-message">{errors.phone}</span>
                    </div>
                    <div>
                        <label>ID:</label>
                        <input type="text" name="numericId" value={formData.numericId} onChange={handleInputChange} />
                        <span className="error-message">{errors.numericId}</span>
                    </div>
                    <div>
                        <label>First Name:</label>
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} />
                        <span className="error-message">{errors.firstName}</span>
                    </div>
                    <div>
                        <label>Last Name:</label>
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} />
                        <span className="error-message">{errors.lastName}</span>
                    </div>
                </div>
                <button onClick={handleSave}>Save</button>
            </div>
        </CreateCustomerModalContent>
    );
};

export default CreateCustomerModal;
