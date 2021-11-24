import {createContext, useState} from "react";


const GlobalContext = createContext({
    notification: {},
    modal: null,
    showModal: (isShow) => {
    },
    showNotification: (data) => {
    },
    hideNotification: () => {
    },
})

export const GlobalContextProvider = (props) => {

    const [formNotification, setFormNotification] = useState(null)
    const [showModal, setShowModal] = useState(false)

    const showNotificationHandler = async (data) => {
        setFormNotification({
            message: data.message,
            status: data.status,
        })
    }

    const hideNotificationHandler = async () => {
        setFormNotification(null)
    }

    const showModalHandler = (isShow) => {
        setShowModal(isShow)
    }

    const context = {
        notification: formNotification,
        modal: showModal,
        showModal: showModalHandler,
        showNotification: showNotificationHandler,
        hideNotification: hideNotificationHandler
    }

    return (
        <GlobalContext.Provider value={context}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext;
