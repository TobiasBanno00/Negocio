import '../../style/header.css'
import { AiFillHome, AiFillFileText, AiFillEdit,AiFillCar, AiFillMail } from "react-icons/ai";
import React from 'react'
import {Link} from "react-router-dom";
import logo from "../../assets/img/logo1.png"


function Header({setearTurno,setearRegAuto}) {


    
  return (
    <div className="header" >
            <nav className="menu-navegacion">
              <img className='menu-logo' src={logo} alt='logo'/>
                <a className="botones-menu"  href="/"><AiFillHome/>  Inicio</a>
                <a className="botones-menu"  href="/servicios"><AiFillFileText/>  Servicios</a>
                <a className="botones-menu" href="/contacto"><AiFillMail/>  Contacto</a>
                <a className="boton-menu-vehiculo" ><AiFillCar/> Vehiculo</a>
                <nav className='sub-menu-vehiculo'>
                  <a className="botones-sub-menu" onClick={setearRegAuto}>Agregar vehiculo </a>
                  <a className="botones-sub-menu" href="/informacion">Información Vehiculo </a>
                </nav>
                <a className="boton-menu-turno" > <AiFillEdit/>  Turno </a>
                <nav className='sub-menu-turno'>
                  <a className="botones-sub-menu" onClick={setearTurno}>Nuevo Turno</a>
                  <a className="botones-sub-menu">Ver Turnos </a>
                  <a className="botones-sub-menu">Eliminar Turno</a>
                </nav>
            </nav>
    </div>
  )
}

export default Header