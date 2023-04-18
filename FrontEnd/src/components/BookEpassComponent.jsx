import React, { Component, useState } from 'react';
import emailjs from 'emailjs-com';

import EpassService from '../services/EpassService';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import UserService from '../services/UserService';

import { parse, isDate } from "date-fns";

const today = new Date();
function parseDateString(value, originalValue) {
    const parsedDate = isDate(originalValue) ? originalValue : parse(originalValue, "yyyy-MM-dd", new Date());

    return parsedDate;
}
class BookEpassComponent extends Component {



    logout = () => {
        localStorage.clear();
        window.location.href = "/";
    }

    render() {
        const slotData = window.localStorage.getItem('selectedSlot');
        const slotresp = JSON.parse(slotData);
        const userData = window.localStorage.getItem('user');
        const response = JSON.parse(userData);
        const templeData = window.localStorage.getItem('selectedTemple');
        const templeresp = JSON.parse(templeData);
        console.log('In create timeslot userId =>' + response.userId);
        console.log('slot Id   =  ' + slotresp.slotId);

        console.log('In BookEpass');

        return (

            <Formik
                initialValues={{
                    templeName: templeresp.templeName,
                    passDate: slotresp.slotDate,
                    slot: slotresp.slot,
                    available: slotresp.availableSlot,
                    peoples: '',

                }}


                validationSchema={Yup.object().shape({
                    passDate: Yup.date().transform(parseDateString).min(today, 'please select valid date'),


                    peoples: Yup.number()
                        .required('This field is required')
                        .positive('please Enter valid Number')
                        .lessThan(6, 'please select Number of peoples between 1 to 5'),

                    slot: Yup.string()
                        .required('Slot required'),
                    available: Yup.string()
                        .required('Slot required'),

                })}

                onSubmit={userData => {
                    console.log('button clicked')
                    emailjs.sendForm('service_flv5uiq', 'template_u56edpm', '.abc', 'user_rwUGjMuz6UWCDzpwVVGPe')
                        .then((result) => {
                            console.log(result.text);
                        }, (error) => {
                            console.log(error.text);
                        });
                    alert('Booking successfull :-)\n\n' + JSON.stringify(userData, null, 4))
                    EpassService.createEpass(userData, slotresp.slotId, response.userId).then(res => {

                        if (res === null) {

                            this.props.history.push(`/book-Epass`);
                        }
                        else {
                            this.props.history.push('/pdf');
                        }



                    })

                }}


                render={({ errors, status, touched }) => (



                    <Form className="abc" style={{

                        marginTop: '10px',
                        overflow: 'hidden',
                        marginLeft: '200px',
                        marginRight: '200px',
                        padding: '0',

                    }}>
                        <h3 className="text-center">Book Darshan Slot</h3>

                        <p align="right" >
                            <button style={{ marginRight: '20px' }} onClick={this.logout} className="btn btn-primary">Logout</button></p>

                        <div className="form-group">
                            <label htmlFor="templeName">Temple Name</label>
                            <Field name="templeName" type="text" className={'form-control' + (errors.templeName && touched.templeName ? ' is-invalid' : '')} readOnly />
                            <ErrorMessage name="templeName" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="passDate">Pass Date</label>
                            <Field name="passDate" type="date" className={'form-control' + (errors.passDate && touched.passDate ? ' is-invalid' : '')} readOnly />
                            <ErrorMessage name="passDate" component="div" className="invalid-feedback" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="slot">Slot Timing</label>
                            <Field name="slot" type="text" className={'form-control' + (errors.slot && touched.slot ? ' is-invalid' : '')} readOnly />
                            <ErrorMessage name="slot" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="available">Available</label>
                            <Field name="available" type="text" className={'form-control' + (errors.available && touched.available ? ' is-invalid' : '')} readOnly />
                            <ErrorMessage name="available" component="div" className="invalid-feedback" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="peoples">Number Of Peoples</label>
                            <Field name="peoples" type="text" className={'form-control' + (errors.peoples && touched.peoples ? ' is-invalid' : '')} placeholder="Max. 5 peoples" />
                            <ErrorMessage name="peoples" component="div" className="invalid-feedback" />
                        </div>

                        <div className="form-group">
                            <button type="submit" style={{ marginRight: '20px', marginTop: '12px' }} className="btn btn-primary mr-2">Confirm Booking</button>
                            <a style={{ marginRight: '20px', marginTop: '12px' }} class="btn btn-primary" href="/devotee-scope" role="button">Home</a>

                        </div>
                    </Form>

                )}
            />
        )
    }
}

export default BookEpassComponent;