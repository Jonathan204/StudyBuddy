import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { RegisterContext } from "./RegisterContext";
import LoaderButton from "../Button/LoadingButton";

import ProfilePicture from "profile-picture";
import "profile-picture/build/ProfilePicture.css"

const Profile = () => {
  const { switchToCredentials } = useContext(RegisterContext);
  const { switchToBuddyMetrics } = useContext(RegisterContext);
  const { switchToSelfMetrics } = useContext(RegisterContext);
  const { switchToTags } = useContext(RegisterContext);

  const profilePictureRef = React.createRef();

  function handleUpload() {
    const PP = this.profilePicture.current;
    const imageData = PP.getData();
    const file = imageData.file;
    const imageAsDataURL = PP.getImageAsDataUrl();

    //add here the upload logic...
  }

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
          <ProfilePicture
            ref={profilePictureRef}
            useHelper={true}
            debug={true}
            frameFormat={"circle"}
          />
          <button onClick={handleUpload}>Upload</button>
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
