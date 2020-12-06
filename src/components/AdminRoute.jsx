import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const AdminRoute = ({ component: Component, auth, ...rest }) => {
  if (!auth.user) {
    return <Redirect to='/' />;
  }
  return <Route {...rest} render={(props) => (auth.user.premium && auth.isAuthenticated ? <Component {...props} /> : <Redirect to='/' />)} />;
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(AdminRoute);
