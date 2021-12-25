import { Route, Routes } from 'react-router';
import ItemDetailContainer from './components/Container/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import CartContextProvider from './context/cartContext';
import Cart from './routes/Cart';
import Checkout from './routes/Checkout';
import Contacto from './routes/Contacto';
import Home from './routes/Home';
import Tours from './routes/Tours';


function App() {

  return (

    <>
      <CartContextProvider>
        <NavBar />
        <Routes>
          <Route exact path="/unlugardepelicula" element={<Home />} />
          <Route exact path="/tours" element={<Tours />} />
          <Route exact path="/categorias/:idCategoria" element={<Tours />} />
          <Route exact path="/detalle/:idTour" element={<ItemDetailContainer />} />
          <Route exact path="/contact" element={<Contacto />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/checkout" element={<Checkout />} />
        </Routes>
      </CartContextProvider>

    </>

  );
}

export default App;
