import React from 'react';
import { Col, Row, Form, Button, Container } from 'react-bootstrap';
import NavBar from './NavBar';
import axios from 'axios';
import { Link } from 'react-router-dom';

import * as yup from 'yup';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import Input from './Input';

const LoginWFormik = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: '',
  };

  const onSubmit = async (values) => {
    const response = await axios({
      method: 'POST',
      url: 'http://localhost:8080/api/users',
      data: { ...values },
    });
    navigate('/home');
    console.log(response.data);
  };

  return (
    <>
      <NavBar />
      <div className='loginContainer'>
        <div className=' w-50'>
          <Formik
            onSubmit={onSubmit}
            initialValues={{ ...initialValues }}
            validationSchema={yup.object({
              email: yup
                .string('must be a string')
                .email('enter a valid email')
                .required('this field is required'),
            })}
          >
            {({ values, errors, touched, isValid, setFieldValue, handleChange, handleSubmit }) => {
              return (
                <Form onSubmit={handleSubmit}>
                  <Input
                    name={'email'}
                    value={values.email}
                    error={errors.email}
                    placeholder={'Email'}
                    onChange={handleChange}
                  />
                  <Container className='text-center'>
                    <Form.Label className='fs-5 mt-4 mb-4'>
                      <Link to='/recover_password' className='m-3'>
                        Forgot my password
                      </Link>
                    </Form.Label>
                  </Container>
                  <Button
                    className='w-75 submit_button  mt-3 '
                    variant='primary'
                    type='submit'
                    disabled={!isValid}
                  >
                    Submit
                  </Button>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
};
export default LoginWFormik;
