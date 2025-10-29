import React, { useState, useEffect } from 'react';
import api from '../../Routes/api';
import './Escolas.css';
import { TextField, Select, MenuItem, FormControl, InputLabel, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Escolas = () => {
  const [todasEscolas, setTodasEscolas] = useState([]);
  const [cidades, setCidades] = useState([]);
  const [nomeBusca, setNomeBusca] = useState("");
  const [cidadeSelecionada, setCidadeSelecionada] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    buscarEscolas();
  }, []);

  const buscarEscolas = async () => {
    setLoading(true);
    try {
      const response = await api.get('https://apiteste.mobieduca.me/api/escolas');
      const dados = response.data.data || response.data.escolas || response.data;

      setTodasEscolas(dados);

      const cidadesUnicas = [...new Set(dados.map(escola => escola.cidade))];
      setCidades(cidadesUnicas.sort());
    } catch (erro) {
      console.error("Erro ao buscar escolas:", erro);
    } finally {
      setLoading(false);
    }
  };

  const cadastroEscolas = () => {
    navigate('/Cadastro');
  };

    const escolasFiltradas = todasEscolas.filter((escola) => {
    const matchNome = escola.nome.toLowerCase().includes(nomeBusca.toLowerCase());
    const matchCidade = cidadeSelecionada ? escola.cidade === cidadeSelecionada : true;
    return matchNome && matchCidade;
  });

  return (
    <div className='container'>
      <div className='box-escolas'>
        <div className="top-bar">
          <h1>Listagem de Escolas</h1>
          <div className="botoes">
            <button className="btn-nova" onClick={cadastroEscolas}>Criar Nova Escola</button>
            <button className="btn-buscar" onClick={buscarEscolas} disabled={loading}>
              {loading ? <CircularProgress size={20} color="inherit" /> : 'Atualizar Lista'}
            </button>
          </div>
        </div>

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

        <div className="lista-escolas">
          {loading ? (
            <p>Carregando escolas...</p>
          ) : escolasFiltradas.length > 0 ? (
            escolasFiltradas.map((escola) => (
              <div key={escola.id} className="card-escola">
                <h3>{escola.nome}</h3>
                <p><strong>Cidade:</strong> {escola.cidade?.descricao || 'Não informado'}</p>
                <p><strong>Diretor:</strong> {escola.diretor}</p>
              </div>
            ))
          ) : (
            <p>Nenhuma escola encontrada.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Escolas;
