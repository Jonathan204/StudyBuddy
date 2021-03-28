import React, { useContext } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { HomeContext } from "./HomeContext.js"

import "./styles.css";
import "../Account/styles.css"; // just so we update with other changes

const Main = () => {

  const { switchToMatches } = useContext(HomeContext);
  const history = useHistory();

  return (
    <Container className="border account-window account-height">
      <Row className="align-text-center top-buffer">
        <Col>
          <h2 className="text-white">Study Buddy</h2>
        </Col>
      </Row>

      <Row className="mid-buffer">
        <Col className="col-lg">
          <Button className="btn metrics-btn btn-lg btn-block rounded-pill">
            Metrics
          </Button>
          <Button className="mt-4 btn matches-btn btn-lg btn-block rounded-pill"
            onClick={switchToMatches}
            >Matches
          </Button>
        </Col>
      </Row>

      <Row className="mt-auto container-fluid" style={{backgroundColor:'#3A506B'}}>
    
        <i className="bi bi-house-fill" style={{ color: '#EEF1EF', fontSize: '2em' }}></i>
        <Col></Col>
        <Col><i className="bi bi-chat-square-dots-fill ml-auto mr-auto" style={{color: '#EEF1EF', fontSize:'2em', textAlign:'center'}}></i></Col>
        <Col></Col>
        <i className="bi bi-gear-fill" 
          style={{ color: '#EEF1EF', fontSize: '2em', textAlign: 'right' }}
          onClick={handleSettingsClicked}></i>
  
      </Row>
        
      
    </Container>
  );
};

export default Main;
