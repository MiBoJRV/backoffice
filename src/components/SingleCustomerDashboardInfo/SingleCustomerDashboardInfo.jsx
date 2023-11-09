import React, {useState} from "react";
import {DashboardContent} from "./Styles.jsx";
import {ChartsLine} from "../ChartsLine/ChartsLine.jsx";
import {ChartsLine13} from "../ChartsLine13/ChartsLine13.jsx";
import login from "../../pages/Auth/Login/Login.jsx";

export const SingleCustomerDashboardInfo = ({...customerData}) => {
    const [formData, setFormData] = useState({...customerData});

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
            const response = await fetch('https://highdardata.xyz/office/v1/customers/setDashboard', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Data saved successfully!');

                const updatedChartData = {
                    mainGraph1: formData.mainGraph1,
                    mainGraph2: formData.mainGraph2,
                    mainGraph3: formData.mainGraph3,
                    mainGraph4: formData.mainGraph4,
                    mainGraph5: formData.mainGraph5,
                    mainGraph6: formData.mainGraph6,
                };
                setChartData(updatedChartData);

                const updatedChartData13 = {
                    secondGraph1: formData.secondaryGraph1,
                    secondGraph2: formData.secondaryGraph2,
                    secondGraph3: formData.secondaryGraph3,
                    secondGraph4: formData.secondaryGraph4,
                    secondGraph5: formData.secondaryGraph5,
                    secondGraph6: formData.secondaryGraph6,
                    secondGraph7: formData.secondaryGraph7,
                    secondGraph8: formData.secondaryGraph8,
                    secondGraph9: formData.secondaryGraph9,
                    secondGraph10: formData.secondaryGraph10,
                    secondGraph11: formData.secondaryGraph11,
                    secondGraph12: formData.secondaryGraph12,
                    secondGraph13: formData.secondaryGraph13,
                };
                // setChartData(updatedChartData13);
                console.log(updatedChartData13)
            } else {
                console.error('Error saving customer data:', response.statusText);
            }
        } catch (error) {
            console.error('Error saving customer data:', error);
        }
    };

    const [chartData, setChartData] = useState({
        mainGraph1: customerData.mainGraph1,
        mainGraph2: customerData.mainGraph2,
        mainGraph3: customerData.mainGraph3,
        mainGraph4: customerData.mainGraph4,
        mainGraph5: customerData.mainGraph5,
        mainGraph6: customerData.mainGraph6,
    });
    const [chartData13, setChartData13] = useState({
        secondaryGraph1: customerData.secondaryGraph1,
        secondaryGraph2: customerData.secondaryGraph2,
        secondaryGraph3: customerData.secondaryGraph3,
        secondaryGraph4: customerData.secondaryGraph4,
        secondaryGraph5: customerData.secondaryGraph5,
        secondaryGraph6: customerData.secondaryGraph6,
        secondaryGraph7: customerData.secondaryGraph7,
        secondaryGraph8: customerData.secondaryGraph8,
        secondaryGraph9: customerData.secondaryGraph9,
        secondaryGraph10: customerData.secondaryGraph10,
        secondaryGraph11: customerData.secondaryGraph11,
        secondaryGraph12: customerData.secondaryGraph12,
        secondaryGraph13: customerData.secondaryGraph13,
    });

    return (
        <DashboardContent>
            <div className="control">
                <h2>Dashboard</h2>
                <button onClick={handleSaveClick}>
                    Save
                </button>
            </div>
            <div className="dashboard-info-content">
                <div className="dashboard-info">
                    <div className="dashboard-info-group">
                        <div>
                            Total Worth:
                            <input type="text" name="totalWorth" value={formData.totalWorth}
                                   onChange={handleInputChange}/>
                        </div>
                        <div>
                            Difference:
                            <input type="text" name="differenceAmount" value={formData.differenceAmount}
                                   onChange={handleInputChange}/>
                        </div>
                        <div>
                            Different in percent:
                            <input type="text" name="differencePercent" value={formData.differencePercent}
                                   onChange={handleInputChange}/>
                        </div>
                    </div>
                </div>
                <div className="dashboard-info-group main-graph">
                    <h3>Graph 1</h3>
                    <div className="items">
                        <div>
                            <input type="text" name="mainGraph1" value={formData.mainGraph1}
                                   onChange={handleInputChange}/>
                        </div>
                        <div>
                            <input type="text" name="mainGraph2" value={formData.mainGraph2}
                                   onChange={handleInputChange}/>
                        </div>
                        <div>
                            <input type="text" name="mainGraph3" value={formData.mainGraph3}
                                   onChange={handleInputChange}/>
                        </div>
                        <div>
                            <input type="text" name="mainGraph4" value={formData.mainGraph4}
                                   onChange={handleInputChange}/>
                        </div>
                        <div>
                            <input type="text" name="mainGraph5" value={formData.mainGraph5}
                                   onChange={handleInputChange}/>
                        </div>
                        <div>
                            <input type="text" name="mainGraph6" value={formData.mainGraph6}
                                   onChange={handleInputChange}/>
                        </div>
                    </div>
                    <div className="chart-line" style={{height: '116px'}}>
                        <ChartsLine {...chartData} />
                    </div>
                </div>
                <div className="dashboard-info-group main-graph second-graph">
                    <h3>Graph 2</h3>
                    <div className="items">
                        <div>
                            <input type="text" name="secondaryGraph1" value={formData.secondaryGraph1}
                                   onChange={handleInputChange}/>
                        </div>
                        <div>
                            <input type="text" name="secondaryGraph2" value={formData.secondaryGraph2}
                                   onChange={handleInputChange}/>
                        </div>
                        <div>
                            <input type="text" name="secondaryGraph3" value={formData.secondaryGraph3}
                                   onChange={handleInputChange}/>
                        </div>
                        <div>
                            <input type="text" name="secondaryGraph4" value={formData.secondaryGraph4}
                                   onChange={handleInputChange}/>
                        </div>
                        <div>
                            <input type="text" name="secondaryGraph5" value={formData.secondaryGraph5}
                                   onChange={handleInputChange}/>
                        </div>
                        <div>
                            <input type="text" name="secondaryGraph6" value={formData.secondaryGraph6}
                                   onChange={handleInputChange}/>
                        </div>
                        <div>
                            <input type="text" name="secondaryGraph7" value={formData.secondaryGraph7}
                                   onChange={handleInputChange}/>
                        </div>
                        <div>
                            <input type="text" name="secondaryGraph8" value={formData.secondaryGraph8}
                                   onChange={handleInputChange}/>
                        </div>
                        <div>
                            <input type="text" name="secondaryGraph9" value={formData.secondaryGraph9}
                                   onChange={handleInputChange}/>
                        </div>
                        <div>
                            <input type="text" name="secondaryGraph10" value={formData.secondaryGraph10}
                                   onChange={handleInputChange}/>
                        </div>
                        <div>
                            <input type="text" name="secondaryGraph11" value={formData.secondaryGraph11}
                                   onChange={handleInputChange}/>
                        </div>
                        <div>
                            <input type="text" name="secondaryGraph12" value={formData.secondaryGraph12}
                                   onChange={handleInputChange}/>
                        </div>
                        <div>
                            <input type="text" name="secondaryGraph13" value={formData.secondaryGraph13}
                                   onChange={handleInputChange}/>
                        </div>

                    </div>
                    <div className="chart-line" style={{height: '369px', width: '100%'}}>
                        <ChartsLine13
                            {...chartData13}
                        />
                    </div>
                </div>
            </div>
        </DashboardContent>
    );
};
