import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'
const ItemDetail =({id, name, img,category, description, price, stock}) =>{
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">{name}</h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
                </picture>
                <section>
                    <p className="Info">
                        Categoria:{category}
                    </p>
                    <p className="Info">
                        Descripcion :{description}
                    </p>
                    <p className="Info">
                        Precio:{price}
                    </p>
                </section>
                <footer className="Itemfooter">
                    <ItemCount initial={1} stock={20} onadd={(quantity) => console.log('cantidad agregada',quantity)}/> 
                </footer>
                </article>

    )
    
}


export default ItemDetail