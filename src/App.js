import Body from './home/body/Body';
import Header from './home/header/header';
import ListaProductos from './home/listaProductos/ListaProductos';
import Menu from './home/menu/Menu';
import Recomendaciones from './home/recomendaciones/Recomendaciones';
import Topbar from './home/topbar/topbar';

function App() {
  return (
    <div className="App">
       <Topbar/>
       <Header/>
       <Menu/>
       <Body/>
       <Recomendaciones/>
       <ListaProductos/>
    </div>
  );
}

export default App;
