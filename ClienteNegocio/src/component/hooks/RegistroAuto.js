import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
import "../../style/registroAuto.css"

function RegistroAuto({setearRegAuto}) {
  return (
    <div className='contenedorRegistro'>
        <a className='botonCerrar' onClick={setearRegAuto} ><AiOutlineClose/></a>
        <h4>Registra tu automovil</h4>
        <input className="entradaRegistro" name='Patente' type="text" placeholder='Patente'/>
        <input className="entradaRegistro" name='Marca' type="text" placeholder='Marca'/>
        <input className="entradaRegistro" name='Modelo' type="text" placeholder='Modelo'/> 
        <input className="entradaRegistro" name='Año' type="text" placeholder='Año fabricación'/>
        <input className="entradaRegistro" name='Km' type="text" placeholder='Km actuales'/>
        <a className='enviarRegistro'>Enviar</a>
    </div>
  )
}

export default RegistroAuto