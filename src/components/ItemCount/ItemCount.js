
import { useState } from "react"

const ItemCount = ({stock,initial,onAdd})=>{
    const [quantity, setQuantity]= useState(initial)

    const increment = () => {
        if(quantity < stock){
            setQuantity(quantity+1)
        }
    }

const decrement = () =>{
    if(quantity > 1) {
        setQuantity(quantity - 1)
}
}

return(
    <div className='Counter'>
        <div className='Controls'>
        <button type="button" class="btn btn-primary" onClick={decrement}>-</button>
            
            <h4 className='Number'>{quantity}</h4>
            <button type="button" class="btn btn-primary" onClick={increment}>+</button>
            
        </div>
    <div>
            <button class="btn btn-danger" onClick={() => onAdd(quantity)} disabled={!stock}>
                Agregar al carro
            </button>
        </div>
        </div>
)

}

export default ItemCount;