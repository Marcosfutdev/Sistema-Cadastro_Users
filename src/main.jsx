import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
// pagina de erro
import ErrorPage from './components/errorpage/errorpage.jsx';
// importando páginas da aplicação
import Home from './pages/home/home.jsx';
import Cadastrar from './pages/cadastro/cadastro.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"cadastrar",
        element:<Cadastrar/>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
