import { Form, Button, Row, Container } from 'react-bootstrap';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import Input from './Input';
import * as yup from 'yup';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const initialValues = {
    email: '',
    name: '',
    lastname: '',
    password: '',
    phoneNumber: '',
  };

  const onSubmit = () => {
    navigate('/home');
  };

  return (
    <>
      <NavBar></NavBar>

      <Row className='justify-content-center align-items-center'>
        <Formik
          onSubmit={onSubmit}
          initialValues={{ ...initialValues }}
          validationSchema={yup.object({
            email: yup
              .string('must be a string')
              .email('enter a valid email')
              .required('this field is required'),
            name: yup.string('must be a string').required('this field is required'),
            lastname: yup.string('must be a string').required('this field is required'),
            password: yup.string('must be a string').required('this field is required'),
            phoneNumber: yup
              .string('must be a string')

              .required('this field is required'),
          })}
        >
          {({ values, errors, touched, isValid, setFieldValue, handleChange, handleSubmit }) => {
            return (
              <Form
                className='m-5  w-50  p-4  d-flex flex-column  align-items-center'
                onSubmit={handleSubmit}
              >
                <Form.Label className='fs-5 w-100'>Register</Form.Label>
                <Form.Group className='mb-4 mt-2 w-100' controlId='formBasicEmail'>
                  <Input
                    name={'email'}
                    value={values.email}
                    error={errors.email}
                    placeholder={'Email'}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className='mb-4 w-100' controlId='formBasicPassword'>
                  <Input
                    name={'name'}
                    value={values.name}
                    error={errors.name}
                    placeholder={'Name'}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className='mb-4 w-100' controlId='formBasicPassword'>
                  <Input
                    name={'lastname'}
                    value={values.lastname}
                    error={errors.lastname}
                    placeholder={'Lastname'}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className='mb-4 w-100' controlId='formBasicPassword'>
                  <Input
                    name={'password'}
                    value={values.password}
                    error={errors.password}
                    placeholder={'Password'}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className='mb-4 w-100' controlId='formBasicPassword'>
                  <Input
                    name={'phoneNumber'}
                    value={values.phoneNumber}
                    error={errors.phoneNumber}
                    placeholder={'Phone number'}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Container className='text-center'>
                  <Form.Label className='fs-5 mt-4 mb-4'>
                    <Link to='/login' className='m-3'>
                      I already have an account
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
      </Row>
    </>
  );
}

export default Register;
