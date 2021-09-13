import React from 'react';
import { Formik, ErrorMessage, Field } from 'formik';
import * as yup from 'yup';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import axios from 'axios';
const apiUrl = 'http://localhost:5000/users';

const signupSchema = yup.object({
  firstName: yup.string().required('Name is required').max(15),
  lastName: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
});
export function Signup() {
  const handleRegister = (values) => {
    axios.post(apiUrl, values).then((res) => {
      alert('Hurrray you signed up');
    });
    console.log('registering user', values);
  };

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      }}
      validationSchema={signupSchema}
      onSubmit={handleRegister}
    >
      {(formik) => {
        return (
          <Form
            style={{
              width: '50%',
              margin: 'auto',
              border: '1px solid',
              padding: '2em',
            }}
            onSubmit={formik.handleSubmit}
          >
            <Form.Text className="text-muted">
              <h1 style={{ border: '1px solid' }} className="text-center">
                Sign Up
              </h1>
            </Form.Text>
            <Form.Group>
              <Form.Label exportstyle={{ margin: 'auto' }}>
                First Name
              </Form.Label>
              <Field
                type="text"
                size="lg"
                className="form-control"
                placeholder="Enter First Name"
                name="firstName"
              />
              <ErrorMessage name={'firstName'}></ErrorMessage>
            </Form.Group>
            <Form.Group>
              <Form.Label exportstyle={{ margin: '0' }}>Last Name</Form.Label>
              <Field
                type="text"
                className="form-control"
                placeholder="Enter Last Name"
                name="lastName"
              />
              <ErrorMessage name={'lastName'}></ErrorMessage>
            </Form.Group>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Field
                type="email"
                className="form-control"
                placeholder="Enter email"
                name="email"
              />
              <ErrorMessage name={'email'}></ErrorMessage>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Field
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
              />
              <ErrorMessage name={'password'}></ErrorMessage>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
}
