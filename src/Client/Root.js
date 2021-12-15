import React from 'react';
import App from '../App.js';
import Login from '../Comp/Login/Login.js';
import RegisterForm from '../Comp/Register/RegisterForm.js';
import Aroot from '../Admin/Root.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App></App>}></Route>
        <Route exact path="/admin" element={<Aroot name="park"></Aroot>}></Route>
        <Route exact path="/login" element={<Login></Login>}></Route>
        <Route exact path="/registerform" element={<RegisterForm></RegisterForm>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
