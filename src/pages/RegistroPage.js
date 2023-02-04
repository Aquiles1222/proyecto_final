import React from "react";
import Registro from "../components/Registro";
import NavbarContain from "../components/navbar";
import Footer from "../components/footer";



function RegistroPage() {
  return (
    <>
      <div>
        <NavbarContain />
        <Registro />
        <Footer />
      </div>
    </>
  );
}

export default RegistroPage;