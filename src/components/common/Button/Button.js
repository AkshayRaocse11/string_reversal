import React from "react";
import './Button.css';

export default function Button(props) {
    return (
        <div className="Button">
            <button type="button" className="button-primary">{props.text}</button>
        </div>
    );
}