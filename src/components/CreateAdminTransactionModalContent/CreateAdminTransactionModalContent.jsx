import React, {useEffect, useState} from 'react';
import {ModalContent} from "./Styles.jsx";
import inprogress from "../../assets/images/status/inprogress.svg";
import success from "../../assets/images/status/success.svg";
import fail from "../../assets/images/status/fail.svg";
import newst from "../../assets/images/status/new.svg";
import arr from "../../assets/images/data_ar.svg";
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
                        <label htmlFor="numericId">Transaction ID</label>
                        <input type="text" name="numericId" value={formData.numericId} onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label htmlFor="status">Status</label>
                        <div className="custom-select">
                            <div className="selected-option" onClick={() => document.getElementById("options").classList.toggle("show")}>
                                <img src={formData.status === 1 ? inprogress  :
                                    formData.status === 2 ?  success:
                                        formData.status === 3 ? fail :
                                            formData.status === 4 ? newst : newst}
                                     alt={formData.statusFormatted}
                                     width="25"
                                     height="25"
                                />
                                <img className="arr" src={arr} alt="arr" width="15" height="10"/>
                            </div>
                            <div id="options" className="options">
                                <div className="inprogress" onClick={() => { handleInputChange({ target: { name: "status", value: 1 } }); document.getElementById("options").classList.remove("show"); }}>
                                    <img src={inprogress} alt="inprogress" width="25" height="25" />
                                </div>
                                <div className="success" onClick={() => { handleInputChange({ target: { name: "status", value: 2 } }); document.getElementById("options").classList.remove("show"); }}>
                                    <img src={success} alt="success" width="25" height="25" />
                                </div>
                                <div className="fail" onClick={() => { handleInputChange({ target: { name: "status", value: 3 } }); document.getElementById("options").classList.remove("show"); }}>
                                    <img src={fail} alt="fail" width="25" height="25" />
                                </div>
                                <div className="new" onClick={() => { handleInputChange({ target: { name: "status", value: 4 } }); document.getElementById("options").classList.remove("show"); }}>
                                    <img src={newst} alt="newst" width="25" height="25" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="description">Description</label>
                        <input type="text" name="description" value={formData.description} onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label htmlFor="country">Country</label>
                        <input type="text" name="country" value={formData.country} onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label htmlFor="recoveredAmount">Recovered Amount</label>
                        <input type="text" name="recoveredAmount" value={formData.recoveredAmount} onChange={handleInputChange}/>
                    </div>
                    <div>
                        <label htmlFor="date">Date</label>
                        <input type="text" name="date" value={formData.date} onChange={handleInputChange}/>
                    </div>
                </div>
                <button className="modal-save" onClick={handleSave}>Save</button>
            </div>
        </ModalContent>
    );
};

export default CreateAdminTransactionModalContent;


