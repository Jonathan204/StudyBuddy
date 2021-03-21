import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { RegisterContext } from "./RegisterContext";
import LoaderButton from "../Button/LoadingButton";

const Profile = () => {
  const { switchToCredentials } = useContext(RegisterContext);
  const { switchToBuddyMetrics } = useContext(RegisterContext);
  const { switchToSelfMetrics } = useContext(RegisterContext);
  const { switchToTags } = useContext(RegisterContext);

  return (
    <Container className="register">
      <Row className="mt-2 register-nav">
        <button onClick={switchToCredentials}></button>
        <button onClick={switchToSelfMetrics}></button>
        <button onClick={switchToBuddyMetrics}></button>
        <button className="active-nav-btn"></button>
        <button onClick={switchToTags}></button>
      </Row>
      <Row className="mt-4 align-text-center">
        <Col>
          <h5>Let's set up your profile.</h5>
        </Col>
      </Row>
      <Row className="mt-5 next-cancel-btn">
        <LoaderButton className="back-button" onClick={switchToBuddyMetrics}>Back</LoaderButton>
        <LoaderButton className="next-button" onClick={switchToTags}>Next</LoaderButton>
      </Row>
    </Container>
  );
};

export default Profile;
