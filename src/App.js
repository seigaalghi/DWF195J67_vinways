import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/auth/Login';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/login' exact component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
