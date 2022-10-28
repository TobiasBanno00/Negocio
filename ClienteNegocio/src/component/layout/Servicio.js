import React from 'react'
import "../../style/servicio.css"


function Servicio({info}) {
    return(
       
        <div class="service">
           <h3 class="n-service"><span class="number">{info.num}</span>{info.titulo}</h3>
           <p className='info-service'> {info.servicio}</p>
       </div>
                   
   
   )
}

export default Servicio