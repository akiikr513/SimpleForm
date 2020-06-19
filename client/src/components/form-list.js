import React, { Component } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import FormTableRow from './FormTableRow';

export default class FormList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forms: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:4000/forms/')
      .then((res) => {
        this.setState({
          forms: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  DataTable() {
    return this.state.forms.map((res, i) => {
      return <FormTableRow obj={res} key={i} />;
    });
  }

  render() {
    return (
      <div className='table-wrapper'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Company</th>
              <th>Intrest</th>
              <th>Message</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.DataTable()}</tbody>
        </Table>
      </div>
    );
  }
}
