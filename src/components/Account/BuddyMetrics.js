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

  const [ chattyValue, setChattyValue ] = useState(0); 
  const [ seriousValue, setSeriousValue ] = useState(0); 
  const [ friendlyValue, setFriendlyValue ] = useState(0); 
  const [ brainyValue, setBrainyValue ] = useState(0); 
  const [ gradesValue, setGradesValue ] = useState(0); 

  return (
    <Container className="register">
      <Row className="mt-2 register-nav">
        <button onClick={switchToCredentials}></button>
        <button onClick={switchToSelfMetrics}></button>
        <button className="active-nav-btn"></button>
        <button onClick={switchToProfile}></button>
        <button onClick={switchToTags}></button>
      </Row>
      <Row className="text-left-buddy">
        <Col>
          <h5 className="buddy mt-2">Identify your ideal study buddy.</h5>
          <p className="text-left">What set of traits are you looking for?</p>
          <div className="mx-3">
          <h5 className="text-left">Chatty</h5>
          <RangeSlider
            value={chattyValue}
            onChange={changeEvent => setChattyValue(changeEvent.target.value)}
            bsClass="custom-slider"
          />
          <h5 className="text-left">Serious</h5>
          <RangeSlider
            value={seriousValue}
            onChange={changeEvent => setSeriousValue(changeEvent.target.value)}
            
          />          
          <h5 className="text-left">Friendly</h5>
          <RangeSlider
            value={friendlyValue}
            onChange={changeEvent => setFriendlyValue(changeEvent.target.value)}
          />
          <h5 className="text-left">Brainy</h5>
          <RangeSlider
            value={brainyValue}
            onChange={changeEvent => setBrainyValue(changeEvent.target.value)}
          />   
          <h5 className="text-left">Focused on grades</h5>
          <RangeSlider
            value={gradesValue}
            onChange={changeEvent => setGradesValue(changeEvent.target.value)}
          /> 
          </div>
        </Col>
      </Row>
      <Row className="mt-3 next-cancel-btn">
        <LoaderButton className="back-button" onClick={switchToSelfMetrics}>Back</LoaderButton>
        <LoaderButton className="next-button" onClick={switchToProfile}>Next</LoaderButton>
      </Row>
    </Container>
  );
};

export default BuddyMetrics;
