import React, { useContext, useEffect, useState } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import { HomeContext } from "./HomeContext";
import { useHistory } from "react-router-dom";
import LoaderButton from "../Button/LoadingButton";
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';

const WantMetrics = () => {
  const history = useHistory();

  const handleMessagesClicked = async (event) => {
    history.push("/messagelist");
  };

  const handleSettingsClicked = async (event) => {
    history.push("/underdevelopment");
  };
  
  const { switchToHome } = useContext(HomeContext);
  const { switchToSelfMetrics } = useContext(HomeContext);

  const [buddyMetrics, setBuddyMetrics] = useState({
    chattyValue: localStorage.getItem('buddyChatty'),
    seriousValue: localStorage.getItem('buddySerious'),
    friendlyValue: localStorage.getItem('buddyFriendly'),
    brainyValue: localStorage.getItem('buddyBrainy'),
    gradesValue: localStorage.getItem('buddyGrades'),
  });

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
        <Container className="register">
        <Row className="mt-2 metrics-nav ">
            <button onClick={switchToSelfMetrics} >I am</button>
            <button className="active-nav-btn ">I want</button>
        </Row>
        <Row className="mt-4 text-left-buddy">
        <Col>
          <h5 className="mb-1">Identify your ideal study buddy.</h5>
          <p>What set of traits are you looking for?</p>
          <div>
          <h5 className="mt-3 text-left">Chatty</h5>
          <RangeSlider
            value={buddyMetrics.chattyValue ? buddyMetrics.chattyValue : 0}
            onChange={(changeEvent) => {
                setBuddyMetrics({ ...buddyMetrics, chattyValue: changeEvent.target.value});
                localStorage.setItem('buddyChatty', changeEvent.target.value);
              }
            }
            variant='warning'
          />
          <h5 className="text-left">Serious</h5>
          <RangeSlider
            value={buddyMetrics.seriousValue ? buddyMetrics.seriousValue : 0}
            onChange={(changeEvent) => {
                setBuddyMetrics({ ...buddyMetrics, seriousValue: changeEvent.target.value});
                localStorage.setItem('buddySerious', changeEvent.target.value);
              }
            }
            variant='warning'
          />          
          <h5 className="text-left">Friendly</h5>
          <RangeSlider
            value={buddyMetrics.friendlyValue ? buddyMetrics.friendlyValue : 0}
            onChange={(changeEvent) => {
                setBuddyMetrics({ ...buddyMetrics, friendlyValue: changeEvent.target.value});
                localStorage.setItem('buddyFriendly', changeEvent.target.value);
              }
            }
            variant='warning'
          />
          <h5 className="text-left">Brainy</h5>
          <RangeSlider
            value={buddyMetrics.brainyValue ? buddyMetrics.brainyValue : 0}
            onChange={(changeEvent) => {
                setBuddyMetrics({ ...buddyMetrics, brainyValue: changeEvent.target.value});
                localStorage.setItem('buddyBrainy', changeEvent.target.value);
              }
            }
            variant='warning'
          />   
          <h5 className="text-left">Focused on grades</h5>
          <RangeSlider
            value={buddyMetrics.gradesValue ? buddyMetrics.gradesValue : 0}
            onChange={(changeEvent) => {
                setBuddyMetrics({ ...buddyMetrics, gradesValue: changeEvent.target.value});
                localStorage.setItem('buddyGrades', changeEvent.target.value);
              }
            }
            variant='warning'
          /> 
          </div>
        </Col>
      </Row>
        </Container>
        <Row className="mt-auto container-fluid" style={{backgroundColor:'#3A506B'}}>
          <i className="bi bi-house-fill" style={{ color: '#EEF1EF', fontSize: '2em' }} onClick={switchToHome}></i>
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

export default WantMetrics;
