import CartWidget from "../CartWidget/CartWidget"
const NavBar = () => {
    return (
        <nav>
            <h1>Bienvenidos a <small class="text-body-secondary">__ElectroMax</small></h1>
            <div>
            <button type="button" class="btn btn-primary">Discos SSD</button>
            <button type="button" class="btn btn-danger">Memorias Ram</button>
            <button type="button" class="btn btn-primary">Audifonos</button>
            <button type="button" class="btn btn-danger">Teclados</button>   
            
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar