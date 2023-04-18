import React, { Component } from 'react';
import UserService from '../services/UserService';
import TempleService from '../services/TempleService';
import TimeSlotService from '../services/TimeSlotService';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


class EpassComponent extends Component {



    book() {
                    
        this.props.history.push('/devotee-verification');
      }

    render() {
        const epassData = window.localStorage.getItem('epassByPassId');
        const epassresponse = JSON.parse(epassData);
        console.log('In epass'+epassresponse.peoples);

        return (
            <Formik
                initialValues={{

                    templeName: epassresponse.templeName,
                    passId: epassresponse.passId,
                    passDate: epassresponse.passDate,
                    slot: epassresponse.slot,
                    peoples: epassresponse.peoples,
                    
                }}
                validationSchema={Yup.object().shape({
                    templeName: Yup.string()
                        .required('Temple Name is required'),
                        passId: Yup.string()
                        .required('Pass ID is required'),
                        passDate: Yup.string()
                        .required('Pass Date is required'),
                        slot: Yup.string()
                        .required('Slot is required'),
                        people: Yup.string()
                        .required('Peoples are required'),
                    

                })}

                


                onSubmit={fields => {
                    console.log('Button Clicked');
                    this.props.history.push('/devotee-verification');
                  
                }}
                render={({ errors, status, touched }) => (
                    <Form style={{

                        marginTop: '10px',
                        overflow: 'hidden',
                        marginLeft: '50px',
                        marginRight: '50px',
                        padding: '0',

                    }}>
                        <h4 className="text-center">Epass Details</h4>

                        
                            <div className="form-group">
                                 <label htmlFor="Templename">Temple Name</label>
                                <Field name="templeName" type="text" className={'form-control' + (errors.templeName && touched.templeName ? ' is-invalid' : '')} readOnly/>
                                <ErrorMessage name="templeName" component="div" className="invalid-feedback" />
                            </div>

                        <div className="form-group">
                            <label htmlFor="passId"> Pass ID</label>
                            <Field name="passId" type="text" className={'form-control' + (errors.passId && touched.passId ? ' is-invalid' : '')} readOnly/>
                            <ErrorMessage name="passId" component="div" className="invalid-feedback" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="passDate">Pass Date</label>
                            <Field name="passDate" type="text" className={'form-control' + (errors.passDate && touched.passDate ? ' is-invalid' : '')} readOnly/>
                            <ErrorMessage name="passDate" component="div" className="invalid-feedback" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="slot">Slot</label>
                            <Field name="slot" type="text" className={'form-control' + (errors.slot && touched.slot ? ' is-invalid' : '')} readOnly/>
                            <ErrorMessage name="slot" component="div" className="invalid-feedback" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="peoples">People</label>
                            <Field name="peoples" type="text" className={'form-control' + (errors.peoples && touched.peoples ? ' is-invalid' : '')} readOnly/>
                            <ErrorMessage name="peoples" component="div" className="invalid-feedback" />
                        </div>

                        <div className="form-group" style={{ marginRight: '20px', marginTop: '12px' }}>
                         <a style={{ marginRight: '20px' }}  class="btn btn-primary" href="/devotee-verification" role="button">Confirm</a>
                         <a class="btn btn-primary" href="/temple-scope" role="button">Home</a>
                        </div>
                        
                    </Form>
                )}
            />
        )
    }
}

export default EpassComponent;