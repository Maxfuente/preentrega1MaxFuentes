import CartWidget from "../CartWidget/CartWidget"
const NavBar = () => {
    return (
        <nav class="navbar navbar-dark bg-dark">
        
            <h1 style={{ color: 'red' }}>Bienvenidos a <small style={{ color: 'red' }}>___ElectroMax</small></h1>
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