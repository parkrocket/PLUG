import React, { useEffect, useState } from 'react';
import Admin from './Admin';
import Login from '../Comp/Login/Login.js';
import { useNavigate } from 'react-router-dom';

const Root = (props) => {
  const [Auth] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    if (Auth === false) {
      navigate('/login');
    }
  }, [Auth,navigate]);

  return <div>{Auth ? <Admin></Admin> : <Login></Login>}</div>;
};

export default Root;
