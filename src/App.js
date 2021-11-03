import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/authentication/Login';
import Register from './components/authentication/Register';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route exact path='/register' component={Register}/>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
