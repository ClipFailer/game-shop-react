import React from 'react';

import './Modal.css';

const Modal = ({children, onClick}) => {
    return (
        <div
            className="modal"
            onClick={onClick}
        >
            <div className="modal-content">
                {children}
            </div>
        </div>
    );
};

export default Modal;