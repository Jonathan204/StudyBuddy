import React, { useContext, useState } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import { AccountContext } from "./AccountContext";
import { RegisterContext } from "./RegisterContext";
import LoaderButton from "../Button/LoadingButton";
import validate from "./validation";

const Credentials = () => {
  const [validated, setValidated] = useState(false);
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const { switchToSignin } = useContext(AccountContext);
  const { switchToSelfMetrics } = useContext(RegisterContext);
  const { switchToBuddyMetrics } = useContext(RegisterContext);
  const { switchToProfile } = useContext(RegisterContext);
  const { switchToTags } = useContext(RegisterContext);

  const handleSubmit = (event) => {
    setValidated(true);
    event.preventDefault();
    const formErrors = validate(userData);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      event.stopPropagation();
    }
  };

  return (
    <Container className="register">
      <Row className="mt-2 register-nav">
        <button className="active-nav-btn"></button>
        <button onClick={switchToSelfMetrics}></button>
        <button onClick={switchToBuddyMetrics}></button>
        <button onClick={switchToProfile}></button>
        <button onClick={switchToTags}></button>
      </Row>
      <Row className="mt-4 align-text-center">
        <Col>
          <h5>Welcome to Study Buddy!</h5>
          <p>Let's create your account.</p>
        </Col>
      </Row>
      <Form className="mt-1" noValidate onSubmit={handleSubmit}>
        <Row className="flex-column">
          <Form.Group controlId="username">
            <Form.Control
              name="username"
              required
              type="text"
              placeholder="Username"
              isValid={validated && !errors.username}
              isInvalid={!!errors.username}
              onChange={(e) =>
                setUserData({ ...userData, username: e.target.value })
              }
            />
            <Form.Control.Feedback type="invalid">
              {errors.username}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="flex-column">
          <Form.Group controlId="password">
            <Form.Control
              name="password"
              required
              type="password"
              placeholder="Password"
              isValid={validated && !errors.password}
              isInvalid={!!errors.password}
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
            />
            <Form.Control.Feedback type="invalid">
              {errors.password}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="flex-column">
          <Form.Group controlId="confirmPassword">
            <Form.Control
              name="password"
              required
              type="password"
              placeholder="Confirm Password"
              isValid={validated && !errors.confirmPassword}
              isInvalid={!!errors.confirmPassword }
              onChange={(e) =>
                setUserData({ ...userData, confirmPassword: e.target.value })
              }
            />
            <Form.Control.Feedback type="invalid">
              {errors.confirmPassword}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="flex-column mt-2 pwd-verify">
          <p>Next, we need to verify your school email.</p>
        </Row>
        <Row className="flex-column">
          <Form.Group controlId="email">
            <Form.Control
              name="email"
              type="email"
              placeholder="Email"
              required
              isValid={validated && !errors.email}
              isInvalid={!!errors.email}
              onChange={(e) => setUserData({ ...userData, email: e.target.value })}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row>
          <LoaderButton className="submit-button" type="submit" onClick={switchToSignin}>
            Verify
          </LoaderButton>
        </Row>
        <Row className="mt-5 next-cancel-btn">
          <LoaderButton className="cancel-button" onClick={switchToSignin}>Cancel</LoaderButton>
          <LoaderButton className="next-button" onClick={switchToSelfMetrics}>Next</LoaderButton>
        </Row>
      </Form>
    </Container>
  );
};

export default Credentials;
