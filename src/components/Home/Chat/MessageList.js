import React, { useContext, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { HomeContext } from "../HomeContext.js"
import "../styles.css";
import "../../Account/styles.css";
import { MessageContext } from "./MessageContext.js";

const MessageList = () => {
  const history = useHistory();

  const handleHomeClicked = async (event) => {
    history.push("/home");
  };

  const handleSettingsClicked = async (event) => {
    history.push("/underdevelopment");
  };

  const handleMessageClicked = async (event) => {
    history.push("/messaging");
  };

  const {switchToFriendRequests} = useContext(MessageContext);

  const [notifCount, setNotifCount] = useState(0);
  useEffect(() => {
    const initialValue = localStorage.getItem("notifCount");
    var notifBadge = document.getElementById("badge");

    if (initialValue) {
      notifBadge.style.visibility = "hidden";
      localStorage.setItem("notifCount", 0);
    } 
  }, []);

  return (
    <Container className="border account-window account-height">
      <h4 className="mt-3 chat-header">Buddy Chat</h4>

      <div className="mt-1 btn-group" >
        <button className="btn btn-outline-primary active">Messages</button>
        <button className="btn btn-outline-primary" onClick={switchToFriendRequests}>Friend Requests</button>
      </div>

      <Row className="mt-3 msg-match" >
        <div className="card" onClick={handleMessageClicked}>
            <img className="rounded-circle" src="/images/shakespeare.jpg"></img>
            <div className="card-info">
              <h6 className="ml-2">William Shakespeare</h6>
            </div>
            <div className='ml-2 card-compatibility'>
                <h6>97%</h6>
                <br></br>
                <p>3:24 PM</p>
            </div>
        </div>
      </Row>

      <Row className="mt-auto container-fluid ml-0 mr-0 " style={{backgroundColor:'#3A506B'}}>  
        <i className="bi bi-house-fill" style={{ color: '#EEF1EF', fontSize: '2em' }} onClick={handleHomeClicked}></i>
        <Col></Col>
        <Col className="message-nav">
          <i className="bi bi-chat-square-dots-fill ml-auto mr-auto" style={{color: '#EEF1EF', fontSize:'2em', textAlign:'center'}} onClick={handleMessageClicked}></i>
          <span className="badge" id="badge">{notifCount}</span>
        </Col>
        <Col></Col>
        <i className="bi bi-gear-fill" style={{ color: '#EEF1EF', fontSize: '2em', textAlign: 'right' }} onClick={handleSettingsClicked}></i>
      </Row>   
      
    </Container>
  );
};

export default MessageList;
