import { Route, Routes } from 'react-router';
import ItemDetailContainer from './components/Container/ItemDetailContainer';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Cart from './pages/Cart';
import Contacto from './pages/Contacto';
import Home from './pages/Home';
import Tours from './pages/Tours';


function App() {

  return (

    <>
    <NavBar />
      <Routes>
        <Route exact path="/" element={<Home greeting="Descubre donde se filmaron tus peliculas y series favoritas!" />} />
        <Route exact path="/tours" element={<Tours />} />
        <Route exact path="/categorias/:idCategoria" element={<Tours />} />
        <Route exact path="/detalle/:idTour" element={<ItemDetailContainer />} />
        <Route exact path="/contact" element={<Contacto />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
  
    </>

  );
}

export default App;
