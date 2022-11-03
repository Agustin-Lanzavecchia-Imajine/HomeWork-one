import { Form, Button, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
function PasswordRecovery() {
  return (
    <>
      <NavBar></NavBar>
      <Row className='justify-content-center align-items-center  '>
        <Form className='  w-50 mt-5 p-5  d-flex flex-column  align-items-center'>
          <Form.Label className='fs-5 w-100'>Recover Password</Form.Label>
          <Form.Group className='mb-4 mt-2 w-100' controlId='formBasicEmail'>
            <Form.Control type='email' placeholder='Email' />
          </Form.Group>

          <Container className='text-center'>
            <Form.Label className='fs-5 mt-4 mb-4'>
              <Link to='/login' className='m-3'>
                Back to login
              </Link>
            </Form.Label>
          </Container>

          <Button className='w-75 submit_button  mt-3 ' variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </Row>
    </>
  );
}

export default PasswordRecovery;
