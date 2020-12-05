import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import PopUp from './components/PopUp';
import Login from './pages/Login';
import Register from './pages/Register';
import Registered from './pages/Registered';
import { AppContextProvider } from './context/appContext';
import NotFound from './pages/NotFound';

// REDUX
import store from './redux/store';
import { Provider } from 'react-redux';
import setAuth from './redux/utility/setAuthToken';
import { loadUser } from './redux/action/auth';
import { useEffect } from 'react';

if (localStorage.token) {
  setAuth(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
