import React, { Fragment, useState } from 'react';
import Navbar from './Navbar';

const Payment = () => {
  const [formData, setFormData] = useState({
    accountnumber: '',
    payment: '',
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const fileHandler = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.files[0].name });
  // };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };

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
        <form onSubmit={submitHandler}>
          <input type='text' className='input' placeholder='Input your account number' value={formData.accountnumber} onChange={changeHandler} name='accountnumber' required />
          <label htmlFor='input-file' className='input label-input-file'>
            {formData.payment ? (
              formData.payment
            ) : (
              <Fragment>
                Attache proof of transfer <i className='fas fa-paperclip'></i>
              </Fragment>
            )}

            <input type='file' id='input-file' className='input-file' accept='image/*' value={formData.payment} onChange={changeHandler} name='payment' required />
          </label>

          <input type='submit' className='btn btn-big' />
        </form>
      </div>
    </div>
  );
};

export default Payment;
