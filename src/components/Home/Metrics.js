import React, { useContext, useEffect, useState } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import { HomeContext } from "./HomeContext";
import { useHistory } from "react-router-dom";
import LoaderButton from "../Button/LoadingButton";
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';

const HomeMetrics = () => {
  const history = useHistory();

  const handleMessagesClicked = async (event) => {
    history.push("/messagelist");
  };

  const handleSettingsClicked = async (event) => {
    history.push("/underdevelopment");
  };

  const { switchToHome } = useContext(HomeContext);
  const { switchToWantMetrics } = useContext(HomeContext);

  const [selfMetrics, setSelfMetrics] = useState({
    chattyValue: localStorage.getItem('selfChatty'),
    seriousValue: localStorage.getItem('selfSerious'),
    friendlyValue: localStorage.getItem('selfFriendly'),
    brainyValue: localStorage.getItem('selfBrainy'),
    gradesValue: localStorage.getItem('selfGrades'),
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
            <button className="active-nav-btn ">I am</button>
            <button onClick={switchToWantMetrics}>I want</button>
        </Row>
        <Row className="mt-4 text-left">
            <Col>
            <h5 className="mb-1">Set your metrics.</h5>
            <p>What type of study buddy are you?</p>
            <div>
            <h5 className="text-left">Chatty</h5>
            <RangeSlider
                value={selfMetrics.chattyValue ? selfMetrics.chattyValue : 0}
                onChange={(changeEvent) => {
                    setSelfMetrics({ ...selfMetrics, chattyValue: changeEvent.target.value});
                    localStorage.setItem('selfChatty', changeEvent.target.value);
                }
                }
            />
            <h5 className="text-left">Serious</h5>
            <RangeSlider
                value={selfMetrics.seriousValue ? selfMetrics.seriousValue : 0}
                onChange={(changeEvent) => {
                    setSelfMetrics({ ...selfMetrics, seriousValue: changeEvent.target.value});
                    localStorage.setItem('selfSerious', changeEvent.target.value);
                }
                }
            />          
            <h5 className="text-left">Friendly</h5>
            <RangeSlider
                value={selfMetrics.friendlyValue ? selfMetrics.friendlyValue : 0}
                onChange={(changeEvent) => {
                    setSelfMetrics({ ...selfMetrics, friendlyValue: changeEvent.target.value});
                    localStorage.setItem('selfFriendly', changeEvent.target.value);
                }
                }
            />
            <h5 className="text-left">Brainy</h5>
            <RangeSlider
                value={selfMetrics.brainyValue ? selfMetrics.brainyValue : 0}
                onChange={(changeEvent) => {
                    setSelfMetrics({ ...selfMetrics, brainyValue: changeEvent.target.value});
                    localStorage.setItem('selfBrainy', changeEvent.target.value);
                }
                }
            />   
            <h5 className="text-left">Focused on grades</h5>
            <RangeSlider
                value={selfMetrics.gradesValue ? selfMetrics.gradesValue : 0}
                onChange={(changeEvent) => {
                    setSelfMetrics({ ...selfMetrics, gradesValue: changeEvent.target.value});
                    localStorage.setItem('selfGrades', changeEvent.target.value);
                }
                }
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

export default HomeMetrics;
