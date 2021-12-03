import { Route, Routes } from 'react-router';
import ItemDetailContainer from './components/Container/ItemDetailContainer';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import CartContextProvider from './context/cartContext';
import Cart from './routes/Cart';
import Contacto from './routes/Contacto';
import Home from './routes/Home';
import Tours from './routes/Tours';


function App() {

  return (

    <>
      <CartContextProvider>
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
      </CartContextProvider>

    </>

  );
}

export default App;
