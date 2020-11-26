import React, { Fragment, useState, useContext } from 'react';
import Background from '../components/auth/Background';
import { AppContext } from '../context/appContext';

const Register = () => {
  const [state, dispatch] = useContext(AppContext);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullname: '',
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: 'REGISTER',
      payload: formData,
    });
  };

  const link = {
    name: 'Login',
    to: '/login',
    form: 'Register',
  };

  const form = (
    <Fragment>
      <form onSubmit={submitHandler}>
        <input type='text' value={formData.email} required onChange={changeHandler} name='email' className='input' placeholder='Email' />
        <input type='password' value={formData.password} required onChange={changeHandler} name='password' className='input' placeholder='Passowrd' />
        <input type='text' value={formData.fullname} required onChange={changeHandler} name='fullname' className='input' placeholder='Full Name' />
        <input type='submit' value='Register' className='btn btn-big' />
      </form>
    </Fragment>
  );

  return (
    <Fragment>
      <Background form={form} link={link} />
    </Fragment>
  );
};

export default Register;