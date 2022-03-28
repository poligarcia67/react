import './NavBar.css'

const NavBar = () =>{
    return(
        <nav>
            <span>
             <div className='tituloMenu'>
                    <img className='logoMarca' src='./images/logo.png' alt='Logo Marca'></img>
                    <h1>Poli Coffe</h1>
             </div>
             <div className='botonera'>
                <button className='boton-Menu'>Categoria 1</button>
                <button className='boton-Menu'>Categoria 2</button>
                <button className='boton-Menu'>Categoria 3</button>
              </div>
            </span>
        </nav>
    )
}
export default NavBar