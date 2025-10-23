import React, { useState } from 'react'
import api from '../../Routes/api'
import { useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'

const Cadastrar = () => {
  const [escola, setEscola] = useState("")
  const [diretor, setDiretor] = useState("")
  const [cidade, setCidade] = useState("")
  const [localizacao, setLocalizacao] = useState("")
  const [turno, setTurno] = useState("")
  const [loading, setLoading] = useState(false)


  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
        setLoading(true)
      const body = {
        nome: escola,
        cidade_id: cidade,
        localizacao: localizacao,
        turnos: [turno],
        diretor: diretor,
      }

      const response = await api.post("/api/escolas", body)
      console.log("Escola cadastrada:", response.data)
      alert("Cadastro realizado com sucesso!")

    } catch (error) {
      alert("Erro")
    }
    finally
    {
        setLoading(false)
    }
  }

  return (
    <div className="container">
      <form className="box-cadastro" onSubmit={handleSubmit}>
        <div className="input-escola">
          <TextField
            label="Nome da escola"
            variant="outlined"
            fullWidth
            value={escola}
            onChange={(e) => setEscola(e.target.value)}
            required
          />
        </div>

        <div className="input-diretor">
          <TextField
            label="Diretor"
            variant="outlined"
            fullWidth
            value={diretor}
            onChange={(e) => setDiretor(e.target.value)}
          />
        </div>

        <div className="input-cidade">
          <TextField
            label="Cidade ID"
            variant="outlined"
            fullWidth
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            required
          />
        </div>

        <div className="input-localizacao">
          <TextField
            select
            label="Localização"
            variant="outlined"
            fullWidth
            value={localizacao}
            onChange={(e) => setLocalizacao(e.target.value)}
            required

          >
        <MenuItem value="1">1</MenuItem>
        <MenuItem value="2">2</MenuItem>

        </TextField>
 
        </div>

        <div className="input-turno">
          <TextField
            select
            label="Turno"
            variant="outlined"
            fullWidth
            value={turno}
            onChange={(e) => setTurno(e.target.value)}
            required
          >
            <MenuItem value="M">Manhã</MenuItem>
            <MenuItem value="T">Tarde</MenuItem>
            <MenuItem value="N">Noite</MenuItem>
          </TextField>
        </div>

        <button className="button-cad" type="submit" disabled={loading}>
          {loading ? 'Carregando...': 'Cadastrar'}
        </button>
      </form>
    </div>
  )
}

export default Cadastrar
