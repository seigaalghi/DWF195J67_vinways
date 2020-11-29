import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import PopUp from './components/PopUp';
import Login from './pages/Login';
import Register from './pages/Register';
import Registered from './pages/Registered';
import { AppContextProvider } from './context/appContext';
import NotFound from './pages/NotFound';

function App() {
  return (
    <AppContextProvider>
      <Router>
        <div className='App'>
          <PopUp />
          <Switch>
            <Route path='/login' exact component={Login} />
            <Route path='/register' exact component={Register} />
            <Registered />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </AppContextProvider>
  );
}

export default App;
