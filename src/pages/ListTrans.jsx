import React, { Fragment } from 'react';
import Table from '../components/transaction/Table';

// JSON IMPORT
import musicList from '../JSON/musicList.json';

const ListTrans = () => {
  const headers = ['ID', 'Users', 'Bukti Transfer', 'Remaining Active', 'Status User', 'Status Payment', 'Action'];
  return (
    <Fragment>
      <div className='transaction'>
        <h1>Incoming Transaction</h1>
        <Table users={musicList.users} headers={headers} />
      </div>
    </Fragment>
  );
};

export default ListTrans;
