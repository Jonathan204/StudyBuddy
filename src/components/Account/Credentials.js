import React, { useContext, useState  } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import { AccountContext } from "./AccountContext";
import { RegisterContext } from "./RegisterContext";
import LoaderButton from "../Button/LoadingButton";
import validate from "./validation";


const Credentials = () => {

  const [validated, setValidated] = useState(false);
  const [userData, setUserData] = useState({
    username: localStorage.getItem('username'),
    email: localStorage.getItem('email'),
    password: localStorage.getItem('password'),
    confirmPassword: localStorage.getItem('confirmPassword'),
  });




  const [errors, setErrors] = useState({});
  const { switchToSignin } = useContext(AccountContext);
  const { switchToSelfMetrics } = useContext(RegisterContext);
  const { switchToBuddyMetrics } = useContext(RegisterContext);
  const { switchToProfile } = useContext(RegisterContext);
  const { switchToPersonalInfo } = useContext(RegisterContext);
  const { switchToTags } = useContext(RegisterContext);
  
  const handleSubmit = (event) => {
    setValidated(true);
    event.preventDefault();
    const formErrors = validate(userData);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      event.stopPropagation();
    } else {
      setErrors({});
    }
  };

  return (
    <Container className="register">
      <Row className="mt-2 register-nav">
        <button className="active-nav-btn"></button>
        <button className="nav-btn" onClick={switchToSelfMetrics} disabled={!validated}></button>
        <button className="nav-btn" onClick={switchToBuddyMetrics} disabled={!validated}></button>
        <button className="nav-btn" onClick={switchToPersonalInfo} disabled={!validated} ></button>
        <button className="nav-btn" onClick={switchToProfile} disabled={!validated}></button>
        <button className="nav-btn" onClick={switchToTags} disabled={!validated}></button>
      </Row>
      <Row className="mt-4 align-text-center">
        <Col>
          <h5>Welcome to Study Buddy!</h5>
          <p>Let's create your account.</p>
        </Col>
      </Row>
      <Form className="mt-1 credentials-form" noValidate onSubmit={handleSubmit}>
        <Row className="flex-column">
          <Form.Group controlId="username">
            <Form.Control
              name="username"
              required
              type="text"
              placeholder="Username"
              isValid={validated && !errors.username}
              isInvalid={!!errors.username}
              onChange={(e) => {
                  setUserData({ ...userData, username: e.target.value })
                  localStorage.setItem('username', e.target.value);
                }
              }
              defaultValue={localStorage.getItem('username')}
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
              onChange={(e) => {
                  setUserData({ ...userData, password: e.target.value })
                  localStorage.setItem('password', e.target.value);
                }
              }
              defaultValue={localStorage.getItem('password')}
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
              onChange={(e) => {
                  setUserData({ ...userData, confirmPassword: e.target.value })
                  localStorage.setItem('confirmPassword', e.target.value);
                }
              }
              defaultValue={localStorage.getItem('confirmPassword')}
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
              onChange={(e) => { 
                  setUserData({ ...userData, email: e.target.value })
                  localStorage.setItem('email', e.target.value)    
                } 
              } 
              defaultValue={localStorage.getItem('email')}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row>
          <LoaderButton className="submit-button" type="submit">
            Verify
          </LoaderButton>
        </Row>
        <Row className="mt-5 next-cancel-btn">
          <button className="cancel-button" onClick={switchToSignin}>Cancel</button>
          <button className="next-button" onClick={switchToSelfMetrics} disabled={!validated}>Next</button>
        </Row>
      </Form>
    </Container>
  );
};

export default Credentials;
