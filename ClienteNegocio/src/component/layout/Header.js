import '../../style/header.css'
import { AiFillHome, AiFillFileText, AiFillEdit,AiFillIdcard, AiFillMail } from "react-icons/ai";
import React from 'react'
import {Link} from "react-router-dom";
import logo from "../../assets/img/logo1.png"

function Header() {
  return (
    <div className="header" >
            <nav className="menu-navegacion">
            <img className='Logo' src={logo} alt='logo'/>
                <a className="botones-Menu"  href="/"><AiFillHome/>  Inicio</a>
                <a className="botones-Menu"  href="/servicios"><AiFillFileText/>  Servicios</a>
                <a className="botones-Menu" href="/contacto"><AiFillMail/>  Contacto</a>
                <a className="botones-Menu-Cliente" href="/nuevoCliente"><AiFillIdcard/>  Cliente Nuevo</a>
                <a className="botones-Menu-Turno" > <AiFillEdit/>  Turno </a>
            </nav>
            </div>
  )
}

export default Header