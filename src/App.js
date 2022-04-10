
import './App.css';
import './components/NavBar/NavBar.js';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContanier from './components/ItemListContanier/ItemListContanier.js';
import Item from './components/Item/Item';




function App() {
  
  return (
    <div className="App">
      <NavBar/>     
      <Item greeting='Bievenido a Nuestra Tienda' />
      <ItemListContanier/>
     </div>
  );
}

export default App;
