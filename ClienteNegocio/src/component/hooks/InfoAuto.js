import React from 'react'
import "../../style/infoAuto.css"

function InfoAuto() {
  return (
    <div className='contenedor-info'>
        <h2> Ingrese el número de patente de su vehículo</h2>
        <input className="entradaBusqueda"  name='patente' type="text" />

    </div>
  )
}

export default InfoAuto