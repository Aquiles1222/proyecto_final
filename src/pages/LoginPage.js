import React from 'react';
import NavbarContain from '../components/navbar';
import Login from '../components/Login';
import Footer from '../components/footer';



function LoginPage() {
  return (
    <div className="Login">
      <NavbarContain/>
      <Login/>  
      <Footer/>  
    </div>
    

  );
}

export default LoginPage;