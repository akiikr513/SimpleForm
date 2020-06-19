import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import CreateForm from './components/create-form';
import EditForm from './components/edit-form';
import FormList from './components/form-list';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar bg='dark' variant='dark'>
          <Container>
            <Navbar.Brand>
              <Link to={'/create-form'} className='nav-link'>
                Simple Form MERN app
              </Link>
            </Navbar.Brand>

            <Nav className='justify-content-end'>
              <Nav>
                <Link to={'/create-form'} className='nav-link'>
                  Create Form
                </Link>
              </Nav>

              <Nav>
                <Link to={'/form-list'} className='nav-link'>
                  Form List
                </Link>
              </Nav>
            </Nav>
          </Container>
        </Navbar>

        <Container>
          <Row>
            <Col md={12}>
              <div className='wrapper'>
                <Switch>
                  <Route exact path='/' component={CreateForm} />
                  <Route path='/create-form' component={CreateForm} />
                  <Route path='/edit-form/:id' component={EditForm} />
                  <Route path='/form-list' component={FormList} />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;
