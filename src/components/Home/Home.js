import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

import "./styles.css";
import "../Account/styles.css"; // just so we update with other changes

const Home = () => {

  //not hooked up yet
  const handleMetricsClicked = async (event) => {
  };

  const handleMatchesClicked = async (event) => {
  };

  return (
    <Container className="border account-window account-height">
      <Row className="align-text-center top-buffer">
        <Col>
          <h2 className="text-white">Study Buddy</h2>
        </Col>
      </Row>

      <Row className="mid-buffer">
        <Col className="col-lg">
          <Button className="btn btn-secondary btn-lg btn-block rounded-pill">
            Metrics
          </Button>
          <Button className="mt-4 btn btn-primary btn-lg btn-block rounded-pill">
            Matches
          </Button>
        </Col>
      </Row>

      <Row className="mt-auto mb-3 container-fluid" style={{backgroundColor:'#3A506B'}}>
    
        <i className="bi bi-house-fill" style={{ color: '#EEF1EF', fontSize: '2em' }}></i>
        <Col></Col>
        <Col><i className="bi bi-chat-square-dots-fill ml-auto mr-auto" style={{color: '#EEF1EF', fontSize:'2em', textAlign:'center'}}></i></Col>
        <Col></Col>
        <i className="bi bi-gear-fill" style={{ color: '#EEF1EF', fontSize: '2em', textAlign: 'right' }}></i>
    
      </Row>
        
      
    </Container>
  );
};

export default Home;
