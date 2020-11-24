import React from 'react';
import Navbar from './Navbar';

const Payment = () => {
  return (
    <div className='payment-container'>
      <Navbar />
      <div className='payment'>
        <h1>Premium</h1>
        <p>
          Bayar sekarang dan nikmati streaming music yang kekinian dari Co <span className='coways'>Ways</span>
        </p>
        <p>
          Co <span className='coways'>Ways</span> : 0981312323
        </p>
        <form>
          <input type='text' className='input' />
          <label htmlFor='input-file' className='input label-input-file'>
            Attache proof of transfer
            <i className='fas fa-paperclip'></i>
            <input type='file' id='input-file' className='input-file' accept='image/*' />
          </label>

          <input type='submit' className='btn btn-big' />
        </form>
      </div>
    </div>
  );
};

export default Payment;
