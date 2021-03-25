import React, { useContext, useState } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import { RegisterContext } from "./RegisterContext";
import LoaderButton from "../Button/LoadingButton";
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';

const PersonalInfo = () => {
  const { switchToCredentials } = useContext(RegisterContext);
  const { switchToSelfMetrics } = useContext(RegisterContext);
  const { switchToBuddyMetrics } = useContext(RegisterContext);
  const { switchToProfile } = useContext(RegisterContext);
  const { switchToTags } = useContext(RegisterContext);

  const [userPersonal, setUserPersonal] = useState({
    name: localStorage.getItem('personalName'),
    school: localStorage.getItem('personalSchool'),
    major: localStorage.getItem('personalMajor'),
  });

  return (
    <Container className="register">
      <Row className="mt-2 register-nav">
        <button onClick={switchToCredentials}></button> 
        <button onClick={switchToSelfMetrics}></button>
        <button onClick={switchToBuddyMetrics}></button>
        <button className="active-nav-btn"></button>
        <button onClick={switchToProfile}></button>
        <button onClick={switchToTags}></button>
      </Row>
      <Row className="mt-4 align-text-center">
        <Col>
          <h5>Let's set up your profile.</h5>
          <div className="p-3">
          <Form.Control
              name="PersonalName"
              required
              type="text"
              placeholder="Name"
              onChange={(e) => {
                setUserPersonal({ ...userPersonal, name: e.target.value })
                  localStorage.setItem('personalName', e.target.value);
                }
              }
              defaultValue={localStorage.getItem('personalName')}
            />
          </div>
          <div className="p-3">
          <Form.Control
              name="PersonalSchool"
              required
              type="text"
              placeholder="School"
              onChange={(e) => {
                setUserPersonal({ ...userPersonal, school: e.target.value })
                  localStorage.setItem('personalSchool', e.target.value);
                }
              }
              defaultValue={localStorage.getItem('personalSchool')}
            />
            </div>
            <div className="p-3">
          <Form.Control
              name="PersonalMajor"
              required
              type="text"
              placeholder="Major"
              onChange={(e) => {
                setUserPersonal({ ...userPersonal, major: e.target.value })
                  localStorage.setItem('personalMajor', e.target.value);
                }
              }
              defaultValue={localStorage.getItem('personalMajor')}
            />
            </div>
        </Col>
      </Row>
      <Row className="mt-5 next-cancel-btn personal-buttons">
        <LoaderButton className="back-button" onClick={switchToBuddyMetrics}>Back</LoaderButton>
        <LoaderButton className="next-button" onClick={switchToProfile}>Next</LoaderButton>
      </Row>
    </Container>
  );
};

export default PersonalInfo;
