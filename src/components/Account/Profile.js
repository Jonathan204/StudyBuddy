import React, { useContext, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { RegisterContext } from "./RegisterContext";
import LoaderButton from "../Button/LoadingButton";

import ProfilePicture from "profile-picture";
import "profile-picture/build/ProfilePicture.css"

const Profile = () => {
  const { switchToCredentials } = useContext(RegisterContext);
  const { switchToBuddyMetrics } = useContext(RegisterContext);
  const { switchToSelfMetrics } = useContext(RegisterContext);
  const { switchToTags } = useContext(RegisterContext);
  const [selfProfile, setSelfProfile] = useState({
    profilePicture: localStorage.getItem('selfProfilePic'),
    bio: localStorage.getItem('selfBio'),
  });
  const profilePictureRef = React.createRef();

  function handleUpload() {
    const PP = profilePictureRef.current;
    const imageAsDataURL = PP.getImageAsDataUrl();
    setSelfProfile({ ...selfProfile, profilePicture: imageAsDataURL});
    localStorage.setItem('selfProfilePic', imageAsDataURL);
    
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
            image={selfProfile.profilePicture ? selfProfile.profilePicture : ""}
            ref={ profilePictureRef}
            useHelper={false}
            debug={false}
            frameFormat={"circle"}
            minImageSize={0}


          />
          <button className="upload-btn mt-5" onClick={handleUpload}>Upload</button>
          <Form.Group className="biography" controlId="textarea">
            <Form.Label>Tell me about yourself!</Form.Label>
            <Form.Control 
              as="textarea" 
              className="textarea" 
              rows={2}          
              onChange={(e) => {
                  setSelfProfile({ ...selfProfile, bio: e.target.value })
                  localStorage.setItem('selfBio', e.target.value);
                }
              }
              defaultValue={localStorage.getItem('selfBio')}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="profile-btns next-cancel-btn">
        <LoaderButton className="back-button" onClick={switchToBuddyMetrics}>Back</LoaderButton>
        <LoaderButton className="next-button" onClick={switchToTags}>Next</LoaderButton>
      </Row>
    </Container>
  );
};

export default Profile;
