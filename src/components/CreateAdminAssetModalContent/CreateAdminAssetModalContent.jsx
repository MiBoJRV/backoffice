import React, {useEffect, useState} from 'react';
import {ModalContent} from "./Styles.jsx";

import bitcoin from './../../assets/images/cryptoIcon/bitcoin.svg'
import usdt from './../../assets/images/cryptoIcon/usdt.svg'
import ethereum from './../../assets/images/cryptoIcon/ethereum.svg'
import litecoin from './../../assets/images/cryptoIcon/litecoin.svg'
import arr from './../../assets/images/data_ar.svg'

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

const CreateAdminAssetModalContent = ({isOpen, onClose, onCreate}) => {

    const searchParams = new URLSearchParams(window.location.search);
    const id = searchParams.get('id');

    const { customerData, fetchData } = useSingleCustomer(id);


    const [formData, setFormData] = useState({
        customerId: id,
        name: '',
        amount: '',
        price: '',
        logoName: 'bitcoin.svg',
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSave = async () => {
        try {
            const accessToken = localStorage.getItem('accessToken');
            const response = await fetch('https://highdardata.xyz/office/v1/assets/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                onCreate(formData);
                console.log('Asset created successfully!');
                onClose(); // Close the modal first
                fetchData(); // Fetch data after closing the modal
                console.log("fetchData after create Asset ");
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

                <div className="create-assets-modal-fields">
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label htmlFor="amount">Amount</label>
                        <input type="text" name="amount" value={formData.amount} onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label htmlFor="price">Price</label>
                        <input type="text" name="price" value={formData.price} onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label htmlFor="logoName">Logo</label>
                        <div className="custom-select">
                            <div className="selected-option" onClick={() => document.getElementById("options").classList.toggle("show")}>
                                <img src={formData.logoName === 'bitcoin.svg' ? bitcoin :
                                    formData.logoName === 'usdt.svg' ? usdt :
                                        formData.logoName === 'ethereum.svg' ? ethereum :
                                            formData.logoName === 'litecoin.svg' ? litecoin : ''}
                                     alt={formData.logoName}
                                     width="25"
                                     height="25"
                                />
                                <img className="arr" src={arr} alt="arr" width="15" height="10"/>
                            </div>
                            <div id="options" className="options">
                                <div onClick={() => { handleInputChange({ target: { name: "logoName", value: "bitcoin.svg" } }); document.getElementById("options").classList.remove("show"); }}>
                                    <img src={bitcoin} alt="Bitcoin" width="25" height="25" />
                                </div>
                                <div onClick={() => { handleInputChange({ target: { name: "logoName", value: "usdt.svg" } }); document.getElementById("options").classList.remove("show"); }}>
                                    <img src={usdt} alt="Tether" width="25" height="25" />
                                </div>
                                <div onClick={() => { handleInputChange({ target: { name: "logoName", value: "ethereum.svg" } }); document.getElementById("options").classList.remove("show"); }}>
                                    <img src={ethereum} alt="Ethereum" width="25" height="25" />
                                </div>
                                <div onClick={() => { handleInputChange({ target: { name: "logoName", value: "litecoin.svg" } }); document.getElementById("options").classList.remove("show"); }}>
                                    <img src={litecoin} alt="Litecoin" width="25" height="25" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={handleSave}>Save</button>

        </ModalContent>
    );
};

export default CreateAdminAssetModalContent;


