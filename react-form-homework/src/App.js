import Register from './pages/Register';
import Login from './pages/Login';
import PasswordRecovery from './pages/Password-recovery';
import PasswordReset from './pages/Password-reset';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Register />} />
        <Route exact path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/recover_password' element={<PasswordRecovery />} />
        <Route path='/reset_password' element={<PasswordReset />} />
      </Routes>
    </>
  );
}

export default App;
