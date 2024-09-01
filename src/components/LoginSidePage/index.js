import React from 'react';
import loginPageImage from '../../assets/images/loginPageImage.png';
import './style.css';

const LoginSidePage = () => {

  return (
    <div className='login-side-div justify-content-center'>
      <img src={loginPageImage} alt='login' className={`login-img`}></img>
    </div>
  );
};

export default LoginSidePage;
