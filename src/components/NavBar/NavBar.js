import './NavBar.css';
import CartWidget from './CartWidget/CartWidget.js'

const NavBar = () =>{
    return(
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
  <div className='container-fluid'>
    <a className='navbar-brand' href='index.html'><img className='logoNav' src='./images/logo.png' alt='Logo PoliCoffe'></img>Poli Coffe</a>
    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarText' aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className='navbar-toggler-icon'/>
    </button>
    <div className='collapse navbar-collapse' id='navbarText'>
      <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
        <li className='nav-item'>
          <a className='nav-link active' aria-current='page' href='#'>Categoria 1</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link active' href='#'>Categoria 2</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link active' href='#'>Categoria 3</a>
        </li>
      </ul>
    </div>
    <button className='CartWidget'><CartWidget/></button>
  </div>
</nav>
    )
}
export default NavBar
