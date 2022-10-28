import React, {useState} from 'react'
import { AiOutlineClose } from "react-icons/ai";
import "../../style/registroAuto.css"



function RegistroAuto({setearRegAuto}) {

  const [vehiculo,setVehiculo] = useState({
    patente: '',
    marca: '',
    modelo: '',
    año: 0,
    km: 0
  })

  const handleChange = e => {
    setVehiculo({
        ...vehiculo,
        [e.target.name]: e.target.value
        
    })
    console.log(vehiculo)
  }

  const handleSubmit = () => {
    //validación de los datos
    if (vehiculo.patente === '' || vehiculo.marca === '' || vehiculo.modelo === '' ||vehiculo.año === 0 || vehiculo.km === 0 ) {
        alert('Todos los campos son obligatorios')
        return
    }

    //consulta
    const requestInit = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(vehiculo)
    }
    fetch('http://localhost:3001/api/vehiculos/', requestInit)
    .then(res => res.text())
    .then(res => console.log(res))

    //reiniciando state de libro
    setVehiculo({
      patente: '',
      marca: '',
      modelo: '',
      año: 0,
      km: 0
    })

}

  return (
    <form onSubmit={handleSubmit} className='contenedorRegistro'>
        <a className='botonCerrar' onClick={setearRegAuto} ><AiOutlineClose/></a>
        <h4>Registra tu automovil</h4>
        <input className="entradaRegistro"  onChange={handleChange} name='patente' type="text" placeholder='Patente'/>
        <input className="entradaRegistro"  onChange={handleChange} name='marca' type="text" placeholder='Marca'/>
        <input className="entradaRegistro"  onChange={handleChange} name='modelo' type="text" placeholder='Modelo'/> 
        <input className="entradaRegistro"  onChange={handleChange} name='año' type="text" placeholder='Año fabricación'/>
        <input className="entradaRegistro"  onChange={handleChange} name='km' type="text" placeholder='Km actuales'/>
        <button className='enviarRegistro' type="submit" >Enviar</button>
    </form>
  )
}

export default RegistroAuto