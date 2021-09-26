import { BrowserRouter as Router, Route } from 'react-router-dom'
import IngresarJugador from './components/IngresarJugador';
import Inicio from './components/Inicio';
import Juego from './components/Juego';
import Nav from "./components/Nav";
import Puntajes from './components/Puntajes';
import  TemaContext  from "./components/Context/Usecontext";


function App() {
  return (
    <div className="App">
       <TemaContext>
      <Router>

        <Nav />
        <Route path='/' exact component={Inicio}/> 
        <Route path='/usuarionuevo' exact component={IngresarJugador}/> 
        <Route path='/puntajes' exact component={Puntajes}/> 
        <Route path='/jugar' exact component={Juego}/> 
      </Router>
      </TemaContext>
    </div>
  );
}

export default App;
