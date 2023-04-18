import React, { Component } from 'react';
import back2 from '../../images/back2.jpg'
import donation from '../../images/donation.png';
import book2 from '../../images/book2.png'
import book3 from '../../images/book3.png'
import book4 from '../../images/book4.jpg'
import book5 from '../../images/book5.jpg'
import list from '../../images/list.jpg'
import swastik2 from '../../images/swastik2.jpg'
import back6 from '../../images/back6.jpg'
import TimeSlotService from '../../services/TimeSlotService';

class TempleScopeComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: ''
        }
        this.verification = this.verification.bind(this);
        this.createTimeSlot = this.createTimeSlot.bind(this);
        this.updateProfile = this.updateProfile.bind(this);
        this.slot = this.slot.bind(this);
    }
    componentDidMount() {
        const userData = window.localStorage.getItem('temple');
        const response = JSON.parse(userData);
    }

    updateProfile(id) {
        this.props.history.push(`/update`);
    }
    logout = () => {
        localStorage.clear();
        window.location.href = "/";
    }
    createTimeSlot(slotId) {
        this.props.history.push(`/create-time-slot`);
    }

    verification() {

        this.props.history.push('/devotee-verification');
    }

    slot = () => {
        let slot = { email: this.state.email, password: this.state.password }
        console.log('button clicked =>')
        const userData = window.localStorage.getItem('temple');
        const response = JSON.parse(userData);
        console.log('respose =>' + response.templeId)
        TimeSlotService.getSlotByTempleName(response.templeName).then(
            res => {

                console.log(res);
                localStorage.setItem('slotbytemple', JSON.stringify(res.data));
                this.props.history.push(`/all-slot`);
            })
    }

    render() {

        return (
            <body className="container-fluid" style={{
                width: '100vw',
                height: '100vh',
                margin: '0',
                alignItems: 'center',
                overflow: 'hidden',
                marginRight: '0',
                marginTop: '0',
                padding: '0',

            }}>

                <div className="bg-image" style={{

                    backgroundImage: `url('${back6}')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: 'lightblue',
                    width: '100vw',
                    height: '100vh',
                    marginRight: '0px',
                    backgroundSize: 'cover',
                    alignItems: 'center',
                    padding: '0',
                    margin: '0',
                }} >
                    <p align="right" >
                        <button style={{ marginRight: '10px' }} onClick={this.logout} className="btn btn-primary">Logout</button>
                    </p>
                    <div className="row flex-row flex-nowrap" style={{ marginLeft: '100px', marginTop: '80px', }}>

                        <div className="col-3" style={{ marginLeft: '0px', }}>
                            <div className="card border border-warning shadow-0 mb-3" style={{ maxWidth: "10rem" }}>  <button className="btn btn-primary" onClick={() => this.updateProfile()}>Update Profile</button>
                                <div >
                                    <img width="140" height="140" src={book3} ></img>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card border border-warning shadow-0 mb-3" style={{ maxWidth: "10rem" }}>  <button className="btn btn-primary" onClick={() => this.createTimeSlot()} >Create Time-Slot</button>
                                <div>
                                    <img width="140" height="140" src={book4} ></img>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card border border-warning shadow-0 mb-3" style={{ maxWidth: "10rem" }}>  <button className="btn btn-primary" onClick={() => this.slot()} >Time-Slot Details</button>
                                <div>
                                    <img width="140" height="140" src={list} ></img>
                                </div>
                            </div>
                        </div>
                        <div className="col-3" style={{ marginLeft: '0px', }}>
                            <div className="card border border-warning shadow-0 mb-3" style={{ maxWidth: "10rem" }}>  <button className="btn btn-primary" onClick={() => this.verification()}>Devotee Verification</button>
                                <div >
                                    <img width="140" height="140" src={book5} ></img>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </body>
        );
    }
}

export default TempleScopeComponent;