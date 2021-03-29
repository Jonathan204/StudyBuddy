import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router";

const UnderDevelopment = () => {
  const history = useHistory();

  const handleHomeClicked = async (event) => {
    history.push("/home");
  };

  const handleMessageClicked = async (event) => {
    history.push("/messagelist");
  }

  const handleLogoutClicked = async (event) => {
    history.push("/");
  }

  const [notifCount, setNotifCount] = useState(0);
  useEffect(() => {
    const initialValue = localStorage.getItem("notifCount");
    var notifBadge = document.getElementById("badge");

    if (initialValue) {
      setNotifCount(initialValue);

      if (initialValue > 0) {
        notifBadge.style.visibility = "visible";
      } else {
        notifBadge.style.visibility = "hidden";
      }
    } 
  }, []);

  return (
    <Container className="border account-window account-height">
      <Row className="align-text-center top-buffer">
        <Col>
         <h2 className="mt-5 text-white">Under Development</h2>
        </Col>
      </Row>

      <Row className="mt-4 align-text-center">
        <Col>
         <button className="btn btn-primary rounded-pill" onClick={handleLogoutClicked}>Logout</button>
        </Col>
      </Row>
  
      <Row className="mt-auto container-fluid" style={{backgroundColor:'#3A506B'}}>

        <i className="bi bi-house-fill" style={{ color: '#EEF1EF', fontSize: '2em' }} onClick={handleHomeClicked}></i>
        <Col></Col>
        <Col className="message-nav">
          <i className="bi bi-chat-square-dots-fill ml-auto mr-auto" style={{color: '#EEF1EF', fontSize:'2em', textAlign:'center'}} onClick={handleMessageClicked}></i>
          <span className="badge" id="badge">{notifCount}</span>
        </Col>
        <Col></Col>
        <i className="bi bi-gear-fill" style={{ color: '#EEF1EF', fontSize: '2em', textAlign: 'right' }}></i>
    
        </Row>  
    </Container>
  );
};

export default UnderDevelopment;
  