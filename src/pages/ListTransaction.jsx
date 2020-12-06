import React, { Fragment, useContext } from 'react';
import Table from '../components/transaction/Table';
import { AppContext } from '../context/appContext';

const ListTrans = () => {
  const [state, dispatch] = useContext(AppContext);
  const headers = ['ID', 'Users', 'Bukti Transfer', 'Remaining Active', 'Status User', 'Status Payment', 'Action'];
  return (
    <Fragment>
      <div className='transaction'>
        <h1>Incoming Transaction</h1>
        <Table users={state.users} headers={headers} dispatch={dispatch} />
      </div>
    </Fragment>
  );
};

export default ListTrans;
