import React, { useContext, useState, useEffect }  from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";

const ProfileCard = () => {
  const location = useLocation();
  const profileName = location.state.name;
  const userCompatibility = location.state.compatibility;
  const imgPath = location.state.imgPath;

  const history = useHistory();

  const handleSettingsClicked = async (event) => {
    history.push("/underdevelopment");
  };

  const handleBackClicked = async (event) => {
    history.push("/matches");
  };

  const handleHomeClicked = async (event) => {
    history.push("/home");
  };

  const handleMessagesClicked = async (event) => {
    history.push("/messagelist");
  };

  const handleMatchClicked = async (event) => {
    var matchButton = document.getElementsByClassName("profile-match-btn")[0];
    var notifBadge = document.getElementById("badge");
    matchButton.innerHTML = "You Confirmed!"
    matchButton.disabled = true;

    notifBadge.style.visibility = "visible";
    setNotifCount(prevCount => {
      const newCount = Number(prevCount) + 1;
      localStorage.setItem("notifCount", newCount);
      return newCount;
    });
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
      <Row className='mt-4 profile-card'>
        <div className="profile-header">
          <Col onClick={handleBackClicked}><i class="bi bi-arrow-left-square-fill"></i></Col>
          <Col><p>{userCompatibility} Match</p></Col>
        </div>

        <div className="mt-5 profile-card-img">
          <img className="rounded-circle" src={imgPath}></img>
        </div>

        <h5 className="mt-1">{profileName}</h5>

        <div className="profile-school-info">
          <div className="mt-1 school-detail" style={{borderBottom: '1px solid #3A506B'}}>
            <h6>School<span>University of Manitoba</span></h6>
          </div>
          <div className="mt-1 school-detail">
            <h6>Major<span>Computer Science</span></h6>
          </div>
        </div>

        <p className="mt-2 ml-4">About:</p>
        <div className="mt-4 profile-bio">
          <p>fie! cometh h're and becometh mine own studyeth cousin, thee distemperate blinking idiot! Additionally, my age is 25.</p>
        </div>

        <div className="mt-3 profile-tags">
          <li>Coffee</li>
          <li>Gaming</li>
          <li>Oats</li>
          <li>Poetry</li>
        </div>

        <Button className="mt-3 profile-match-btn" onClick={handleMatchClicked}>I'm interested!</Button>
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

export default ProfileCard;
