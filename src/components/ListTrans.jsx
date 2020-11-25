import React, { Fragment } from 'react';

// JSON IMPORT
import musicList from '../JSON/musicList.json';
import Navbar from './Navbar';

const ListTrans = () => {
  return (
    <Fragment>
      <Navbar />
      <div className='transaction'>
        <h1>Incoming Transaction</h1>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Users</th>
              <th>Bukti Transfer</th>
              <th>Remaining Active</th>
              <th>Status User</th>
              <th>Status Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {musicList.users.map((user, index) => {
              if (user.payment) {
                return (
                  <tr key={user.id}>
                    <td>{index}</td>
                    <td>{user.username}</td>
                    <td>
                      <img src={user.payment} alt='' />
                    </td>
                    <td>{user.premium ? Math.round((new Date(user.until).getTime() - new Date().getTime()) / (60 * 60 * 24 * 1000)) : '0'} Hari</td>
                    <td>{user.premium ? <span className='color-primary'>Active</span> : <span className='color-danger'>Non-Active</span>}</td>
                    <td>
                      {user.premium && user.payment ? (
                        <span className='color-primary'>Approved</span>
                      ) : !user.premium && user.payment && !user.cancel ? (
                        <span className='color-warning'>Pending</span>
                      ) : !user.premium && user.payment && user.cancel ? (
                        <span className='color-danger'>Canceled</span>
                      ) : null}
                    </td>
                    <td>
                      <button className='btn bg-success'>Approve</button>
                      <button className='btn bg-danger'>Deny</button>
                    </td>
                  </tr>
                );
              } else {
                return null;
              }
            })}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default ListTrans;
