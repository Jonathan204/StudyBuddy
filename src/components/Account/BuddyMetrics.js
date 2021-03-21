import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { RegisterContext } from "./RegisterContext";
import LoaderButton from "../Button/LoadingButton";

const BuddyMetrics = () => {
  const { switchToCredentials } = useContext(RegisterContext);
  const { switchToSelfMetrics } = useContext(RegisterContext);
  const { switchToProfile } = useContext(RegisterContext);
  const { switchToTags } = useContext(RegisterContext);

  return (
    <Container className="register">
      <Row className="mt-2 register-nav">
        <button onClick={switchToCredentials}></button>
        <button onClick={switchToSelfMetrics}></button>
        <button className="active-nav-btn"></button>
        <button onClick={switchToProfile}></button>
        <button onClick={switchToTags}></button>
      </Row>
      <Row className="mt-4 align-text-center">
        <Col>
          <h5>Identify your ideal study buddy.</h5>
          <p>What set of traits are you looking for?</p>
        </Col>
      </Row>
      <Row className="mt-5 next-cancel-btn">
        <LoaderButton className="back-button" onClick={switchToSelfMetrics}>Back</LoaderButton>
        <LoaderButton className="next-button" onClick={switchToProfile}>Next</LoaderButton>
      </Row>
    </Container>
  );
};

export default BuddyMetrics;
