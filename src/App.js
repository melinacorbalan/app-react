import { Route, Routes } from 'react-router';
import Cart from './pages/Cart';
import Contacto from './pages/Contacto';
import Home from './pages/Home';
import Locaciones from './pages/Locaciones';
import Peliculas from './pages/Peliculas';
import Tours from './pages/Tours';


function App() {

  return (

    <>
      <Routes>
        <Route path="/" element={<Home greeting="Descubre donde se filmaron tus peliculas favoritas!" />} />
        <Route path="/peliculas" element={<Peliculas />} />
        <Route path="/locaciones" element={<Locaciones />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/contact" element={<Contacto />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
  
    </>

  );
}

export default App;
