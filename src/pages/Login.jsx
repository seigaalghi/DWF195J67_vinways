import React, { Fragment, useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Background from '../components/auth/Background';
import { AppContext } from '../context/appContext';

const Login = () => {
  const [state, dispatch] = useContext(AppContext);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: 'LOGIN',
      payload: formData,
    });
  };

  const link = {
    name: 'Register',
    to: '/register',
    form: 'Login',
  };

  const form = (
    <Fragment>
      <form onSubmit={submitHandler}>
        <input type='text' value={formData.email} required onChange={changeHandler} name='email' className='input' placeholder='Email' />
        <input type='password' value={formData.password} required onChange={changeHandler} name='password' className='input' placeholder='Password' />
        <input type='submit' value='Login' className='btn btn-big' />
      </form>
    </Fragment>
  );

  if (state.isLogin) {
    return <Redirect to='/' />;
  }

  return (
    <Fragment>
      <Background form={form} link={link} />
    </Fragment>
  );
};

export default Login;
