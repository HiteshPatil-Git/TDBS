import React, { Component } from 'react';
import UserService from '../services/UserService';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';

import EpassService from '../services/EpassService';

class AllBookingsComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {

  }

  logout = () => {
    localStorage.clear();
    window.location.href = "/";
  }

  book() {
    const slotData = window.localStorage.getItem('selectedSlot');
    const slotresp = JSON.parse(slotData);
    console.log('slot Date ==> ' + slotresp.slotDate);
    console.log('slot ID ==> ' + slotresp.slotId);
    console.log('slot available ==> ' + slotresp.availableSlot);

    this.props.history.push(`/book-Epass`);
  }


  render() {

    const epassData = window.localStorage.getItem('epassByUserId');
    const data = JSON.parse(epassData);
    
    const userData = window.localStorage.getItem('user');
    const response = JSON.parse(userData);
    

    const tableRows = data.map(
      (element) => {

        return (

          <tr>
            <td>{element.templeName}</td>
            <td>{element.passId}</td>
            <td>{element.passDate}</td>
            <td>{element.slot}</td>
            <td>{element.peoples}</td>
          </tr>
        )

      }
    )

    return (

      <div>
        <h3 className="text-center">All Bookings List</h3>
        <p align="right" >
          <button style={{ marginRight: '10px' }} onClick={this.logout} className="btn btn-primary">Logout</button></p>

        <Table hover>
          <thead>
            <tr>
            <th>Temple Name</th>
              <th>Pass ID</th>
              <th>Date</th>
              <th>Slot Timing</th>
              <th>Peoples</th>
            </tr>
          </thead>
          <tbody>
            {tableRows}
          </tbody>
        </Table>

      </div>

    )

  }
}
export default AllBookingsComponent;