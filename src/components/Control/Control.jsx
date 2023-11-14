import React from "react";
import {ControlContent} from "./Styles.jsx";

import check from './../../assets/images/check-mark.svg'

export const Control = ({title, buttonText, onClick, showText}) => {
    return (
        <ControlContent className="control">
            <h2>{title}</h2>
            <button onClick={onClick}>
                {showText ? (
                    <div className="main-info">
                        {buttonText}
                    </div>
                ) : (
                    <img src={check} alt="Success Image" />
                )}
            </button>
        </ControlContent>
    )
}