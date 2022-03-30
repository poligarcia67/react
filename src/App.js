import logo from './logo.svg';
import './App.css';
import './components/NavBar/NavBar.js';
import NavBar from './components/NavBar/NavBar.js';
import ItemListener from './components/ItemListContanier/ItemListContanier.js'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListener greeting='Bievenido a Nuestra Tienda' />
     </div>
  );
}

export default App;
