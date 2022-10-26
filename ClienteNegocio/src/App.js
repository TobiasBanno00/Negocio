import './App.css';
import Header from './component/layout/Header.js'
import Footer from './component/layout/Footer'
import Inicio from './component/layout/Inicio'
import Servicios from './component/layout/Servicios'
import Contacto from './component/layout/Contacto'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"; /* Routes=switch */

function App() {
  return (
    <>
     <Router>
      <Header />
        <Routes>
          <Route path='/' exact element={<Inicio/>} />
          <Route path='/servicios'  element={<Servicios/>} />
          <Route path='/contacto'  element={<Contacto/>} />
          

        </Routes>
      <Footer/>
    </Router>

    </>
  );
}

export default App;
