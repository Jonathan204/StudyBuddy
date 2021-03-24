import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

import "../styles.css";
import "../../Account/styles.css"; // just so we update with other changes

const Messaging = () => {

  return (
    <Container className="border account-window account-height">
      <Row className="mt-4 mr-0 ml-0 pr-0 pl-0 container-fluid" style={{backgroundColor: '#1C2541', color: '#EEF1EF'}}>
        
        <Col className=" col-5 text pt-2 pl-1 pr-0 text-truncate" style={{ fontSize: '1.2em'}}>William</Col>
        <Col className="col-2 pl-0 pr-0 ml-0 mr-0"><i className="bi bi-person-circle" style={{ fontSize: '2em' }}></i></Col>
        <Col className=" col-5 text-white pt-1 pl-0 pr-1" style={{ fontSize: '1.2em'}}>97%</Col>
        
      </Row>
     
   
      <Row className="mt-auto mb-3 container-fluid pl-0 pr-0">
        
            <div class="input-group mb-2">
                <input type="text" class="form-control" placeholder="Send a message..." aria-label="message" />
            </div>
         
        <Row className="container-fluid ml-0 mr-0 " style={{backgroundColor:'#3A506B'}}>  
            <i className="bi bi-house-fill" style={{ color: '#EEF1EF', fontSize: '2em' }}></i>
            <Col></Col>
            <Col><i className="bi bi-chat-square-dots-fill ml-auto mr-auto" style={{color: '#EEF1EF', fontSize:'2em', textAlign:'center'}}></i></Col>
            <Col></Col>
            <i className="bi bi-gear-fill" style={{ color: '#EEF1EF', fontSize: '2em', textAlign: 'right' }}></i>
        </Row>   
      </Row>
        
      
    </Container>
  );
};

export default Messaging;
