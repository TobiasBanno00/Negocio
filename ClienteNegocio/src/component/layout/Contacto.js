import React from 'react'
import "../../style/contacto.css"
import {BsFillTelephoneFill, BsWhatsapp} from "react-icons/bs";
import {FaMapMarkerAlt} from "react-icons/fa";

function Contacto() {
  return (

    <div className='contenedorContacto'>
        <h2 className="subtituloContacto">¿Cómo contactarnos?</h2>
        <p className='infoContacto'><h3> <BsFillTelephoneFill/> Teléfono: </h3> 3564587495 </p>
        <p className='infoContacto'><h3><BsWhatsapp/> Wpp: </h3> 3564339058 </p>
        <p className='infoContacto'><h3><FaMapMarkerAlt/> Dirección: </h3> Alma Fuerte 1878, San Fco, Córdoba </p>
    </div>
  )
}

export default Contacto