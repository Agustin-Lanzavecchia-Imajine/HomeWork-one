import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import NavBar from './NavBar';
import axios from 'axios';
function Home() {
  const [users, setUsers] = useState([]);

  const getUsers = async (values) => {
    const response = await axios({
      method: 'Get',
      url: 'http://localhost:8080/api/users',
      data: { ...values },
    });
    const data = response.data.data.users;
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
    console.log(users);
  }, []);

  return (
    <>
      <NavBar />

      <Container className=' login_text_container'>
        <h3>You logged in successfully!!</h3>
        <h4 className='m-5'>Here we can see the names of the team:</h4>
        {users.map((user) => (
          <div key={Math.floor(Math.random() * 7000)}>
            <p>
              {user.name} {user.lastname}
            </p>{' '}
          </div>
        ))}
      </Container>
    </>
  );
}

export default Home;
