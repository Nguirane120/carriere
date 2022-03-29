import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Accueil from './components/Dashboard/Accueil';

function App() {
  return (
    <>
   
    <Route path='/register' component={Register}/>
    <Route path='/login' component={Login}/>
    <Route path='/dashboard-admin' component={Dashboard}/>
    <Route path='/accueil-admin' component={Accueil}/>

    </>
  );
}

export default App;
