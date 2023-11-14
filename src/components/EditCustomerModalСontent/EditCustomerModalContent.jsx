import React, {useState, useEffect} from 'react';
import {ModalContent} from "./Styles.jsx";

const EditCustomerModalContent = ({customer, onSave}) => {
    const [inputValue, setInputValue] = useState('');

    const [editedData, setEditedData] = useState({
        numericId: customer.numericId || '',
        name: customer.name || '',
        status: customer.status || '',
        country: customer.country || '',
        recoveredAmount: customer.recoveredAmount || '',
        date: customer.date || '',
        password: customer.password
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setEditedData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSave = () => {
        onSave({...editedData, id: customer.id});
    };

    return (
        <ModalContent className="edit-customer-modal">
            <div className="edit-customer-modal-fields">
                <div>
                    <label htmlFor="numericId">ID</label>
                    <input type="text" name="numericId" value={editedData.numericId} onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={editedData.name} onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="email">Status</label>
                    <input type="text" name="status" value={editedData.status} onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="phone">Country</label>
                    <input type="text" name="country" value={editedData.country} onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="caseNumber">Recovered Amount</label>
                    <input type="text" name="recoveredAmount" value={editedData.recoveredAmount} onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="date">Date</label>
                    <input type="text" name="date" value={editedData.date} onChange={handleInputChange}/>
                </div>
            </div>
            <button className="modal-save" onClick={handleSave}>Save</button>
        </ModalContent>
    );
};

export default EditCustomerModalContent;

