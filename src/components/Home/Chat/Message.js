import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { MessageContext } from "./MessageContext.js";
import MessageList from "./MessageList.js";
import FriendRequests from "./FriendRequests.js";

import "../styles.css";

const Message = () => {
  const [activeWindow, setActiveWindow] = useState("messagelist");

  const switchToMessageList = () => {
    setActiveWindow("messagelist");
  };

  const switchToFriendRequests = () => {
    setActiveWindow("friendrequests");
  };

  const contextValue = { switchToMessageList, switchToFriendRequests };
  
  return (
    <MessageContext.Provider value={contextValue}>
      <Container>
        {activeWindow === "messagelist" && <MessageList />}
        {activeWindow === "friendrequests" && <FriendRequests />}
      </Container>
    </MessageContext.Provider>
  );
};

export default Message;
