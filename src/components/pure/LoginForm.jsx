import React from 'react';
import PropTypes from 'prop-types';

import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'


const LoginSchema = Yup.object().shape(
    {
        email: Yup.string()
                    .email('Invalid email format')
                    .required('Email is required'),
        password: Yup.string()
                    .required('Password is required')
    }
)


const LoginForm = ({loged,fetching, onLogin}) => {
    
    const initialCredentials = {
        email: '',
        password: ''
    }
    
    return (
        <Formik // Initial values that the form will take
        initialValues = { initialCredentials }
        // Yup Validation Schema
        validationSchema={LoginSchema}
        // OnSubmit Event
        onSubmit={async (values) => {
            onLogin(values.email, values.password)
  }}
  >
        {/* We obtain props from Formik */}
            {({ values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur }) => (
                    <Form>
                    <label htmlFor="email">Email</label>
                    <Field id="email" type='email' name="email" placeholder="email@example.com" />
                    {/* Email errors */}
                    {
                        errors.email && touched.email && 
                        (
                            // <div className='error'>
                            //     <p>{errors.email} </p>
                            // </div>
                            <ErrorMessage name="email" component='div'/>
                        )
                    }

                    <label htmlFor="password">Password</label>
                    <Field
                        id="password"
                        name="password"
                        placeholder="password"
                        type="password"
                    />
                    {/* Password Errors */}
                    {
                        errors.password && touched.password && 
                        (
                            // <div className='error'>
                            //     <p>{errors.password} </p>
                            // </div>
                            <ErrorMessage name="password" component='div'/>
                        )
                    }

                    <button type="submit">Login</button>
                    {fetching ? (<p>Loading...</p>) : null}
                    {isSubmitting ? (<p>Login your credentials...</p>) : null}
                </Form>
            )
        }
    {/* We obtain props from Formik */}
    </Formik>
    );
};


LoginForm.propTypes = {
    loged: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    onLogin: PropTypes.func.isRequired
};


export default LoginForm;
