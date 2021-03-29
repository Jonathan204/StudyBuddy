import React, { useContext, useState, useEffect } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "../styles.css";
import "../../Account/styles.css"; // just so we update with other changes

const Messaging = () => {
  const history = useHistory();

  const handleHomeClicked = async (event) => {
    history.push("/home");
  };

  const handleMessageListClicked = async (event) => {
    history.push("/messagelist");
  };

  const handleSettingsClicked = async (event) => {
    history.push("/underdevelopment");
  };

  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([{
    value: "",
  }]);

  const handleSendMessage = async (event) => {
    event.preventDefault();

    if (newMessage) {
      const newMsg = {
        value: newMessage,
      };

      var copyMessages = JSON.parse(localStorage.getItem("messages"));
      copyMessages.push(newMsg);
      setMessages(copyMessages);
      localStorage.setItem('messages', JSON.stringify(copyMessages));
      setNewMessage("");
      document.getElementById("msg-field").value = "";
    }
  }

  useEffect(() => {
    const initialValue = localStorage.getItem("messages");

    if (initialValue) {
      setMessages(JSON.parse(initialValue));
    } else {
      localStorage.setItem('messages', JSON.stringify(messages));
    }
  }, []);

  return (
    <Container className="border account-window account-height">
      <Row className="mt-4 mr-0 ml-0 pr-0 pl-0 messaging-header" style={{backgroundColor: '#1C2541', color: '#EEF1EF'}}>          
        <Col className=" col-5 text pt-2 pl-1 pr-0 text-truncate" style={{ fontSize: '1.2em'}}>William</Col>
        <Col className="col-2 pl-0 pr-0 ml-0 mr-0"><i className="bi bi-person-circle" style={{ fontSize: '2em' }}></i></Col>
        <Col className=" col-5 text-white pt-1 pl-0 pr-1" style={{ fontSize: '1.2em'}}>97%</Col>
      </Row>

      <Row className="mt-2 chat-box">
        <div className="message-list">
          <ul>
            {
              messages.filter(function(obj) {
                return (obj.value);
              }).map((msg, index) => (
                <li key={index} >
                  <span>{msg.value}</span>  
                </li>
              ))
            }
          </ul>
        </div>
      </Row>

      <Form className="mb-2 msg-field" noValidate onSubmit={handleSendMessage}>
        <Row>
          <Col>
            <Form.Control
              id="msg-field"
              name="newMsg"
              type="text"
              placeholder="Send a message..."
              onChange={(e) =>
                setNewMessage(e.target.value)
              }
            />
          </Col>
        </Row>
      </Form>
   
      <Row className="container-fluid ml-0 mr-0 " style={{backgroundColor:'#3A506B'}}>  
        <i className="bi bi-house-fill" style={{ color: '#EEF1EF', fontSize: '2em' }} onClick={handleHomeClicked}></i>
          <Col></Col>
          <Col><i className="bi bi-chat-square-dots-fill ml-auto mr-auto" style={{color: '#EEF1EF', fontSize:'2em', textAlign:'center'}} onClick={handleMessageListClicked}></i></Col>
          <Col></Col>
          <i className="bi bi-gear-fill" style={{ color: '#EEF1EF', fontSize: '2em', textAlign: 'right' }} onClick={handleSettingsClicked}></i>
      </Row>
        
    </Container>
  );
};

export default Messaging;
