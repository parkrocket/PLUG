import React, { useState, useEffect } from 'react';
import axios from 'axios';
import socialIcon01 from '../../Images/ico_naver.png';
import socialIcon02 from '../../Images/ico_kakao.png';
import login_bn from '../../Images/login_banner.png';
import '../../Css/default.css';
import '../../Css/login.css';
import Head from '../Head.js';
import Footer from '../Footer';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [mbId, setMbId] = useState('');
  const [mbPass, setMbPass] = useState('');
  const [logged, setLogged] = useState(window.sessionStorage.getItem('loginResult') || false);

  const navigate = useNavigate();

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
        window.sessionStorage.setItem('loginResult', res.data.loginResult);
        window.sessionStorage.setItem('loginId', res.data.loginData);

        const loginResult = window.sessionStorage.getItem('loginResult');
        //console.log(setLogged);
        setLogged(loginResult);
        console.log(loginResult);
        console.log(logged);
      })
      .catch();
  };

  const loggeds = logged;
  useEffect(() => {
    console.log(loggeds);
    if (loggeds === false) {
      //navigate('/login');
      console.log('로그인안됨');
    } else {
      // navigate('/admin');
      console.log('로그인완료');
    }
  }, []);

  return (
    <div>
      <Head></Head>

      <form onSubmit={submitHandler}>
        <div className="login_wrap">
          <p className="logo_title">로그인</p>
          <div className="input_wrap">
            <input
              type="text"
              name="mb_id"
              id=""
              className="login_box box_1 write_box_style"
              defaultValue=""
              onChange={mbIdHandler}
              placeholder="이메일"
            ></input>
            <input
              type="password"
              name="mb_pass"
              id=""
              className="login_box box_2 write_box_style"
              defaultValue=""
              onChange={mbPassHandler}
              placeholder="비밀번호"
            ></input>
            <input type="submit" value="로그인" className="login_btn"></input>
            <div className="check_email">
              <input
                type="checkbox"
                name="auto_login"
                id="login_auto_login"
                className="checkbox_com"
              ></input>
              <label htmlFor="login_auto_login" className="ck_view"></label>
              <span htmlFor="login_auto_login" className="email_save">
                이메일 저장
              </span>
            </div>
            <p className="or">
              <span className="or_2">또는</span>
            </p>
            <div className="social_login">
              <p>SNS계정으로 간편 로그인/회원가입</p>
              <div className="social">
                <Link to="#" className="sns-icon social_link sns-naver">
                  <img src={socialIcon01} alt="" />
                </Link>
                <Link to="#" className="sns-icon social_link sns-kakao">
                  <img src={socialIcon02} alt="" />
                </Link>
              </div>
              <div className="login_banner">
                <Link to="#">
                  <img src={login_bn} alt="" />
                </Link>
              </div>
              <div className="login_etc">
                <Link to="#">이메일로 가입</Link>
                <Link to="/pwlost">비밀번호 찾기</Link>
              </div>
            </div>
          </div>
        </div>
      </form>

      <Footer></Footer>
    </div>
  );
};

export default Login;
