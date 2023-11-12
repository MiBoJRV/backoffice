import React, { useState } from "react";
import { ModalContent } from "./Styles.jsx";
import bitcoin from './../../assets/images/cryptoIcon/bitcoin.svg'
import usdt from './../../assets/images/cryptoIcon/usdt.svg'
import ethereum from './../../assets/images/cryptoIcon/ethereum.svg'
import litecoin from './../../assets/images/cryptoIcon/litecoin.svg'
import arr from './../../assets/images/data_ar.svg'

const EditAdminAssetModalContent = ({ onSave, onClose, onCreate, editAssetData }) => {
    const [formData, setFormData] = useState({
        id: editAssetData?.id,
        name: editAssetData?.name || "",
        amount: editAssetData?.amount || "",
        price: editAssetData?.price || "",
        logoName: editAssetData?.logoName || "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSave = async () => {
        try {
            const accessToken = localStorage.getItem('accessToken');
            const response = await fetch("https://highdardata.xyz/office/v1/assets/update", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`,
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log("Asset successfully updated");
                onSave();
                onClose();
            } else {
                console.error("Error updating asset:", response.statusText);
            }
        } catch (error) {
            console.error("Error updating asset:", error);
        }
    };

    const handleCreate = () => {
        onCreate(formData);
        onClose();
    };

    return (
        <ModalContent>
            <div className="modal-content">
                <div className="create-assets-modal-fields">
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="amount">Amount</label>
                        <input
                            type="text"
                            id="amount"
                            name="amount"
                            value={formData.amount}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="price">Price</label>
                        <input
                            type="text"
                            id="price"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="logoName">Logo</label>
                        {/* Custom select with images */}
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
                                <div onClick={() => { handleChange({ target: { name: "logoName", value: "bitcoin.svg" } }); document.getElementById("options").classList.remove("show"); }}>
                                    <img src={bitcoin} alt="Bitcoin" width="25" height="25" />
                                </div>
                                <div onClick={() => { handleChange({ target: { name: "logoName", value: "usdt.svg" } }); document.getElementById("options").classList.remove("show"); }}>
                                    <img src={usdt} alt="Tether" width="25" height="25" />
                                </div>
                                <div onClick={() => { handleChange({ target: { name: "logoName", value: "ethereum.svg" } }); document.getElementById("options").classList.remove("show"); }}>
                                    <img src={ethereum} alt="Ethereum" width="25" height="25" />
                                </div>
                                <div onClick={() => { handleChange({ target: { name: "logoName", value: "litecoin.svg" } }); document.getElementById("options").classList.remove("show"); }}>
                                    <img src={litecoin} alt="Litecoin" width="25" height="25" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={handleSave}>Save</button>
            </div>
        </ModalContent>
    );
};

export default EditAdminAssetModalContent;