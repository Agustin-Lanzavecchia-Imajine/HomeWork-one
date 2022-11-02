import { Nav, Form, Button, Row, Container } from 'react-bootstrap';
import Logo from '../assets/images/Logo.svg';
import Circle from '../assets/images/Circle-bg.svg';
import { Routes, Route, Link } from 'react-router-dom';
function Register() {
  return (
    <>
      <Nav className='m-5'>
        <Nav.Item>
          <Nav.Link href='#'>
            <img src={Logo} alt='Imajine Logo' />
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <div className='top_circle d-flex justify-content-end '></div>

      <Row className='justify-content-center align-items-center'>
        <Form className='m-5  w-50  p-4  d-flex flex-column  align-items-center'>
          <Form.Label className='fs-5 w-100'>Register</Form.Label>
          <Form.Group className='mb-4 mt-2 w-100' controlId='formBasicEmail'>
            <Form.Control type='email' placeholder='Email' />
            {/* <Form.Text className='text-muted'>
                We'll never share your email with anyone else.
              </Form.Text> */}
          </Form.Group>
          <Form.Group className='mb-4 w-100' controlId='formBasicPassword'>
            <Form.Control type='text' placeholder='Name' />
          </Form.Group>
          <Form.Group className='mb-4 w-100' controlId='formBasicPassword'>
            <Form.Control type='text' placeholder='Lastname' />
          </Form.Group>
          <Form.Group className='mb-4 w-100' controlId='formBasicPassword'>
            <Form.Control type='password' placeholder='Password' />
          </Form.Group>
          <Form.Group className='mb-4 w-100' controlId='formBasicPassword'>
            <Form.Control type='text' placeholder='Phone number' />
          </Form.Group>
          <Container className='text-center'>
            <Form.Label className='fs-5 mt-4 mb-4'>
              <a href='#' className='acount_not_needed_text'>
                {' '}
                I already have an account
              </a>
            </Form.Label>
          </Container>

          <Button className='w-75 submit_button  mt-3 ' variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </Row>
      <div className='bottom_circle d-flex justify-content-end '></div>
    </>
  );
}

export default Register;
