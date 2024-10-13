import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import SubmissionSuccess from './SubmissionSuccess';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <Router>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">My Profile</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/skills">Skills</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/skills" component={Skills} />
      <Route path="/contact" component={Contact} />
      <Route path="/submission-success" component={SubmissionSuccess} />
    </Switch>
  </Router>
);

export default App;
