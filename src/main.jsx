import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import Login from './Components/Login/Login.jsx'

const router = createBrowserRouter([
  { 
    element: <App/>,
    children: [
      {
        path:'/',
        element: <Login/>
      },
      {
        path:'Home',
        element:<Home/>
      }
    ]
  }
])  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
