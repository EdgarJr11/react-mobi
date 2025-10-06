import React from 'react'
import { useState } from 'react'
const Home = () => {

const listagem = async () =>{

const [list, setList] = useState()
  
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

export default Home