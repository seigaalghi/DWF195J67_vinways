import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AddArtist from './components/AddArtist';
import AddMusic from './components/AddMusic';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Home from './components/Home';
import ListTrans from './components/ListTrans';
import Payment from './components/Payment';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/login' exact component={Login} />
          <Route path='/register' exact component={Register} />
          <Route path='/' exact component={Home} />
          <Route path='/payment' exact component={Payment} />
          <Route path='/list-trans' exact component={ListTrans} />
          <Route path='/add-music' exact component={AddMusic} />
          <Route path='/add-artist' exact component={AddArtist} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
