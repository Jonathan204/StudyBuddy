import React from 'react';
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; //This is required for react bootstrap CSS styling
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Account from "./components/Account/Account";
import Home from "./components/Home/Home";
import Message from "./components/Home/Chat/Message";
import Messaging from "./components/Home/Chat/Messaging";
import UnderDevelopment from './components/UnderDevelopment/UnderDevelopment';
import ProfileCard from './components/ProfileCard/ProfileCard';
import Matches from './components/Matches/Matches';
import FriendReqProfile from './components/ProfileCard/FriendReqProfile';

function App() {
  return (
    <div className="Emulator">
        <Router>
          <Switch>
            <Route exact path="/">
              <Container>
                <Account />
              </Container>
            </Route>
            <Route path="/sliders">
            </Route>
            <Route path="/home">
              <Container>
                <Home />  
              </Container>
          </Route>
          <Route path="/messagelist">
              <Container>
                <Message />  
              </Container>
          </Route>
          <Route path="/messaging">
              <Container>
                <Messaging />  
              </Container>
          </Route>
          <Route path="/matches">
            <Container>
              <Matches />
            </Container>
          </Route>
          <Route path="/profilecard">
            <Container>
              <ProfileCard />  
            </Container>
          </Route>
          <Route path="/friendreqprofile">
            <Container>
              <FriendReqProfile />  
            </Container>
          </Route>
          <Route path="/underdevelopment">
            <Container>
              <UnderDevelopment />  
            </Container>
          </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
