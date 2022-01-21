import React from 'react';
import {ModalWrapper} from "../styled/modal";
import ReactDOM from "react-dom";
import {AnimatePresence, motion} from "framer-motion";

const Modal = (props) => {

    const onCloseModalHandler = (e) => {
        if (
            e.target.matches(".modal-btn") ||
            !e.target.closest(".modal-main")
        ) {
            props.closeModal()
        }
        return false
    }
    if (typeof window !== "undefined") {
        return ReactDOM.createPortal(
            <AnimatePresence exitBeforeEnter>
                {props.open && (
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{type: 'spring', duration: 0.8}}>
                        <ModalWrapper>
                            <div className="modal" onClick={onCloseModalHandler}>
                                <div className="modal-main">
                                    <div className="modal-content">
                                        {props.children}
                                    </div>
                                    <button className={'modal-btn'}/>
                                </div>
                            </div>
                        </ModalWrapper>
                    </motion.div>
                )}
            </AnimatePresence>
            , document.body);
    }

    return null
};

export default Modal;
