import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/homePage';
import QuienesSomosPage from './pages/QuienesSomosPage';
import ContactoPage from './pages/ContactoPage';
import MenuPage from './pages/MenuPage';
import LoginPage from './pages/LoginPage';
import ErrorPage from './pages/errorPage';
import RegistroPage from './pages/RegistroPage';



const router = createBrowserRouter([
  {
  path:"/",
  element:<HomePage />,
},
{
  path:"/QuienesSomos",
  element:<QuienesSomosPage/>,
},
{
  path:"/Contacto",
  element:<ContactoPage/>,
},
{
  path:"/Menu",
  element:<MenuPage/>,  
},
{
  path:"/Login",
  element:<LoginPage/>,  
},
{
  path:"/Registro",
  element:<RegistroPage/>,
},
{
  path:"*",
  element:<ErrorPage/>,
}


]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
