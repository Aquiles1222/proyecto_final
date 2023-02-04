import React from 'react';
import '../css/LoginPage.css';
import NavbarContain from '../components/navbar';
import Login from '../components/Login';



function LoginPage() {
  return (
    <div className="Login">
      <NavbarContain/>
      <Login/>    
    </div>
    

  );
}


export default LoginPage;