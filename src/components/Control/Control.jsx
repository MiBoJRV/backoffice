import React from "react";
import {ControlContent} from "./Styles.jsx";

export const Control = ({title, buttonText, onClick}) => {
    return (
        <ControlContent className="control">
            <h2>{title}</h2>
            <button onClick={onClick}>
                {buttonText}
            </button>
        </ControlContent>
    )
}