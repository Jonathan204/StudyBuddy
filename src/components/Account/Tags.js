import React, { useContext } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import { RegisterContext } from "./RegisterContext";
import LoaderButton from "../Button/LoadingButton";
import { useHistory } from "react-router-dom";

const Tags = () => {
  const { switchToCredentials } = useContext(RegisterContext);
  const { switchToSelfMetrics } = useContext(RegisterContext);
  const { switchToBuddyMetrics } = useContext(RegisterContext);
  const { switchToProfile } = useContext(RegisterContext);

 const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    history.push("/home");
  };

  return (
    <Container className="register">
      <Row className="mt-2 register-nav">
        <button onClick={switchToCredentials}></button>
        <button onClick={switchToSelfMetrics}></button>
        <button onClick={switchToBuddyMetrics}></button>
        <button onClick={switchToProfile}></button>
        <button className="active-nav-btn"></button>
      </Row>
      <Row className="mt-4 align-text-center">
        <Col>
          <h5>Help others connect with you.</h5>
          <p>Pick some tags for interests and traits to show on your profile.</p>
        </Col>
      </Row>
      <Form className="mt-4" noValidate onSubmit={handleSubmit}>
        <Row className="mt-5 next-cancel-btn">
          <LoaderButton className="back-button" onClick={switchToProfile}>Back</LoaderButton>
          <LoaderButton className="complete-button" type="submit" loading={false}>Complete</LoaderButton>
        </Row>
      </Form>
    </Container>
  );
};

export default Tags;
