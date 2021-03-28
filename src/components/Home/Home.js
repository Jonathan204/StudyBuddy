import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { HomeContext } from "./HomeContext";
import  HomePage  from "./HomePage";
import  HomeMetrics  from "./Metrics";
import  WantMetrics  from "./WantMetrics";
import "./styles.css";
import "../Account/styles.css";

const Home = () => {

  const [activeWindow, setActiveWindow] = useState("homeCredentials");

  const switchToHome = async (event) => {
    setActiveWindow("homeCredentials");
  };

  const switchToSelfMetrics = () => {
    setActiveWindow("homeSelfMetrics");
  }

  const switchToWantMetrics = () => {
    setActiveWindow("homeWantMetrics");
  }
  const contextValue = {switchToHome, switchToSelfMetrics, switchToWantMetrics };

  return (
    <HomeContext.Provider value={contextValue}>
      <Container>
        {activeWindow === "homeCredentials" && <HomePage />}
        {activeWindow === "homeSelfMetrics" && <HomeMetrics />}
        {activeWindow === "homeWantMetrics" && <WantMetrics />}
      </Container>
    </HomeContext.Provider>
  );
};

export default Home;
