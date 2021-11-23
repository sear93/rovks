import React from 'react';
import {ModalWrapper} from "../styled/modal";

const Modal = (props) => {

    const onClose = e => {
        props.onClose && props.onClose(e);
    };

    if (!props.show) {
        return null;
    }
    return (
        <ModalWrapper>
            <div className="modal" id="modal">
                <h2>Modal Window</h2>
                <div className="content">{props.children}</div>
                <div className="actions">
                    <button className="toggle-button" onClick={onClose}>
                        close
                    </button>
                </div>
            </div>
        </ModalWrapper>
    );
};

export default Modal;
