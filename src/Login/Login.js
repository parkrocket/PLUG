import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [mbId, setMbId] = useState('');
  const [mbPass, setMbPass] = useState('');

  const mbIdHandler = (e) => {
    setMbId(e.target.value);
  };
  const mbPassHandler = (e) => {
    setMbPass(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    let data = { mb_id: mbId, mb_pass: mbPass };
    axios
      .post('http://175.125.95.182:4000/login', data)
      .then((res) => {
        console.log(res);
      })
      .catch();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <h2>{mbId}</h2>
        <input type="text" name="mb_id" defaultValue="" onChange={mbIdHandler}></input>
        <input type="password" name="mb_pass" defaultValue="" onChange={mbPassHandler}></input>
        <input type="submit" defaultValue="로그인"></input>
      </form>
    </div>
  );
};

export default Login;
