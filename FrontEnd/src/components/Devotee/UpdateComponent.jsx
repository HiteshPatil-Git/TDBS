import React, { Component } from 'react';
import UserService from '../../services/UserService';
import TempleService from '../../services/TempleService';
import TimeSlotService from '../../services/TimeSlotService';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


class UpdateComponent extends Component {

    render() {
        const userData = window.localStorage.getItem('user');
        const response = JSON.parse(userData);
        console.log('In update user');

        return (
            <Formik
                initialValues={{

                    templeName: response.templeName,
                    name: response.name,
                    email: response.email,
                    mobNo: response.mobNo,
                    adharNo: response.adharNo,
                    address: response.address,
                    password: response.password,
                    role: 'TempleAdmin'

                }}
                validationSchema={Yup.object().shape({
                    templeName: Yup.string()
                        .required('Temple Name is required'),
                    name: Yup.string()
                        .required('Temple Admin Name is required'),
                    email: Yup.string()
                        .email('Email is invalid')
                        .required('Email is required'),
                    mobNo: Yup.string()
                        .min(10, 'please enter valid number')
                        .required('Mob No is required'),
                    adharNo: Yup.string()
                        .min(10, 'please enter valid adhar number')
                        .required('Adhar No is required'),
                    address: Yup.string()
                        .required('Address is required'),
                    
                    password: Yup.string()
                        .min(6, 'Password must be at least 6 characters')
                        .required('Password is required'),
                    role: Yup.string()
                        .required('Role is required'),

                })}


                onSubmit={fields => {
                    console.log('Button Clicked');

                    if (response.role === 'TempleAdmin') {
                        TempleService.updateTemple(fields, response.templeId).then(updatedresponse => {
                            console.log(updatedresponse);
                            if (updatedresponse === null){
                                alert('Not Updated!! :-)')
                            }
                            else {
                                this.props.history.push('/temple-scope');
                            alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                            }
                            
                        })

                    }
                    else {
                        UserService.updateUser(fields, response.userId).then(updatedresponse => {
                            console.log(updatedresponse);
                            if (updatedresponse == null){
                                alert('Not Updated!! :-)')
                            }
                            else {
                                this.props.history.push('/devotee-scope');
                            alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                            }
                            })
                    }
                }}
                render={({ errors, status, touched }) => (
                    <Form style={{

                        marginTop: '10px',
                        overflow: 'hidden',
                        marginLeft: '50px',
                        marginRight: '50px',
                        padding: '0',

                    }}>
                        <h4 className="text-center">Update Profile</h4>

                        {response.role === 'TempleAdmin' ? 
                            <div className="form-group">
                                 <label htmlFor="Templename">Temple Name</label>
                                <Field name="templeName" type="text" className={'form-control' + (errors.templeName && touched.templeName ? ' is-invalid' : '')} />
                                <ErrorMessage name="templeName" component="div" className="invalid-feedback" />
                            </div>: ''}

                        <div className="form-group">
                            <label htmlFor="name"> Name</label>
                            <Field name="name" type="text" className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} />
                            <ErrorMessage name="name" component="div" className="invalid-feedback" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="mobNo">Mobile No</label>
                            <Field name="mobNo" type="mobNo" className={'form-control' + (errors.mobNo && touched.mobNo ? ' is-invalid' : '')} />
                            <ErrorMessage name="mobNo" component="div" className="invalid-feedback" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <Field name="email" type="email" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="adharNo">Aadhar No</label>
                            <Field name="adharNo" type="text" className={'form-control' + (errors.adharNo && touched.adharNo ? ' is-invalid' : '')} readOnly/>
                            <ErrorMessage name="adharNo" component="div" className="invalid-feedback" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <Field name="address" type="text" className={'form-control' + (errors.address && touched.address ? ' is-invalid' : '')} />
                            <ErrorMessage name="address" component="div" className="invalid-feedback" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Field name="password" type="text" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="role">Role</label>
                            <Field name="role" type="text" className={'form-control' + (errors.role && touched.role ? ' is-invalid' : '')} readOnly/>
                            <ErrorMessage name="role" component="div" className="invalid-feedback" />
                        </div>


                        <div className="form-group" style={{ marginRight: '20px', marginTop: '12px' }}>
                            <button type="submit" style={{ marginRight: '20px', marginTop: '12px' }} className="btn btn-primary mr-2">Register</button>
                            <span>
                                <button style={{ marginRight: '20px', marginTop: '12px' }} type="reset" className="btn btn-secondary mr-2">Reset</button>
                            </span>
                            {response.role === 'TempleAdmin' 
                            ?
                            <a style={{ marginRight: '20px', marginTop: '12px' }} class="btn btn-primary"   href="/temple-scope" role="button">Home</a>
                            : <a style={{ marginRight: '20px', marginTop: '12px' }} class="btn btn-primary"   href="/devotee-scope" role="button">Home</a>
                            }

                        </div>
                    </Form>
                )}
            />
        )
    }
}

export default UpdateComponent;