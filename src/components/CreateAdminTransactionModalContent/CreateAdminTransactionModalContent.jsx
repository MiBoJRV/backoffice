import React, {useEffect, useState} from 'react';
import {ModalContent} from "./Styles.jsx";
// import useSingleCustomer from "../../hooks/useSingleCustomer.jsx";


// import usdt from '../../assets/images/cryptoIcon/usdt.svg';
// import bitcoin from '../../assets/images/cryptoIcon/bitcoin.svg';
// import ethereum from '../../assets/images/cryptoIcon/ethereum.svg';
// import litecoin from '../../assets/images/cryptoIcon/litecoin.svg';

const useSingleCustomer = (id) => {
    const [customerData, setCustomerData] = useState(null);

    const fetchData = async () => {
        try {
            const accessToken = localStorage.getItem('accessToken');
            const response = await fetch(`https://highdardata.xyz/office/v1/customers/getSingle?id=${id}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            if (response.ok) {
                const data = await response.json();
                setCustomerData(data);
            } else {
                console.error('Error fetching customer data:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching customer data:', error);
        }
    };

    useEffect(() => {
        if (id) {
            fetchData();
            console.log("дані оновлено")
        }

        return () => {
        };
    }, [id]);

    return { customerData, fetchData };
};

const CreateAdminTransactionModalContent = ({isOpen, onClose, onCreate}) => {

    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get('id');

    const { customerData, fetchData } = useSingleCustomer(id);


    const [formData, setFormData] = useState({
        customerId: id,
        numericId: '',
        name: '',
        status: '',
        description: '',
        country: '',
        recoveredAmount: '',
        date: '',
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSave = async () => {
        try {
            const accessToken = localStorage.getItem('accessToken');
            const response = await fetch('https://highdardata.xyz/office/v1/transactions/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                onCreate(formData);
                console.log('Transaction created successfully!');
                onClose(); // Close the modal first
                fetchData(); // Fetch data after closing the modal
                console.log("fetchData after create Transaction ");
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
        <ModalContent>
            <div className="modal-content">
                <div className="create-transactions-modal-fields">
                    <div>
                        <label>Transaction ID:</label>
                        <input type="text" name="numericId" value={formData.numericId} onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label>Name:</label>
                        <input type="text" name="name" value={formData.name} onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label>Status:</label>
                        <select name="status" id="status" value={formData.status} onChange={handleInputChange}>
                            <option value="1"> InProgress</option>
                            <option value="2">Success</option>
                            <option value="3">Fail</option>
                            <option value="4">New</option>
                        </select>
                    </div>
                    <div>
                        <label>Description:</label>
                        <input type="text" name="description" value={formData.description} onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label>Country:</label>
                        <input type="text" name="country" value={formData.country} onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label>Recovered Amount:</label>
                        <input type="text" name="recoveredAmount" value={formData.recoveredAmount} onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label>Date:</label>
                        <input type="text" name="date" value={formData.date} onChange={handleInputChange}/>
                    </div>
                </div>
                <button onClick={handleSave}>Save</button>
            </div>
        </ModalContent>
    );
};

export default CreateAdminTransactionModalContent;


