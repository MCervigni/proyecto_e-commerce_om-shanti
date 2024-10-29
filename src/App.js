import './App.css';
import NavBar from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a nuestra tienda de elementos para la práctica de yoga"/>
    </>
  );
}

export default App;
