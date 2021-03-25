import React, { useContext, useState } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import { RegisterContext } from "./RegisterContext";
import LoaderButton from "../Button/LoadingButton";
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';

const SelfMetrics = () => {
  const { switchToCredentials } = useContext(RegisterContext);
  const { switchToBuddyMetrics } = useContext(RegisterContext);
  const { switchToProfile } = useContext(RegisterContext);
  const { switchToTags } = useContext(RegisterContext);
  const { switchToPersonalInfo } = useContext(RegisterContext);
  
  const [selfMetrics, setSelfMetrics] = useState({
    chattyValue: localStorage.getItem('selfChatty'),
    seriousValue: localStorage.getItem('selfSerious'),
    friendlyValue: localStorage.getItem('selfFriendly'),
    brainyValue: localStorage.getItem('selfBrainy'),
    gradesValue: localStorage.getItem('selfGrades'),
  });

  return (
    <Container className="register">
      <Row className="mt-2 register-nav">
        <button onClick={switchToCredentials}></button>
        <button className="active-nav-btn"></button>
        <button onClick={switchToBuddyMetrics}></button>
        <button onClick={switchToPersonalInfo}></button>
        <button onClick={switchToProfile}></button>
        <button onClick={switchToTags}></button>
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
      <Row className="mt-5 next-cancel-btn">
        <LoaderButton className="back-button" onClick={switchToCredentials}>Back</LoaderButton>
        <LoaderButton className="next-button" onClick={switchToBuddyMetrics}>Next</LoaderButton>
      </Row>
    </Container>
  );
};

export default SelfMetrics;
