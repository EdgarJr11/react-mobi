import React, { useState, useEffect } from 'react';
import api from '../../Routes/api';
import './Escolas.css';
import { TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const Escolas = () => {
  const [todasEscolas, setTodasEscolas] = useState([]);
  const [cidades, setCidades] = useState([]);
  const [nomeBusca, setNomeBusca] = useState("");
  const [cidadeSelecionada, setCidadeSelecionada] = useState("");
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const buscarEscolas = async () => {
    setLoading(true)
    try {
      const response = await api.get('https://apiteste.mobieduca.me/api/escolas');
      const dados = response.data.data || response.data.escolas || response.data;

      console.log(response.data)
      const cidadesUnicas = [...new Set(dados.map(escola => escola.cidade))];
      setCidades(cidadesUnicas.sort());
    } catch (erro) {
      console.error("Erro ao buscar escolas:", erro);
    }finally
    {
      setLoading(false)
    }

  };
const cadastroEscolas = () =>{
    navigate('/Cadastro')
  } 

    //useEffect(() => {
   // buscarEscolas();
  //}, []);

  return (

    <div className='container'>
      <div className='box-escolas'>

        <button onClick={cadastroEscolas}> 
            CRIAR NOVA ESCOLA
        </button>
        <h1>Listagem de Escolas </h1>

        <div className="barra-filtros">
          <div className="input">
            <TextField
              label="Pesquisar por nome"
              variant="outlined"
              value={nomeBusca}
              onChange={(e) => setNomeBusca(e.target.value)}
              fullWidth
            />
          </div>

          <div className="input">
            <FormControl fullWidth>
              <InputLabel id="filtro-cidade-label">Filtrar por Cidade</InputLabel>
              <Select
                labelId="filtro-cidade-label"
                label="Filtrar por Cidade"
                value={cidadeSelecionada}
                onChange={(e) => setCidadeSelecionada(e.target.value)}
              >
                <MenuItem value="">
                  <em>Todas as Cidades</em>
                </MenuItem>
                {cidades.map(cidade => (
                  <MenuItem key={cidade} value={cidade}>
                    {cidade}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>

        <button onClick={buscarEscolas}  disabled={loading}>
          {loading ? 'Buscando...': 'Buscar'}
        </button>
      </div>
    </div>
  );
};

export default Escolas;