import './ItemCounter.css'

const ItemCouonter = ({onAdd,stock, initial,count}) =>{
    return (
        <div>
            <div className='itemCount'>
            <button className='btnadd btn-primary'>-</button>
            <p className='itemCount'>0</p>
            <p className='itemStock'></p>
            <p className='itemInitial'></p>
            <button className='btnadd btn-primary'>+</button>
            </div>
            <button className='addCarrito btn-primary'>Agregar al carrito</button>
        </div>
    )

}

export default ItemCouonter;