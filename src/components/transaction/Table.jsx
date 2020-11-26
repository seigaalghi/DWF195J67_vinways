import React, { Fragment } from 'react';

const Table = ({ headers, users }) => {
  return (
    <Fragment>
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            if (user.payment) {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
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
                    <button className='btn bg-danger'>Cancle</button>
                  </td>
                </tr>
              );
            } else {
              return null;
            }
          })}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Table;
