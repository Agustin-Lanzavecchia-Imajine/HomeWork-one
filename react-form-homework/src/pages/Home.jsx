import { Nav, Form, Button, Row, Container } from 'react-bootstrap';
import Logo from '../assets/images/Logo.svg';
import Circle from '../assets/images/Circle-bg.svg';

function Home() {
  return (
    <>
      <Nav className='m-5 flex justify-content-between'>
        <Nav.Item>
          <Nav.Link href='#'>
            <img src={Logo} alt='Imajine Logo' />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='#'>
            <Button>Logout</Button>
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <div className='top_circle d-flex justify-content-end'>
        <img src={Circle} alt='Imajine Logo' />
      </div>
      <Container className=' login_text_container'>
        <h5>You logged in successfully!!</h5>
      </Container>

      <div className='bottom_circle d-flex justify-content-end '>
        <img src={Circle} alt='Imajine Logo' />
      </div>
    </>
  );
}

export default Home;
