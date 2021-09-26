import { BrowserRouter as Router, Route } from 'react-router-dom'
import IngresarJugador from './components/IngresarJugador';
import Inicio from './components/Inicio';
import Juego from './components/Juego';
import Nav from "./components/Nav";
import Puntajes from './components/Puntajes';



function App() {
  return (
    <div className="App">
      <Router>

        <Nav />
        <Route path='/' exact component={Inicio}/> 
        <Route path='/usuarionuevo' exact component={IngresarJugador}/> 
        <Route path='/puntajes' exact component={Puntajes}/> 
        <Route path='/jugar' exact component={Juego}/> 
      </Router>
    </div>
  );
}

export default App;
