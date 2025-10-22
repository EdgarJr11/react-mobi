import React from 'react'
import api from '../../Routes/api';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

const Cadastrar = () =>{
    const [escola, setEscola] = useState("")
    const [diretor, setDiretor] = useState("")
    const [cidade,setCidade] = useState("")
    const [localizacao, setLocalizacao] = useState("")
}

const handleSubmit = (e) =>{
    e.preventDefault()
    }
const Cadastro = () => {
    

  return (
    <div className='container'>
        <form className='box-cadastro' onSubmit={handleSubmit}>
            <div className='input-escola'>
                <TextField
                    variant="outlined"

                />
            </div>
            <div className='input-diretor'>
                <TextField
                    variant="outlined"
                />
        
            </div>
             <div className='input-cidade'>
                <TextField
                    variant="outlined"

            
                />
            </div> 
             <div className='input-localizacao'>
                <TextField
                    variant="outlined"
            
                />
            </div> 
             <div className='input-turno'>
                <TextField
                    variant="outlined"
            
                />
            </div> 

            <button className='button-cad' 
            variant="outlined" 
            >
                CADASTRAR
            
            </button>  
        </form>
    </div>


  )
}



export default Cadastro