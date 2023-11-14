import React, { useState } from "react";
import { ModalContent } from "./Styles.jsx";
import success from "../../assets/images/status/success.svg";
import fail from "../../assets/images/status/fail.svg";
import inprogress from "../../assets/images/status/inprogress.svg";
import newst from "../../assets/images/status/new.svg";

// import inprogressImg from "../../assets/images/status/inprogress.svg";
// import failImg from "../../assets/images/status/fail.svg";
// import successImg from "../../assets/images/status/success.svg";
// import newstImg from "../../assets/images/status/new.svg";

import arr from "../../assets/images/data_ar.svg";

const EditAdminTransactionModalContent = ({ onSave, onClose, onCreate, editTransactionData }) => {
    const [formData, setFormData] = useState({
        id: editTransactionData?.id,
        numericId: editTransactionData?.numericId,
        name: editTransactionData?.name || "",
        status: editTransactionData?.status || "1",
        statusFormatted: editTransactionData?.statusFormatted || "",
        description: editTransactionData?.description || "",
        country: editTransactionData?.country || "",
        recoveredAmount: editTransactionData?.recoveredAmount || "",
        date: editTransactionData?.date || "",

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
            const response = await fetch("https://highdardata.xyz/office/v1/transactions/update", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`,
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log("Asset successfully updated");
                // Call onSave function if needed
                onSave();
                // Close the modal
                onClose();
            } else {
                console.error("Error updating asset:", response.statusText);
            }
        } catch (error) {
            console.error("Error updating asset:", error);
        }
    };

    const handleCreate = () => {
        // Perform create operation with formData
        // Call onCreate function if needed
        onCreate(formData);
        // Close the modal
        onClose();
    };

    const handleStatusChange = (statusValue) => {
        handleChange({ target: { name: "status", value: statusValue } });
        document.getElementById("options").classList.remove("show");
    };

    return (
        <ModalContent>
            <div className="modal-content">
                <div className="edit-all-transaction-modal-fields">
                    <div>
                        <label htmlFor="numericId">Transaction ID</label>
                        <input
                            type="text"
                            id="numericId"
                            name="numericId"
                            value={formData.numericId}
                            onChange={handleChange}
                        />
                    </div>
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
                                <div className="inprogress" onClick={() => { handleChange({ target: { name: "status", value: 1 } }); document.getElementById("options").classList.remove("show"); }}>
                                    <img src={inprogress} alt="inprogress" width="25" height="25" />
                                </div>
                                <div className="success" onClick={() => { handleChange({ target: { name: "status", value: 2 } }); document.getElementById("options").classList.remove("show"); }}>
                                    <img src={success} alt="success" width="25" height="25" />
                                </div>
                                <div className="fail" onClick={() => { handleChange({ target: { name: "status", value: 3 } }); document.getElementById("options").classList.remove("show"); }}>
                                    <img src={fail} alt="fail" width="25" height="25" />
                                </div>
                                <div className="new" onClick={() => { handleChange({ target: { name: "status", value: 4 } }); document.getElementById("options").classList.remove("show"); }}>
                                    <img src={newst} alt="newst" width="25" height="25" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="description">Description</label>
                        <input
                            type="text"
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="country">Country</label>
                        <input
                            type="text"
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="recoveredAmount">Recovered Amount</label>
                        <input
                            type="text"
                            id="recoveredAmount"
                            name="recoveredAmount"
                            value={formData.recoveredAmount}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="date">Date</label>
                        <input
                            type="text"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <button onClick={handleSave}>Save</button>
            </div>
        </ModalContent>
    );
};

export default EditAdminTransactionModalContent;