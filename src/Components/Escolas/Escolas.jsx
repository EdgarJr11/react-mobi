import React from 'react'
import { useState } from 'react'
import './Escolas.css'

const [list, setList] = useState()
const Escolas = () => {

const listagem = async () =>{

  
  try{
    const list = await api.get('https://apiteste.mobieduca.me/api/escolas')
    listagem()

  }
  catch{

  }
}

  return (
    <div>
      <form>
        <input type="text" />
        <button>
          Buscar
        </button>
      </form>
    </div>
  )
}

export default Escolas