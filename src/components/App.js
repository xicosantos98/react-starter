import React from 'react';

import '../styles/main.css';
import logo from '../assets/logo.png';

export default function App() {
  return (
    <div className='content'>
      <div className='box'>
        <img src={logo} className='logo' alt='logo' />
        <h1 className='title'>Welcome to React Starter</h1>
      </div>
    </div>
  );
}
