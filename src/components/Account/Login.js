import React, { useContext, useState } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import { AccountContext } from "./AccountContext";
import LoaderButton from "../Button/LoadingButton";
import validate from "./validation";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [validated, setValidated] = useState(false);
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});


  const { switchToSignup } = useContext(AccountContext);
  const history = useHistory();

  const handleSubmit = async (event) => {
    setValidated(true);
    event.preventDefault();
    const formErrors = validate(userData);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      event.stopPropagation();
    } else {
      setErrors({});
      history.push("/home");

    }
  };

  return (
    <Container className="account-height">
      <Row className="mt-4 align-text-center">
        <Col>
          <h3>Study Buddy</h3>
        </Col>
      </Row>
      <Form className="mt-5" noValidate onSubmit={handleSubmit}>
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
        <Row className="mt-5">
          <LoaderButton
            className="submit-button"
            type="submit"
            loading={false}
          >
            Login
          </LoaderButton>
        </Row>
        <Row className="flex-column mt-3 align-text-center">
          <p className="underline-on-hover" onClick={switchToSignup}>
            Don't have an account? Create one!
          </p>
        </Row>
      </Form>
    </Container>
  );
};

export default Login;
