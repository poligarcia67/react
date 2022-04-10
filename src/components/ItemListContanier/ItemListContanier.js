import React from 'react'
import { useState } from 'react';
import Counter from '../ItemCount/Counter';

const ItemListContanier = () =>{
  
   const [count, setCount] = useState(1);
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
        <div>
            <Counter onAdd={onAdd} stock={stock} initial={initial} count={count}/>
        </div>
    )
  }
export default ItemListContanier;