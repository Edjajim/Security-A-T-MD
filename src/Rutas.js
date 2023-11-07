import { Routes, Route } from 'react-router-dom';
import Tec from './Tecnologia.js';
import App from './App.js';
import Nosotros from './Nosotros.js';

function Rutas() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='Tecnología' element={<Tec/>}/>
        <Route path='Nosotros' element={<Nosotros/>}/>
      </Routes>
    </div>
  );
}

export default Rutas;
