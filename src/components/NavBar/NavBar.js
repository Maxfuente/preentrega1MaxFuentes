import { Link,} from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
const NavBar = () => {
    return (
        <nav class="navbar navbar-dark bg-dark">
        <Link to='/'>
            <h1 style={{ color: 'red' }}>Bienvenidos a <small style={{ color: 'red' }}>___ElectroMax</small></h1>
            </Link>
            <div>
                <Link to='/'> <button type="button" class="btn btn-primary">Discos SSD</button></Link>
            <Link to ='/'> <button type="button" class="btn btn-danger">Memorias Ram</button></Link>
            <Link to ='/'><button type="button" class="btn btn-primary">Audifonos</button></Link>
            <Link to ='/'><button type="button" class="btn btn-danger">Teclados</button></Link>
            
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar