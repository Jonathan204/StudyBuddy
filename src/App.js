import React from 'react';
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; //This is required for react bootstrap CSS styling
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Account from "./components/Account/Account";

function App() {
  return (
    <div class="Emulator">
        <Router>
          <Switch>
            <Route exact path="/">
              <Container>
                <Account />
              </Container>
            </Route>
            <Route path="/sliders">
              
              
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;