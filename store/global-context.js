import {createContext, useState} from "react";


const GlobalContext = createContext({
    notification: {},
    modal: null,
    showModal: (event) => {},
    closeModal: () => {},
    showNotification: (data) => {},
    hideNotification: () => {},
})

export const GlobalContextProvider = (props) => {

    const [formNotification, setFormNotification] = useState(null)
    const [modalOpen, setModalOpen] = useState('')

    const openModalHandler = (event) => {
        event.preventDefault()
        const eventWithModalDataSet = event.target.closest('button[data-modal]')
        if (eventWithModalDataSet) {
            const dataSetModal = eventWithModalDataSet.dataset.modal
            if (dataSetModal) setModalOpen(dataSetModal)
        }
    }

    const closeModalHandler = () => {
        setModalOpen('')
    }

    const showNotificationHandler = async (data) => {
        setFormNotification({
            message: data.message, status: data.status,
        })
    }

    const hideNotificationHandler = async () => {
        setFormNotification(null)
    }

    const context = {
        notification: formNotification,
        modal: modalOpen,
        openModal: openModalHandler,
        closeModal: closeModalHandler,
        showNotification: showNotificationHandler,
        hideNotification: hideNotificationHandler
    }

    return (<GlobalContext.Provider value={context}>
            {props.children}
        </GlobalContext.Provider>)
}

export default GlobalContext;
