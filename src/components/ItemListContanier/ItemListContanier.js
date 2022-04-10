import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Counter from '../ItemCount/Counter';
import getProductos from '../../utils/getproductos';
import Productos from '../../mock/data';

const ItemListContanier = () =>{
   const [count, setCount] = useState(1);
   const [productos, setProductos] = useState([])
   
   useEffect (() => {
     getProductos().then(Productos => setProductos(Productos)).catch(Error => console.log(Error))
   
   }, [])

   useEffect (()=>{
     console.log (productos)
   }, [productos])


   const stock = 6;
   const initial = 1; 
   const onAdd = (condition) => {
     console.log('hola hice click en add')
      if (condition === '-') {
        setCount(count - 1);
      }
      if (condition === '+') {
        setCount(count + 1);
    }
  }  
    return(
     <div className='cardGneral' >
       {Productos.map((Productos) =>(
        <div className='cardGneral card col-sm-12 col-lg-3'>
          <img src={Productos.imagen} id="img" className="card-img-top " alt="..." />
          <div className="card-body">
           <h5 className="card-title">{Productos.nombre}</h5>
           <p className="card-text">{Productos.descripcion}</p>
           <h3 className="card-text text-slide"> ${Productos.precio}</h3>
          </div>
        
        <div>
          <Counter onAdd={onAdd} stock={stock} initial={initial} count={count}/>
        </div>
       </div>    
       ))} 
     
    </div>
 
    )
  } 
export default ItemListContanier;