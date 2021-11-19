import {createContext, useState} from "react";


const GlobalContext = createContext({
    notification: {},
    showNotification: (data) => {
    },
    hideNotification: () => {
    },
})

export const GlobalContextProvider = (props) => {

    const [formNotification, setFormNotification] = useState({})

    const showNotificationHandler = async (data) => {
        setFormNotification({
            message: data.message,
            status: data.status,
        })
    }

    const hideNotificationHandler = async () => {
        setFormNotification(null)
    }

    const context = {
        notification: formNotification,
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
