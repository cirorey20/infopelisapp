import './App.css';
//import Search from './components/Search';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Modal from './components/Modal';
import Nav from './components/Nav';
import Peliculas from './components/Peliculas';
import Home from './components/Home';

function App() {
  return (
    <div className="fondo-color">
      
      <Router>
        <Route exact path="/" >
          <Nav />
        </Route>
          

        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          
          <Route exact path="/busqueda/:search">
            <Peliculas/>
          </Route>
          <Route exact path="/pelicula/:id">
              <Modal/>
          </Route>
          
        </Switch>
    </Router>
    </div>
  )
}

export default App;
