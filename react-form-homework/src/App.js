import Register from './pages/Register';
import Login from './pages/Login';
import PasswordRecovery from './pages/Password-recovery';
import PasswordReset from './pages/Password-reset';
import Home from './pages/Home';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Register></Register>
      </div>
    </BrowserRouter>
  );
}

export default App;
