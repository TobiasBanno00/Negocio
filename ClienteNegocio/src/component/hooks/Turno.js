import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
import "../../style/turno.css"

function Turno({setearTurno}) {
  return (
    <div className='contenedorTurno'>
        <a className='botonCerrar' onClick={setearTurno} ><AiOutlineClose/></a>
        <h2>Pide tu turno!</h2>
        <input className="entradaTurno" name='Patente' type="text" placeholder='Patente automor'/>
        <input className="entradaTurno" name='NombreApellido' type="text" placeholder='Nombre y Apellido'/>
        <input className="entradaTurno" name='celular' type="text" placeholder='Celular'/> 
        <textarea className="entradaSolicitud" name="solicitud" placeholder='¿Para que desea el turno?'></textarea>
        <a className='botonEnviar'  >Enviar</a>
    </div>

  )
}

export default Turno