import React, {useContext} from 'react';
import {ModalWrapper} from "../styled/modal";
import GlobalContext from "../store/global-context";
import ReactDOM from "react-dom";

const Modal = (props) => {

    const ctx = useContext(GlobalContext)

    if (!ctx.modal) return null;

    return ReactDOM.createPortal(
        <ModalWrapper>
            <div className="modal">
                <div className="modal-content">
                    {props.children}
                </div>
                <button onClick={() => ctx.showModal(false)}>Close</button>
            </div>
        </ModalWrapper>
        , document.body);
};

export default Modal;
