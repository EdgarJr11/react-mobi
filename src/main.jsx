import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import Login from './Components/Login/Login.jsx'
import Escolas from './Components/Escolas/Escolas.jsx'
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
      }
    ]
  }
])  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
