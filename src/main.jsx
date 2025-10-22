import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import Login from './Components/Login/Login.jsx'
import Escolas from './Components/Escolas/Escolas.jsx'
import Cadastro from './Components/Cadastro/Cadastro.jsx'

const router = createBrowserRouter([
  { 
    element: <App/>,
    children: [
      {
        path:'/',
        element: <Login/>
      },
      {
        path:'Escolas',
        element:<Escolas/>
      },
      {
        path:'Cadastro',
        element:<Cadastro/>
      }
      
    ]
  }
])  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
