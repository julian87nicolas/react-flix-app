// Libraries
import { Routes, Route } from 'react-router-dom';

// Components
import Login from './Components/Login';
import Listado from './Components/Listado';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Detalle from './Components/Detalle';
import Resultados from './Components/Resultados';

// Styles
import "./css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path = "/" element={<Login />}/>
        <Route path = '/listado' element={<Listado />}/>
        <Route path = '/detalle' element={<Detalle />}/>
        <Route path = '/resultados' element={<Resultados />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
