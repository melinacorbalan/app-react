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
          <Route exact path="/unlugardepelicula/tours" element={<Tours />} />
          <Route exact path="/unlugardepelicula/categorias/:idCategoria" element={<Tours />} />
          <Route exact path="/unlugardepelicula/detalle/:idTour" element={<ItemDetailContainer />} />
          <Route exact path="/unlugardepelicula/contact" element={<Contacto />} />
          <Route exact path="/unlugardepelicula/cart" element={<Cart />} />
          <Route exact path="/unlugardepelicula/checkout" element={<Checkout />} />
        </Routes>
      </CartContextProvider>

    </>

  );
}

export default App;
