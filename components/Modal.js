import React, {useContext} from 'react';
import {ModalWrapper} from "../styled/modal";
import GlobalContext from "../store/global-context";
import ReactDOM from "react-dom";

const Modal = (props) => {

        const ctx = useContext(GlobalContext)

        const onCloseModalHandler = (e) => {
            if (
                e.target.matches(".modal-btn") ||
                !e.target.closest(".modal-main")
            ) {
                ctx.showModal(false)
            }
            return false
        }

        if (!ctx.modal) return null;

        return ReactDOM.createPortal(
            <ModalWrapper>
                <div className="modal" onClick={onCloseModalHandler}>
                    <div className="modal-main">
                        <div className="modal-content">
                            {props.children}
                        </div>
                        <button className={'modal-btn'} onClick={() => ctx.showModal(false)}>Close</button>
                    </div>
                </div>
            </ModalWrapper>
            , document.body);
    }
;

export default Modal;
