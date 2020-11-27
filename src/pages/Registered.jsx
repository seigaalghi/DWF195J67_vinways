import React, { Fragment, useContext } from 'react';
import Home from './Home';
import ListTrans from './ListTrans';
import Payment from './Payment';
import AddArtist from './AddArtist';
import AddMusic from './AddMusic';
import Navbar from '../components/navbar/Navbar';
import PrivateRoute from '../components/PrivateRoute';
import AdminRoute from '../components/AdminRoute';
import MusicPlayer from '../components/home/MusicPlayer';
import { AppContext } from '../context/appContext';
import Playlist from './Playlist';

const Registered = () => {
  const [state] = useContext(AppContext);
  return (
    <Fragment>
      <Navbar />
      <PrivateRoute path='/' exact component={Home} />
      <PrivateRoute path='/payment' exact component={Payment} />
      <PrivateRoute path='/playlist/' exact component={Playlist} />
      <AdminRoute path='/list-trans' exact component={ListTrans} />
      <AdminRoute path='/add-music' exact component={AddMusic} />
      <AdminRoute path='/add-artist' exact component={AddArtist} />
      {state.player.isOpen ? <MusicPlayer /> : null}
    </Fragment>
  );
};

export default Registered;
