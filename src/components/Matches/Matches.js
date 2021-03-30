import React, { useEffect, useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Matches = () => {
  const history = useHistory();

  const handleHomeClicked= async (event) => {
    history.push("/home");
  };

  const handleMessagesClicked = async (event) => {
    history.push("/messagelist");
  };

  const handleSettingsClicked = async (event) => {
    history.push("/underdevelopment");
  };

  const handleProfileClicked = async (event, name, compatibility, imgPath) => {
    history.push("/profilecard", {name: name, compatibility: compatibility, imgPath: imgPath});
  };

  const handleFilterClicked = async (event) => {
    var popup = document.getElementById("filter-popup");
    popup.classList.toggle("show");
  };

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
      <Row className="mt-3 matches-header">
        <Col onClick={handleHomeClicked}><i class="bi bi-arrow-left-square-fill"></i></Col>
        <Col><h5>Matches</h5></Col>
        <Col>
          <div className="ml-4 popup" onClick={handleFilterClicked}>
            <i class="bi bi-filter-square-fill"></i>
            <span className="popuptext" id="filter-popup">
              <h6>Sort By:</h6>
              <input type="radio" name="matches" checked></input>
              <label>Compatibility: High to Low</label><br></br>
              <input type="radio" name="matches"></input>
              <label>Compatibility: Low to High</label><br></br>
              <input type="radio" name="matches"></input>
              <label>Newest Matches</label>
            </span>
          </div>
        </Col>
      </Row>
      <Row className="matches-list">
        <div className="card" 
          onClick={(e) => {
            handleProfileClicked(e, "William Shakespeare", "97%", "/images/shakespeare.jpg")
        }}>
            <img className="rounded-circle" src="/images/shakespeare.jpg"></img>
            <div className="card-body">
              <h6>William Shakespeare</h6>
            </div>
            <div className='card-compatibility'>
                <h6>97%</h6>
            </div>
        </div>
        <div className="mt-2 card" 
          onClick={(e) => {
          handleProfileClicked(e, "Archimedes", "91%", "/images/archimedes.jpg")
        }}>
            <img className="rounded-circle" src="/images/archimedes.jpg"></img>
            <div className="card-body">
              <h6>Archimedes</h6>
            </div>
            <div className='card-compatibility'>
                <h6>91%</h6>
            </div>
        </div>
        <div className="mt-2 card" 
          onClick={(e) => {
          handleProfileClicked(e, "Rene Descartes", "80%", "/images/descartes.jpg")
        }}>
            <img className="rounded-circle" src="/images/descartes.jpg"></img>
            <div className="card-body">
              <h6>Rene Descartes</h6>
            </div>
            <div className='card-compatibility'>
                <h6>80%</h6>
            </div>
        </div>
        <div className="mt-2 card" 
          onClick={(e) => {
          handleProfileClicked(e, "Confucius", "74%", "/images/confucius.jpg")
        }}>
            <img className="rounded-circle" src="/images/confucius.jpg"></img>
            <div className="card-body">
              <h6>Confucius</h6>
            </div>
            <div className='card-compatibility'>
                <h6>74%</h6>
            </div>
        </div>
        <div className="mt-2 card" 
          onClick={(e) => {
          handleProfileClicked(e, "Voltaire", "60%", "/images/voltaire.jpg")
        }}>
            <img className="rounded-circle" src="/images/voltaire.jpg"></img>
            <div className="card-body">
              <h6>Voltaire</h6>
            </div>
            <div className='card-compatibility'>
                <h6>60%</h6>
            </div>
        </div>
        <div className="mt-2 card" 
          onClick={(e) => {
          handleProfileClicked(e, "Jane Austen", "56%", "/images/austen.jpg")
        }}>
            <img className="rounded-circle" src="/images/austen.jpg"></img>
            <div className="card-body">
              <h6>Jane Austen</h6>
            </div>
            <div className='card-compatibility'>
                <h6>56%</h6>
            </div>
        </div>
      </Row>

      <Row className="mt-auto container-fluid" style={{backgroundColor:'#3A506B'}}>
        <i className="bi bi-house-fill" style={{ color: '#EEF1EF', fontSize: '2em' }} onClick={handleHomeClicked}></i>
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

export default Matches;
