import "../../style/servicios.css"
import Servicio from './Servicio'

function Servicios()
{
    let infoServicio1={
        num:'1',
        titulo:'Servis generales',
        servicio:'Cambio de aceite de motor, filtro de aire, filtro de aceite, filtro de combustible, bujías de encendido, entre otras cosas.'
    };

    let infoServicio2={
        num:'2',
        titulo:'Diagnósticos',
        servicio:'Chequeo que nos ayuda a identificar una falla en específico o situaciones anormales en el carro.'
    };

    let infoServicio3={
        num:'3',
        titulo:'Reparación general',
        servicio:'Reparación motor, electricidad general, tren delantero, tren trasero y escape.'
    };

    return(
        <div className="contenedorTotal" >
            <h2 className="subtituloServicios">Nuestros servicios</h2>
            <div className="contenedor-servicios">
                <img class="logo-servicios" src={require(`../../assets/img/hombre.png`)} alt='reparacion' />
                <div className="lista-servicio">
                    <Servicio info={infoServicio1}/>

                    <Servicio info={infoServicio2}/>

                    <Servicio info={infoServicio3}/>
                    </div>
                </div>
            </div>
    )
}

export default Servicios;