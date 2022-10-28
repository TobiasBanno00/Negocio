import './App.css';
import Header from './component/layout/Header.js'
import Footer from './component/layout/Footer'
import Inicio from './component/layout/Inicio'
import Servicios from './component/layout/Servicios'
import Contacto from './component/layout/Contacto'
import Turno from './component/hooks/Turno'
import RegistroAuto from './component/hooks/RegistroAuto'
import InfoAuto from './component/hooks/InfoAuto'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"; /* Routes=switch */
import { useState } from 'react';

function App() {


    /* Abrir formulario turno */
    let compTurno
    let [turno, setTurno] = useState(false)
    let setearTurno=()=>{ turno?setTurno(turno=false):setTurno(turno=true)}
    if(turno){compTurno= <Turno setearTurno={setearTurno} />}

    /* Abrir formulario registro vehiculo */
    let compRegAuto
    let [regAuto, setRegAuto] = useState(false)
    let setearRegAuto=()=>{ regAuto?setRegAuto(turno=false):setRegAuto(turno=true)}
    if(regAuto){compRegAuto= <RegistroAuto setearRegAuto={setearRegAuto} />}

  return (
    <>
     <Router>
      <Header  setearTurno={setearTurno} setearRegAuto={setearRegAuto}/>
        <Routes>
          <Route path='/' exact element={<Inicio/>} />
          <Route path='/servicios'  element={<Servicios/>} />
          <Route path='/contacto'  element={<Contacto/>} />
          <Route path='/informacion'  element={<InfoAuto/>} />

        </Routes>
        {compTurno}
        {compRegAuto}
      <Footer/>
    </Router>

    </>
  );
}

export default App;
