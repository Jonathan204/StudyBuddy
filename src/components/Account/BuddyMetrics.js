import React, { useContext, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { RegisterContext } from "./RegisterContext";
import LoaderButton from "../Button/LoadingButton";
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';

const BuddyMetrics = () => {
  const { switchToCredentials } = useContext(RegisterContext);
  const { switchToSelfMetrics } = useContext(RegisterContext);
  const { switchToProfile } = useContext(RegisterContext);
  const { switchToTags } = useContext(RegisterContext);
  const { switchToPersonalInfo } = useContext(RegisterContext);

  const [buddyMetrics, setBuddyMetrics] = useState({
    chattyValue: localStorage.getItem('buddyChatty'),
    seriousValue: localStorage.getItem('buddySerious'),
    friendlyValue: localStorage.getItem('buddyFriendly'),
    brainyValue: localStorage.getItem('buddyBrainy'),
    gradesValue: localStorage.getItem('buddyGrades'),
  });

  return (
    <Container className="register">
      <Row className="mt-2 register-nav">
        <button onClick={switchToCredentials}></button>
        <button onClick={switchToSelfMetrics}></button>
        <button className="active-nav-btn"></button>
        <button onClick={switchToPersonalInfo}></button>
        <button onClick={switchToProfile}></button>

        <button onClick={switchToTags}></button>
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
      <Row className="mt-5 next-cancel-btn">
        <LoaderButton className="back-button" onClick={switchToSelfMetrics}>Back</LoaderButton>
        <LoaderButton className="next-button" onClick={switchToPersonalInfo}>Next</LoaderButton>
      </Row>
    </Container>
  );
};

export default BuddyMetrics;
