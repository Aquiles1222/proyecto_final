import React from 'react';
import '../css/LoginPage.css';
import Login from '../components/Login';
import NavbarContain from "../components/navbar";
import Footer from "../components/footer";
import ContactoPageBody from "../components/ContactoPageBody";


function LoginPage() {
  return (
    <div>
        <NavbarContain/>
        <ContactoPageBody/>
        <Footer/>
    </div>
    <div className="Login">
      <Login/>    
    </div>
  );
}

export default LoginPage;