import React, { Component, useRef } from 'react';
import EpassService from '../services/EpassService';

import { render } from "react-dom";
import { useReactToPrint } from "react-to-print";


class ShowPassComponent extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            epass: {},
            userd: {},
            templed: {}
        }
    }

    logout = () => {
        localStorage.clear();
        window.location.href = "/";
    }

    componentDidMount() {
        const passData = localStorage.getItem('bookedpass');
        const passd = JSON.parse(passData);
        this.setState({ epass: passd });
        const templeData = window.localStorage.getItem('selectedTemple');
        const templeresp = JSON.parse(templeData);
        this.setState({ templed: templeresp });
        
        const user = localStorage.getItem('user');
        const userDetails = JSON.parse(user);
        console.log(userDetails);
        this.setState({ userd: userDetails });
        
    }

    render() {

        return (

            <body>
                <div style={{
                    backgroundColor: '#EBF4FA',
                }}  >

                    <div className="card col-md-6 offset-md-3" style={{
                        backgroundColor: '#FFF8C6',

                    }} >
                        <h3 className="text-center">Darshan Access Card</h3>
                        <div className="card-body">

                            <div className="row">
                                <label class="font-weight-bold" >Temple Name:</label>
                                <div className="form-control">{this.state.epass.templeName}</div>
                            </div>


                            <div className="row">
                                <label class="font-weight-bold" >Devotee Name:</label>
                                <div className="form-control">{this.state.userd.name}</div>
                            </div>

                            <div className="row" >
                                <label class="font-weight-bold">Pass Id:</label>
                                <div className="form-control">{this.state.epass.passId}</div>
                            </div>

                            <div className="row">
                                <label class="font-weight-bold">Pass Date:</label>
                                <div className="form-control">{this.state.epass.passDate}</div>

                            </div>
                            <div className="row">
                                <label class="font-weight-bold" >Time Slot:</label>
                                <div className="form-control">{this.state.epass.slot}</div>

                            </div>
                            <div className="row">
                                <label class="font-weight-bold" >No Of Peoples:</label>
                                <div className="form-control">{this.state.epass.peoples}</div>

                            </div>


                            <hr style={{
                                color: '#000000',
                                backgroundColor: '#000000',
                                height: .5,
                                borderColor: '#000000'
                            }} />
                            <p class="text-primary">1. Please download this Pass and carry hard copy if possible.</p>
                            <p class="text-primary">2. This Darshan Pass must be shown at verification counter.</p>
                            <p class="text-primary">3. Online Donation service is avaailable on our website.</p>
                            <p class="text-primary">4. Consumption of Alcohol is strictly prohibited.</p>
                            <p class="text-primary">5. For any asistance please contact the temle trust authorities.</p>
                        </div>

                    </div>
                </div>




            </body>

        );
    }
}





export default ShowPassComponent;