import Button from '@mui/material/Button';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import './Login.css';
import api from '../../Routes/api';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const fazerLogin = async () => {
    try {
      const response = await api.post("/api/login/run", {
        "email":username,
        "senha":password ,
      });
      navigate('/Home')
      
    } catch (error) {
      alert('Erro de login')
    }
  };

  return (
    <div className='container'>
      <form className='box' onSubmit={(e) => e.preventDefault()}>
        <div className='input'>
          <TextField 
            variant="outlined"
            label="Email"
            type="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className='input'>
          <TextField 
            variant="outlined"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <Button 
            variant="outlined" 
            onClick={fazerLogin} 
            className='btn-login'
          >
            ENTRAR
          </Button>
        </div>

      </form>
    </div>
  );
};

export default Login; 