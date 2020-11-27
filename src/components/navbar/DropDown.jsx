import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/appContext';

const DropDown = () => {
  const [state, dispatch] = useContext(AppContext);

  const [open, setOpen] = useState(false);

  const logout = () => {
    dispatch({
      type: 'LOGOUT',
    });
  };
  console.log(state);
  return (
    <div className='dropdown-container'>
      <div className='dropdown' onClick={() => setOpen(!open)} onMouseLeave={() => setOpen(false)}>
        <div className='nav-user'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKJDaIp-Y7qVXGu6LTeoxAiaRdJAJhp9z0yw&usqp=CAU' className='user' alt='avatar' />
        </div>
        {open ? (
          state.user.admin ? (
            <div className='drop'>
              <Link to='/playlist' className='dropdown-menu'>
                Playlist <i className='fas fa-play-circle'></i>
              </Link>
              <Link to='/add-music' className='dropdown-menu'>
                Add Music <i className='fas fa-file-audio'></i>
              </Link>
              <Link to='/add-artist' className='dropdown-menu'>
                Add Artist <i className='fas fa-user-plus'></i>
              </Link>
              <Link to='/list-trans' className='dropdown-menu'>
                Purchase(s) <i className='fas fa-comment-dollar'></i>
              </Link>
              <div onClick={logout} className='dropdown-menu'>
                Log Out <i className='fas fa-sign-out-alt' />
              </div>
            </div>
          ) : !state.user.premium ? (
            <div className='drop'>
              <Link to='/playlist' className='dropdown-menu'>
                Playlist <i className='fas fa-play-circle'></i>
              </Link>
              <Link to='/payment' className='dropdown-menu'>
                Pay <i className='fas fa-comment-dollar'></i>
              </Link>
              <div onClick={logout} className='dropdown-menu'>
                Log Out <i className='fas fa-sign-out-alt' />
              </div>
            </div>
          ) : (
            <div className='drop'>
              <div onClick={logout} className='dropdown-menu'>
                Log Out <i className='fas fa-sign-out-alt' />
              </div>
            </div>
          )
        ) : null}
      </div>
    </div>
  );
};

export default DropDown;
