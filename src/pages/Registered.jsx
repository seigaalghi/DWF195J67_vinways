import React, { Fragment } from 'react';
import Home from './Home';
import ListTrans from './ListTrans';
import Payment from './Payment';
import AddArtist from './AddArtist';
import AddMusic from './AddMusic';
import Navbar from '../components/navbar/Navbar';
import PrivateRoute from '../components/PrivateRoute';
import AdminRoute from '../components/AdminRoute';

const Registered = () => {
  return (
    <Fragment>
      <Navbar />
      <PrivateRoute path='/' exact component={Home} />
      <PrivateRoute path='/payment' exact component={Payment} />
      <AdminRoute path='/list-trans' exact component={ListTrans} />
      <AdminRoute path='/add-music' exact component={AddMusic} />
      <AdminRoute path='/add-artist' exact component={AddArtist} />
    </Fragment>
  );
};

export default Registered;
