import React, { Fragment, useState } from 'react';
import Background from './Background';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const link = {
    name: 'Register',
    to: '/register',
    form: 'Login',
  };

  const form = (
    <Fragment>
      <form onSubmit={submitHandler}>
        <input type='text' value={formData.email} required onChange={changeHandler} name='email' className='input' />
        <input type='password' value={formData.password} required onChange={changeHandler} name='password' className='input' />
        <input type='submit' value='Login' className='btn btn-big' />
      </form>
    </Fragment>
  );

  return (
    <Fragment>
      <Background form={form} link={link} />
    </Fragment>
  );
};

export default Login;
