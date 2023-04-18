import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
// import {useNavigate} from 'react-router-dom'

import { render } from "react-dom";

class HeaderComponent extends React.Component {
  
    constructor(props) {
        super(props)
        this.state = {   
    
        }
        this.handleDelete = this.handleDelete.bind(this);
        
    }

    handleDelete() {
        
        
        console.log("inside a button ")

    }
   
    render() {
      
      const userData = window.localStorage.getItem('user');
        const userresponse = JSON.parse(userData);
      
        return (
          
            <div class="container-fluid" style={{
             
                margin:'0',
                overflow:'hidden',
                marginLeft: '0px',
                padding:'00',
                backgroundColor:'GrayText',

              }} >
            
               
                
                    {/* <nav className="navbar navbar-expand-x1 navbar-dark bg-dark">
                    <div className="navbar-brand" > Temple Darshan Booking System</div>
                  
        <ul class="navbar-nav ml-auto">
        <li class="nav-item">
      
        </li>
        </ul> 
                    </nav>  */}
                    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                      
  <div class="container-fluid">
    
    <a class="navbar-brand" href="/">Temple Darshan Booking System</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link" href="/">Temples</a>
        </li> */}
        <li class="nav-item">
        {/* <button className="btn btn-success" onClick={() => {this.handleDelete()}}>About Us</button> */}
          <a class="nav-link" href="/aboutus">About Us</a>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li> */}


      </ul>
    </div>
  </div>
</nav>
              
               
            </div>
            
        );
    }
}

export default HeaderComponent;