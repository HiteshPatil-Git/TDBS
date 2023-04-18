import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'
import kedar from '../images/kedar.jpg'

import { render } from "react-dom";

class AboutComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }




  render() {
    return (
      <div>
        <div>
          <h5></h5><br></br>
          <h5></h5>
          <h5></h5>
          <h5></h5>
          <h5></h5>

          <h4>&nbsp;&nbsp;&nbsp; Temple Darshan Booking System is the website made to simplify the experience of temple darshan.</h4>
          <h5></h5><br></br>
          <div style={{ color: "seagreen" }}> <h5>&nbsp;&nbsp;&nbsp; &nbsp;Our prime objective is to reduce waiting time of devotee standing in a queue & provide assistance to temple staff in
            temple management.</h5><h5>&nbsp;&nbsp;&nbsp;&nbsp; Our project, the Temple Darshan Booking System, is a comprehensive online solution
              developed using Java web-based technologies.</h5><h5> &nbsp;&nbsp;&nbsp;&nbsp;  It aims to streamline and automate various processes such as queue
                management for devotees, managing offerings, managing events and poojas. </h5>
          </div>
          <div style={{ color: "seagreen", marginTop:"20px" }}>
          <h5>&nbsp;&nbsp;&nbsp; &nbsp;GitHub Link => <a style={{ marginRight: '20px', marginTop: '12px' }}    href="https://github.com/HiteshPatil-Git/TDBS" > https://github.com/HiteshPatil-Git/TDBS</a> </h5>
          
          </div>
        </div>
      </div>


    )
  }
}
export default AboutComponent;

