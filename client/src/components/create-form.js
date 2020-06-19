import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
export default class CreateForm extends Component {
  constructor(props) {
    super(props);

    // Setting up functions
    this.onChangeFormName = this.onChangeFormName.bind(this);
    this.onChangeFormEmail = this.onChangeFormEmail.bind(this);
    this.onChangeFormCompany = this.onChangeFormCompany.bind(this);
    this.onChangeFormIntrest = this.onChangeFormIntrest.bind(this);
    this.onChangeFormMessage = this.onChangeFormMessage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: '',
      email: '',
      company: '',
      intrest: '',
      message: '',
    };
  }

  onChangeFormName(e) {
    this.setState({ name: e.target.value });
  }

  onChangeFormEmail(e) {
    this.setState({ email: e.target.value });
  }

  onChangeFormCompany(e) {
    this.setState({ company: e.target.value });
  }
  onChangeFormIntrest(e) {
    this.setState({ intrest: e.target.value });
  }
  onChangeFormMessage(e) {
    this.setState({ message: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const formObject = {
      name: this.state.name,
      email: this.state.email,
      company: this.state.company,
      intrest: this.state.intrest,
      message: this.state.message,
    };

    axios
      .post('http://localhost:4000/forms/create-form', formObject)
      .then((res) => console.log(res.data));

    this.setState({
      name: '',
      email: '',
      company: '',
      intrest: '',
      message: '',
    });
  }

  render() {
    return (
      <div class='form-wrapper'>
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId='Name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='text'
              value={this.state.name}
              onChange={this.onChangeFormName}
            />
          </Form.Group>

          <Form.Group controlId='Email'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              value={this.state.email}
              onChange={this.onChangeFormEmail}
            />
          </Form.Group>

          <Form.Group controlId='company'>
            <Form.Label>Company</Form.Label>
            <Form.Control
              type='text'
              value={this.state.company}
              onChange={this.onChangeFormCompany}
            />
          </Form.Group>

          <Form.Group controlId='intrest'>
            <Form.Label>Intrested in...</Form.Label>
            <Form.Control
              as='select'
              value={this.state.intrest}
              onChange={this.onChangeFormIntrest}
            >
              <option value='-1' disabled>
                --
              </option>
              <option value='none'>Select</option>
              <option value='Developement'>Developement</option>
              <option value='Analytics'>Analytics</option>
              <option value='AI/ML'>AI/ML</option>
              <option value='Marketing'>Marketing</option>
              <option value='Management'>Management</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId='Message'>
            <Form.Label>Message</Form.Label>
            <Form.Control
              type='text'
              value={this.state.message}
              onChange={this.onChangeFormMessage}
            />
          </Form.Group>

          <Button variant='danger' size='lg' block='block' type='submit'>
            Create My Form
          </Button>
        </Form>
      </div>
    );
  }
}
