import { Route, Redirect } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../context/appContext';

const AdminRoute = ({ component: Component, ...rest }) => {
  const [state] = useContext(AppContext);

  return <Route {...rest} render={(props) => (state.user.admin && state.isLogin ? <Component {...props} /> : <Redirect to='/' />)} />;
};

export default AdminRoute;
