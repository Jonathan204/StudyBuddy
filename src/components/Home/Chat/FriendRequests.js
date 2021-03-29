import React, { useContext, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MessageContext } from "./MessageContext";
import { useHistory } from "react-router-dom";

const FriendRequests = () => {
  const history = useHistory();

  const handleHomeClicked = async (event) => {
    history.push("/home");
  };

  const handleSettingsClicked = async (event) => {
    history.push("/underdevelopment");
  };

  const handleProfileClicked = async (event, name, compatibility, imgPath) => {
    history.push("/friendreqprofile", {name: name, compatibility: compatibility, imgPath: imgPath});
  };

  const { switchToMessageList } = useContext(MessageContext);

  const [answeredRequestG, setAnsweredRequestG] = useState(false);
  const [answeredRequestM, setAnsweredRequestM] = useState(false);

  return (
    <Container className="border account-window account-height">
      <h4 className="mt-3 chat-header">Buddy Chat</h4>

      <div className="mt-1 btn-group" >
          <button className="btn btn-outline-primary" onClick={switchToMessageList}>Messages</button>
          <button className="btn btn-outline-primary active">Friend Requests</button>
      </div>
     
      <Row className="mt-3 friend-reqs" >
        {!answeredRequestG &&
          <div className="req-card">
            <div className="timestamp">
                <p>10:36 AM</p>
            </div>
            <div className="req-header">
              <img className="ml-1 fr-card rounded-circle" src="/images/washington.jpg"           
                onClick={(e) => {
                  handleProfileClicked(e, "George Washington", "82%", "/images/washington.jpg")
                }}>
              </img>
              <p>George Washington</p>
            </div>
            <div className='btn-group-req'>
              <button className="btn btn-success" onClick={setAnsweredRequestG}><span><i className="bi bi-check"></i></span></button>
              <button className="btn btn-danger" onClick={setAnsweredRequestG}><span><i className="bi bi-x"></i></span></button>
            </div>
          </div>
        }
        {!answeredRequestM &&
          <div className="req-card">
              <div className="timestamp">
                  <p>5:15 PM</p>
              </div>
              <div className="req-header">
                <img className="ml-1 fr-card rounded-circle" src="/images/antoinette.jpg"     
                  onClick={(e) => {
                    handleProfileClicked(e, "Marie Antoinette", "71%", "/images/antoinette.jpg")
                  }}>
                </img>
                <p>Marie Antoinette</p>
              </div>
              <div className='btn-group-req'>
                <button className="btn btn-success" onClick={setAnsweredRequestM}><span><i className="bi bi-check"></i></span></button>
                <button className="btn btn-danger" onClick={setAnsweredRequestM}><span><i className="bi bi-x"></i></span></button>
              </div>
          </div>
        }
      </Row>
        
      <Row className="mt-auto container-fluid ml-0 mr-0 " style={{backgroundColor:'#3A506B'}}>  
        <i className="bi bi-house-fill" style={{ color: '#EEF1EF', fontSize: '2em' }} onClick={handleHomeClicked}></i>
        <Col></Col>
        <Col><i className="bi bi-chat-square-dots-fill ml-auto mr-auto" style={{color: '#EEF1EF', fontSize:'2em', textAlign:'center'}}></i></Col>
        <Col></Col>
        <i className="bi bi-gear-fill" style={{ color: '#EEF1EF', fontSize: '2em', textAlign: 'right' }} onClick={handleSettingsClicked}></i>
      </Row>   
      
    </Container>
  );
};

export default FriendRequests;
