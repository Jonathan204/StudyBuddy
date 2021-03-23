import React, { useContext, useState, useEffect } from "react";
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

  const [suggestedTags] = useState(["Music", "Gaming", "Hockey", "Art", "Coffee", "Introvert", 
                                      "Oats", "Politics", "Computers", "Boba", "Anime", "Athlete", 
                                      "Food"]);
  const [selectedTags, setSelectedTags] = useState([]);

  const [newSearchTag, setNewSearchTag] = useState("");
  const [newSelectedTag, setNewSelectedTag] = useState({
    tag: "",
    index: "",
  });

  const handleAddSearchTag = async (event) => {
    event.preventDefault();

    if (newSearchTag) {
      const tags = selectedTags.slice(0);
      tags.push(newSearchTag);
  
      setSelectedTags(tags);
      setNewSearchTag("");
      document.getElementById("tag-search").value = "";
    }
  }

  useEffect(() => {
    var list = document.getElementById("selected-list").getElementsByTagName("li");

    if (newSelectedTag.tag && list[newSelectedTag.index]) {
      var bgColor = list[newSelectedTag.index].style.backgroundColor;

      if (!bgColor || bgColor == "rgb(0, 166, 81)") {
        const tags = selectedTags.slice(0);
        tags.push(newSelectedTag.tag);
        setSelectedTags(tags);
        list[newSelectedTag.index].style.backgroundColor = "#0070ff";
      } else if (bgColor == "rgb(0, 112, 255)") {
        const tags = selectedTags.filter(tag => tag != newSelectedTag.tag);
        setSelectedTags(tags);
        list[newSelectedTag.index].style.backgroundColor = "rgb(0, 166, 81)";
      } 
    }

  }, [newSelectedTag])

  return (
    <Container className="register">
      <Row className="mt-2 register-nav">
        <button onClick={switchToCredentials}></button>
        <button onClick={switchToSelfMetrics}></button>
        <button onClick={switchToBuddyMetrics}></button>
        <button onClick={switchToProfile}></button>
        <button className="active-nav-btn"></button>
      </Row>
      <Row className="mt-4 tags-header">
        <Col>
          <h5>Help others connect with you.</h5>
          <p>Pick some tags for interests and traits to show on your profile.</p>
        </Col>
      </Row> 
      <Form className="tags-search" noValidate onSubmit={handleAddSearchTag}>
        <Row>
          <Col>
            <Form.Control
              id="tag-search"
              name="newTag"
              type="text"
              placeholder="Search for tags..."
              onChange={(e) =>
                setNewSearchTag(e.target.value)
              }
            />
          </Col>
        </Row>
      </Form>
      <Row className="mt-3 suggested-tags">
        <ul id="selected-list">
          {
            suggestedTags.map((tag, index) => (
              <li key={index} 
                onClick={(e) => 
                  setNewSelectedTag({...newSelectedTag, tag: tag, index: index})
                }>
                <span>{tag}</span>  
              </li>
            ))
          }
        </ul>
      </Row>
      <Row className="mt-3 selected-section">
        <p className="mt-1 mx-2">Selected:</p>
        <div className="mt-4 selected-tags">
          <ul>
            {
              selectedTags.map((tag, index) => (
                <li key={index} >
                  <span>{tag}</span>  
                </li>
              ))
            }
          </ul>
        </div>
      </Row>
      <Form className="mt-3" noValidate onSubmit={handleSubmit}>
        <Row className="mt-2 next-cancel-btn">
          <LoaderButton className="back-button" onClick={switchToProfile}>Back</LoaderButton>
          <LoaderButton className="complete-button" type="submit">Complete</LoaderButton>
        </Row>
      </Form>
    </Container>
  );
};

export default Tags;
