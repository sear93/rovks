import React, {useContext, useEffect} from 'react';
import styled from "styled-components";
import GlobalContext from "../store/global-context";

const Notification = (props) => {

    const ctx = useContext(GlobalContext);

    useEffect(() => {

        const timer = setTimeout(() => {
            ctx.hideNotification()
        }, 5000)

        return () => {
            clearTimeout(timer)
        };
    }, [ctx.notification]);

    return (
        <NotificationWrapper status={props.status} onClick={props.hideNotification}>
            <h3>{props.message}</h3>
        </NotificationWrapper>
    );
};

export default Notification;

const NotificationWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 30px;
  border-radius: 5px;
  cursor: pointer;
  background: ${props => props.status === "success" ? "#28a745" : props.status === "pending" ? "#007bff" : '#dc3545'};
`