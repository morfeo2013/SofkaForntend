import { BrowserRouter as Router, Route } from 'react-router-dom'
import IngresarJugador from './components/IngresarJugador';
import Inicio from './components/Inicio';
import Nav from "./components/Nav";
import Puntajes from './components/Puntajes';



function App() {
  return (
    <div className="App">
      <Router>

        <Nav />
        <Route path='/' exact component={Inicio}/> 
        <Route path='/jugar' exact component={IngresarJugador}/> 
        <Route path='/puntajes' exact component={Puntajes}/> 

      </Router>
    </div>
  );
}

export default App;
