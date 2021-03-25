import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { RegisterContext } from "./RegisterContext";
import Credentials from "./Credentials";
import SelfMetrics from "./SelfMetrics";
import BuddyMetrics from "./BuddyMetrics";
import Profile from "./Profile";
import PersonalInfo from "./PersonalInfo";
import Tags from "./Tags";

const Register = () => {
  const [activeWindow, setActiveWindow] = useState("registerCredentials");

  const switchToCredentials = () => {
    setActiveWindow("registerCredentials");
  }

  const switchToSelfMetrics = () => {
    setActiveWindow("registerSelfMetrics");
  }

  const switchToBuddyMetrics = () => {
    setActiveWindow("registerBuddyMetrics");
  }

  const switchToProfile = () => {
    setActiveWindow("registerProfile");
  }

  const switchToPersonalInfo = () => {
    setActiveWindow("registerPersonalInfo");
  }

  const switchToTags = () => {
    setActiveWindow("registerTags");
  }

  const contextValue = { switchToCredentials, switchToSelfMetrics, switchToBuddyMetrics, switchToProfile, switchToTags, switchToPersonalInfo };

  return (
    <RegisterContext.Provider value={contextValue}>
      <Container className="register">
        {activeWindow === "registerCredentials" && <Credentials />}
        {activeWindow === "registerSelfMetrics" && <SelfMetrics />}
        {activeWindow === "registerBuddyMetrics" && <BuddyMetrics />}
        {activeWindow === "registerProfile" && <Profile />}
        {activeWindow === "registerPersonalInfo" && <PersonalInfo />}
        {activeWindow === "registerTags" && <Tags />}
      </Container>
    </RegisterContext.Provider>
  );
};

export default Register;
