import Button from '@mui/material/Button';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import './Login.css';
import api from '../../Routes/api';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const fazerLogin = async () => {
    setLoading(true)

    try {
      const response = await api.post("/api/login/run", {
        "email":username,
        "senha":password ,
      });
      navigate('/Escolas')
      
    } catch (error) {
      alert('Erro de login')
    }finally
    {
        setLoading(false)
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
            disabled={loading}

          />
        </div>

        <div className='input'>
          <TextField 
            variant="outlined"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
          />
        </div>

        <div>
          <Button 
            variant="outlined" 
            onClick={fazerLogin} 
            disabled={loading}
            className='btn-login'
          >
            {loading ? 'Carregando...' : 'Entrar'}
          </Button>
        </div>

      </form>
    </div>
  );
};

export default Login; 