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
<<<<<<< HEAD
  }, [Auth,navigate]);
=======
  }, [Auth, navigate]);
>>>>>>> 12781f96ab3aa8c81e2d2fc73c54a7d4dc8555b8

  return <div>{Auth ? <Admin></Admin> : <Login></Login>}</div>;
};

export default Root;
