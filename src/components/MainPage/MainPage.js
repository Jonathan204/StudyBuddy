import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";


import "./styles.css";

const MainPage = () => {

  const handleMetricsClicked = async (event) => {
  };

  const handleMatchesClicked = async (event) => {
  };

  return (
    <Container className="border account-window account-height">
      <Row className="align-text-center top-buffer">
        <Col>
          <h3 class="text-white">Study Buddy</h3>
        </Col>
      </Row>


        <Button class="mid-buffer btn btn-secondary rounded-pill">
          Metrics
       </Button>
        <Button class="btn btn-primary btn-block rounded-pill">
           Matches
        </Button>
      
    </Container>
  );
};

export default MainPage;
