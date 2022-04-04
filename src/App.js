
import './App.css';
import './components/NavBar/NavBar.js';
import NavBar from './components/NavBar/NavBar.js';
import ItemListener from './components/ItemListContanier/ItemListContanier.js';
import Counter from './components/ItemCount/Counter';




function App() {
  
  return (
    <div className="App">
      <NavBar/>
      <ItemListener greeting='Bievenido a Nuestra Tienda' />
      <Counter/>
     </div>
  );
}

export default App;
