import React, { useContext, useEffect, useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { HomeContext } from "./HomeContext";
import { useHistory } from "react-router-dom";
import "./styles.css";
import "../Account/styles.css"; // just so we update with other changes

const HomePage = () => {
  const history = useHistory();

  const handleMessagesClicked = async (event) => {
    history.push("/messagelist");
  };

  const handleSettingsClicked = async (event) => {
    history.push("/underdevelopment");
  };

  const handleMatchesClicked = async (event) => {
    history.push("/matches");
  };

  const { switchToSelfMetrics } = useContext(HomeContext);

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
          <h2 className="text-white">Study Buddy</h2>
        </Col>
      </Row>

      <Row className="mid-buffer">
        <Col className="col-lg">
          <Button className="btn metrics-btn btn-lg btn-block rounded-pill" onClick={switchToSelfMetrics}>
            Metrics
          </Button>
          <Button className="mt-4 btn btn-primary btn-lg btn-block rounded-pill" onClick={handleMatchesClicked}>
            Matches
          </Button>
        </Col>
      </Row>

      <Row className="mt-auto container-fluid" style={{backgroundColor:'#3A506B'}}>
    
        <i className="bi bi-house-fill" style={{ color: '#EEF1EF', fontSize: '2em' }}></i>
        <Col></Col>
        <Col className="message-nav">
          <i className="bi bi-chat-square-dots-fill ml-auto mr-auto" style={{color: '#EEF1EF', fontSize:'2em', textAlign:'center'}} onClick={handleMessagesClicked}></i>
          <span className="badge" id="badge">{notifCount}</span>
        </Col>
        <Col></Col>
        <i className="bi bi-gear-fill" style={{ color: '#EEF1EF', fontSize: '2em', textAlign: 'right' }} onClick={handleSettingsClicked}></i>
    
      </Row>
        
      
    </Container>
  );
};

export default HomePage;
