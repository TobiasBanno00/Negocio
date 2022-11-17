import React , {useState}from 'react'
import "../../style/infoAuto.css"
import {AiOutlineSearch} from "react-icons/ai";

function InfoAuto() {

    const [patente,setPatente] = useState('')
    const handleChange = e => {
       
        setPatente(e.target.value) 
        console.log(patente)
      }

  return (
    <div className='contenedor-info'>
        <h4 className='info-titulo'> Ingrese el número de patente de su vehículo</h4>
        <div className='contenedor-busqueda'>
            <AiOutlineSearch/>
            <input  onChange={handleChange} className="entradaBusqueda"  name='patente' type="text" />
            <button type='submit' className='info-boton'>Buscar</button>
        </div>
        
        {/* PONER ESTO EN COMPONENTE  
    <table id="customers">       
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
      
            </tr>
        </thead>
    </table> */}

    </div>
  )
}

export default InfoAuto