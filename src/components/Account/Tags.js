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

  var loaded = false;
 const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    history.push("/home");
  };

  const [suggestedTags, setSuggestedTags] = useState([
    {
     name: "Music",
     selected: false,
     custom: false,
   }, 
   {
     name: "Gaming",
     selected: false,
     custom: false,
   }, 
   {
     name: "Hockey",
     selected: false,
     custom: false,
   }, 
   {
     name: "Art",
     selected: false,
     custom: false,
   }, 
    {
     name: "Coffee",
     selected: false,
     custom: false,
   }, 
   {
     name: "Introvert",
     selected: false,
     custom: false,
   }, 
   {
     name: "Oats",
     selected: false,
     custom: false,
   },
   {
     name: "Politics",
     selected: false,
     custom: false,
   },
   {
     name: "Computers",
     selected: false,
     custom: false,
   },
   {
     name: "Boba",
     selected: false,
     custom: false,
   },
   {
     name: "Anime",
     selected: false,
     custom: false,
   },
   {
     name: "Athlete",
     selected: false,
     custom: false,
   }, 
   {
     name: "Food",
     selected: false,
     custom: false,
   }]);


  const [selectedTags, setSelectedTags] = useState([]);
  const [newSearchTag, setNewSearchTag] = useState("");
  const [newSelectedTag, setNewSelectedTag] = useState({
    tag: "",
    index: "",
  });

  const handleAddSearchTag = async (event) => {
    event.preventDefault();

    if (newSearchTag) {
      const searchTag = {
        name: newSearchTag,
        selected: true,
        custom: true
      }
      var copySuggestedTags = JSON.parse(localStorage.getItem("selectedTags"));
      copySuggestedTags.push(searchTag);
      localStorage.setItem('selectedTags', JSON.stringify(copySuggestedTags));
      setNewSearchTag("");
      document.getElementById("tag-search").value = "";
    }
  }



  useEffect(() => {

    if(!localStorage.getItem("selectedTags")){
      localStorage.setItem("selectedTags", JSON.stringify(suggestedTags));
    }
    if (newSelectedTag.tag && suggestedTags[newSelectedTag.index]) {
      var selected = JSON.parse(localStorage.getItem("selectedTags"))[newSelectedTag.index].selected;
      var copySuggestedTags = JSON.parse(localStorage.getItem("selectedTags"));
      var localTag = copySuggestedTags[newSelectedTag.index];
      if (selected) {           
          localTag.selected = false;
          copySuggestedTags[newSelectedTag.index] = localTag; 
          setSelectedTags(copySuggestedTags);
          setSuggestedTags(copySuggestedTags);
          localStorage.setItem('selectedTags', JSON.stringify(copySuggestedTags));

      } else{
          localTag.selected = true;
          copySuggestedTags[newSelectedTag.index] = localTag; 
          setSelectedTags(copySuggestedTags);
          setSuggestedTags(copySuggestedTags);
          localStorage.setItem('selectedTags', JSON.stringify(copySuggestedTags));

      } 
    }
    //console.log(suggestedTags);
  }, [newSelectedTag])

  var tags;

  if( JSON.parse(localStorage.getItem("selectedTags"))){
    tags = JSON.parse(localStorage.getItem("selectedTags"));

  }else {
    tags = suggestedTags;
    
  }

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
            tags.filter(function(obj) {
              return (!obj.custom);
            }).map((tag, index) => (
              <li key={index} className={tag.selected ? "blue-tag" : "green-tag"}
                onClick={(e) => 
                  setNewSelectedTag({...newSelectedTag, tag: tag.name, index: index})
                }>
                <span>{tag.name}</span>  
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
              tags.filter(function(obj) {
                return (obj.selected);
              }).map((tag, index) => (
                
                <li key={index} >
                  <span>{tag.name}</span>  
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
