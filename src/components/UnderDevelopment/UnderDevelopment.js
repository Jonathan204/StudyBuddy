import React, { useContext } from "react";
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

  return (
    <Container className="border account-window account-height">
      <Row className="align-text-center top-buffer">
        <Col>
         <h2 className="mt-5 text-white">Under Development</h2>
        </Col>
      </Row>
  
      <Row className="mt-auto container-fluid" style={{backgroundColor:'#3A506B'}}>

        <i className="bi bi-house-fill" style={{ color: '#EEF1EF', fontSize: '2em' }} onClick={handleHomeClicked}></i>
        <Col></Col>
        <Col><i className="bi bi-chat-square-dots-fill ml-auto mr-auto" style={{color: '#EEF1EF', fontSize:'2em', textAlign:'center'}} 
              onClick={handleMessageClicked}></i></Col>
        <Col></Col>
        <i className="bi bi-gear-fill" style={{ color: '#EEF1EF', fontSize: '2em', textAlign: 'right' }}></i>
    
        </Row>  
    </Container>
  );
};

export default UnderDevelopment;
  