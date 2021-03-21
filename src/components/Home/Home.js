import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";


import "./styles.css";

const Home = () => {

  const handleMetricsClicked = async (event) => {
  };

  const handleMatchesClicked = async (event) => {
  };

  return (
    <Container className="border account-window account-height">
      <Row className="align-text-center top-buffer">
        <Col>
          <h3 className="text-white">Study Buddy</h3>
        </Col>
      </Row>

      <Row className="mid-buffer">
        <Col className="col-lg">
          <Button className="btn btn-secondary btn-lg btn-block rounded-pill">
            Metrics
          </Button>
          <Button className="mt-2 btn btn-primary btn-lg btn-block rounded-pill">
            Matches
          </Button>
        </Col>
      </Row>

        
      
    </Container>
  );
};

export default Home;
