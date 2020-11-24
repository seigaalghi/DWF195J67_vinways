import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/login' exact component={Login} />
          <Route path='/register' exact component={Register} />
          <Route path='/' exact component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
