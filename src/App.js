import logo from './logo.svg';
import { Switch, Route, NavLink } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Temperature from './Pages//Temperature/Temperature';
import Customize from './Pages/Customize/Customize';

function App() {
  return (
    <div className="App">
      <nav className="navBar">
      <NavLink className="logoLink" exact to="/">Home</NavLink>
      <NavLink className="logoLink" exact to="/temperature">Temperature</NavLink>
      <NavLink className="logoLink" exact to="/customize-image">Customize image</NavLink>
      </nav>

      <div className="mainPage">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/temperature'  component={Temperature}/>
          <Route exact path='/customize-image'  component={Customize}/>
        </Switch>

      </div>
      
    </div>
  );
}

export default App;
