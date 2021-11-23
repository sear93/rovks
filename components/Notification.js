import React, {useContext, useEffect, useState, useRef} from 'react';
import styled from "styled-components";
import GlobalContext from "../store/global-context";

const Notification = (props) => {

    const ctx = useContext(GlobalContext);
    const [height, setHeight] = useState(0)
    const notificationRef = useRef()

    useEffect(() => {
        setHeight(notificationRef.current.clientHeight)
        console.log(height)
    }, [])

    useEffect(() => {

        let timer;

        if (ctx.notification?.status !== 'error') {
            timer = setTimeout(() => {
                ctx.hideNotification()
            }, 5000)
        }

        return () => {
            clearTimeout(timer)
        };
    }, [ctx.notification]);

    return (
        <>
            <NotificationWrapper ref={notificationRef}
                                 heightEl={height}
                                 status={props.status}
                                 onClick={props.hideNotification}>
                <h3>{props.message}</h3>
            </NotificationWrapper>
        </>
    );
};

export default Notification;

const NotificationWrapper = styled.div`
  position: fixed;
  bottom: ${props => !props.status ? `-${props.heightEl}px` : `0`};;
  left: 0;
  width: 100%;
  padding: 30px;
  border-radius: 5px;
  transition: all 0.5s ease;
  cursor: pointer;
  background: ${props => props.status === "success" ? "#28a745" : props.status === "pending" ? "#007bff" : '#dc3545'};
`
