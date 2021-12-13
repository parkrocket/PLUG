import React, { useEffect, useState } from 'react';
import Admin from './Admin';
import Login from '../Login/Login.js';
import { useNavigate } from 'react-router-dom';

const Root = (props) => {
  const [Auth, setAuth] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    if (Auth === false) {
      navigate('/login');
    }
  }, []);

  return <div>{Auth ? <Admin></Admin> : <Login></Login>}</div>;
};

export default Root;
