import React from 'react';
import './style.css';

function Dialog(props) {
    return (
        <div className="overlay" onClick={props.onClose}>
            <div className="dialog-view">
                <div className="dialog-header"></div>
                <div className="dialog-content"></div>
            </div>
        </div>
    );
}

export default Dialog;
