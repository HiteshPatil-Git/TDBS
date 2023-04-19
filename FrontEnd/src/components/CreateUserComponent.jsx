import React, { Component } from 'react';
import UserService from '../services/UserService';


import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
class CreateUserComponent extends Component {

    render() {
        return (
            <Formik
                initialValues={{
                    name : '',
                    email : '',
                    mobNo :'',
                    adharNo :'',
                    address :'',
                    password : '',
                    role : 'Devotee' ,
                   
                   
                }}
                validationSchema={Yup.object().shape({
                    name: Yup.string()
                        .required('First Name is required'),
                  
                    email: Yup.string()
                        .email('Email is invalid')
                        .required('Email is required'),
                    password: Yup.string()
                        .min(6, 'Password must be at least 6 characters')
                        .required('Password is required'),

                      mobNo: Yup.string()
                      .min(10,'please enter valid number')
                        .required('Mob No is required'),

                        adharNo: Yup.string()
                        .min(12,'please enter valid adhar number')
                        .required('Adhar No is required'),

                        address: Yup.string()
                        .required('Address is required'),

                        role: Yup.string()
                        .required('Role is required'),
                        
                    
                })}
                onSubmit={fields => {
                    alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                    
                    UserService.createUser(fields).then(res =>{
                        this.props.history.push('/');
                    })
                }}
                render={({ errors, status, touched }) => (
                    <Form style={{
                       
                        marginTop:'40px',
                        overflow:'hidden',
                        marginLeft: '300px',
                        marginRight:'300px',
                        padding:'0',
                       
                      }}>
                        <h3 className="text-center">Devotee SignUp</h3>
                        <div className="form-group">
                            <label htmlFor="name">First Name</label>
                            <Field name="name" type="text" className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} />
                            <ErrorMessage name="name" component="div" className="invalid-feedback" />
                        </div>
                       
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="mobNo">Mob No</label>
                            <Field name="mobNo" type="number" className={'form-control' + (errors.mobNo && touched.mobNo ? ' is-invalid' : '')} />
                            <ErrorMessage name="mobNo" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="adharNo">Adhar No</label>
                            <Field name="adharNo" type="number" className={'form-control' + (errors.adharNo && touched.adharNo ? ' is-invalid' : '')} />
                            <ErrorMessage name="adharNo" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <Field name="address" type="text" className={'form-control' + (errors.address && touched.address ? ' is-invalid' : '')} />
                            <ErrorMessage name="address" component="div" className="invalid-feedback" />
                        </div>


                        <div className="form-group">
                            <label htmlFor="role">Role</label> 
                            <Field   as="select" name = "role" className={'form-control'} >
                                <option value = "Devotee" selected>Devotee</option>
                                
                            </Field>
                        </div>

                        <div className="form-group">
                            <button type="submit"  style={{ marginRight: '20px', marginTop: '12px' }} className="btn btn-primary mr-2">Register</button>
                            <button type="reset" style={{ marginRight: '20px', marginTop: '12px' }} className="btn btn-secondary">Reset</button>
                        </div>
                    </Form>
                )}
            />
        )
    }
}

export default CreateUserComponent;