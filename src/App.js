
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
function App() {
  return (
    <div className="App">
     <NavBar/>
     <ItemListContainer greeting ={"Buena Compra"}/>
     <ItemCount initial={1} stock={20} onadd={(quantity) => console.log('cantidad agregada',quantity)}/>
     </div>
  );
}

export default App;
