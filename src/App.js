import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/authentication/Login';
import Register from './components/authentication/Register';
import UserProfile from './components/user/UserProfile';
import UserHub from './components/user/UserHub';
import Error from './components/error/Error';
import ResponseApiError from './components/error/ResponseApiError';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import Home from './components/index/Home';
import AppBar from './components/header/AppBar';

function App() {

  const [refresh, setRefresh] = useState(false)

  const { isLoggedIn, role } = useSelector(state => state.authorization)

  const dispatch = useDispatch()

  const history = useHistory()

  useEffect(() => {

    // const refresh = async (userId) => {

    //   await dispatch(refreshUser(userId, history))

    //   setRefresh(prev => !prev)
    // }

    // const userId = localStorage.getItem('userId')

    // if (userId) {

    //   refresh(userId)
    // }
  }, [])

  useEffect(() => {

    console.log("Refresh")
  }, [refresh])

  return (
    <Router>
      <div className="App">
        <AppBar isLoggedIn={isLoggedIn} role={role}/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/register' component={Register}/>
          <Route exact path='/user-profile' component={UserProfile}/>
          <Route exact path='/user-hub' component={UserHub}/>
          <Route exact path='/response-api-error' component={ResponseApiError}/>
          <Route exact path='/error' component={Error}/>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
