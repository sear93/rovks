import React, {useContext, useEffect, useState, useRef} from 'react';
import styled from "styled-components";
import GlobalContext from "../store/global-context";

const Notification = (props) => {

    const ctx = useContext(GlobalContext);

    useEffect(() => {

        let timer;

        if (ctx.notification?.status === 'success') {
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
            <NotificationWrapper status={props.status}
                                 onClick={props.hideNotification}>
                <h3>{props.message}</h3>
            </NotificationWrapper>
        </>
    );
};

export default Notification;

const NotificationWrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  bottom: 0;
  height: 90px;
  left: 0;
  width: 100%;
  padding: 30px;
  border-radius: 15px 15px 0 0;
  transition: all 0.5s ease;
  cursor: pointer;
  background: ${props => props.status === "error" ? "#dc3545" : props.status === "pending" ? "#007bff" : "#28a745"};
`
