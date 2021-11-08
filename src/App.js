import './App.css';
import ItemListContainer from './components/Container/ItemListContainer';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';

function App() {

  return (

    <>
      <div className = "App">
        <NavBar />
        <ItemListContainer />
        <Footer />
      </div>

    </>
  );
}

export default App;
