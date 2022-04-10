import './ItemCounter.css'
import { useState, useEffect } from 'react'

const Counter = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(1)
 
    useEffect(() => {
        console.log('cambio el count')
    }, [count])


    const decrement = () => {
        if(count > initial){

         setCount(count - 1)
        }
    }

    const increment = () => {
     if(count < stock){
        setCount(count + 1)
     }
    }

    console.log('Esto esta en el cuerpo del componente')
    return(
        <div className='iCounter'>
            <button className='btn btn-primary' onClick={decrement}>-</button> 
            <p className='itemCount'>{count}</p>
            <button className='btn btn-primary' onClick={increment}>+</button>
            <button className='btn btn-primary addCarrito' onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
} 

export default Counter;
