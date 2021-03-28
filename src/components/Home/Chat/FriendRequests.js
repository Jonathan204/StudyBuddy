import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";

import "../styles.css";
import "../../Account/styles.css"; // just so we update with other changes
import { MessageContext } from "./MessageContext";

const FriendRequests = () => {

  const { switchToMessageList } = useContext(MessageContext);

  return (
    <Container className="border account-window account-height">
      <h4 className="mt-3 chat-header">Buddy Chat</h4>

      <div className="mt-1 btn-group" >
          <button className="btn btn-outline-primary" onClick={switchToMessageList}>Messages</button>
          <button className="btn btn-outline-primary active">Friend Requests</button>
      </div>
     
      <Row className="mt-3 friend-reqs" >
        <div className="req-card">
            <div className="timestamp">
                <p>10:36 AM</p>
            </div>
            <div className="req-header">
              <img className="ml-1 rounded-circle" src="/images/washington.jpg"></img>
              <p>George Washington</p>
            </div>
            <div className='btn-group-req'>
              <button className="btn btn-success"><span><i className="bi bi-check"></i></span></button>
              <button className="btn btn-danger"><span><i className="bi bi-x"></i></span></button>

            </div>
        </div>
        <div className="req-card">
            <div className="timestamp">
                <p>5:15 PM</p>
            </div>
            <div className="req-header">
              <img className="ml-1 rounded-circle" src="/images/antoinette.jpg"></img>
              <p>Marie Antoinette</p>
            </div>
            <div className='btn-group-req'>
              <button className="btn btn-success"><span><i className="bi bi-check"></i></span></button>
              <button className="btn btn-danger"><span><i className="bi bi-x"></i></span></button>

            </div>
        </div>
      </Row>

      <Row className="mt-auto container-fluid pl-0 pr-0">
        
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

export default FriendRequests;
