import { Nav } from 'react-bootstrap';
import Logo from '../assets/images/Logo.svg';

function NavBar() {
  return (
    <>
      <Nav className='m-5'>
        <Nav.Item>
          <Nav.Link href='#'>
            <img src={Logo} alt='Imajine Logo' />
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default NavBar;
