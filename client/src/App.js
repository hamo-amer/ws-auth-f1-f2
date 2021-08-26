import { Switch,Route } from 'react-router-dom';
import './App.css';
import LandPage from './pages/LandPage/LandPage'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Profile from './pages/Profile/Profile'
import NavBar from './components/NavBar/NavBar'
import Errors from './pages/Errors'
import PrivateRoute from './router/PrivateRoute';
import {useDispatch} from 'react-redux'
import {useEffect} from 'react'
import { current } from './Redux/actions/userActions';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
 dispatch(current())
  }, [])
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route  exact path='/' component={LandPage} />
        <Route path='/signin' component={Login} />
        <Route path='/signup' component={Register} />
        <PrivateRoute path='/profile' component={Profile} />
        <Route path='/*' component={Errors} />
      </Switch>
    </div>
  );
}

export default App;
