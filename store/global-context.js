import {createContext, useState} from "react";


const GlobalContext = createContext({
    notification: {
        message: "Success",
        status: "success"
    },
    showNotification: (data) => {},
    hideNotification: () => {},
})

export const GlobalContextProvider = (props) => {

    const [notification, setNotification] = useState({})

    const showNotificationHandler = async (data) => {
        await setNotification({
            message: data.message,
            status: data.status,
        })
    }

    const hideNotificationHandler = async () => {
        setNotification(null)
    }

    const context = {
        notification: notification,
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
