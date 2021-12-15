import React from 'react'
import socialIcon01 from '../../Images/ico_naver.png';
import socialIcon02 from '../../Images/ico_kakao.png';
import login_bn from '../../Images/login_banner.png';
import '../../Css/default.css';
import '../../Css/register.css';
import Head from '..//Head.js';
import Footer from '../Footer';
import { Link } from 'react-router-dom';


function RegisterForm() {
    return (
        <div>
            <Head></Head>
            <form>
                <div className='register_wrap'>
                    <p className='register_title'>회원가입</p>
                    <div className='social_login2'>
                        <p>SNS계정으로 간편 로그인/회원가입</p>
                        <div className='social_2'>
                            <Link to='#' className='sns-icon social_link sns-naver'><img src={socialIcon01} alt=''/></Link>
                            <Link to='#' className='sns-icon social_link sns-kakao'><img src={socialIcon02} alt=''/></Link>
                        </div>
                        <div className='login_banner'>
                            <Link to='#'><img src={login_bn} alt=''/></Link>
                        </div>
                    </div>
                    <div className='social_bottom_line'></div>

                    <div className='register_box'>
                        <div className='email_1'>
                            <p>이메일</p>
                            <div className='email_box'>
                                <input type='text' name='mb_email_f' className='email_write write_box_style' placeholder='이메일'></input> @ 
                                <select name='mb_email_s' id='select' className='select write_box_style'>
                                    <option value=''>선택해주세요</option>
                                    <option value='naver.com'>naver.com</option>
                                    <option value='gmail.com'>gmail.com</option>
                                    <option value='daum.net'>daum.net</option>
                                    <option value='hotmail.com'>hotmail.com</option>
                                    <option value='nate.com'>nate.com</option>
                                </select>
                            </div>
                        </div>

                        <div className='pw_2'>
                            <p>비밀번호</p>
                            <span>8자 이상 입력해주세요.</span>
                            <input type='password' name='mb_password' id='reg_mb_password' className='pw_2_box write_box_style' placeholder='비밀번호'></input>
                        </div>

                        <div className='pw_ok_3'>
                            <p>비밀번호 확인</p>            
                            <input type='password' name='mb_password_re' id='reg_mb_password_re' className='pw_ok_3_box write_box_style' placeholder='비밀번호 확인'></input>
                        </div>

                        <div className='nickname_4'>
                            <p>별명</p>
                            <span>다른 유저와 겹치지 않는 별명을 입력해주세요. (2~15자)</span>
                            <input type='hidden' name='mb_nick_default' defaultValue=''></input>               
                            <input type='text' name='mb_nick' defaultValue='' id='reg_mb_nick' className='nickname_4_box write_box_style' placeholder='별명 (2~15자)' required></input>
                        </div>

                        <div className='agree_5'>
                            <p>약관동의</p>
                            <div className='agree_box'>
                                <div className='all_agree'>
                                    <input type='checkbox' id='all_click' className='checkbox_1 checkbox_com'></input>
                                    <label htmlFor='all_click' className='ck_view'></label>
                                    <span className='all_agree2'>전체동의</span>
                                </div>
                                <div className='all_agree3'>
                                    <div>
                                        <input type='checkbox' id='click_1' className='checkbox checkbox_com'></input>
                                        <label htmlFor='click_1' className='ck_view'></label>
                                        <span className='all_agree4'>만 14세 이상입니다.</span>
                                        <span className='on_1'>(필수)</span>
                                    </div>
                                    <div>
                                        <input type='checkbox' id='click_2' className='checkbox checkbox_com'></input>
                                        <label htmlFor='click_2' className='ck_view'></label>
                                        <span className='all_agree4'><a href='https://www.naver.com/'>이용약관</a></span>
                                        <span className='on_1'>(필수)</span>
                                    </div>
                                    <div>
                                        <input type='checkbox' id='click_3' className='checkbox checkbox_com'></input>
                                        <label htmlFor='click_3' className='ck_view'></label>
                                        <span className='all_agree4'><a href='https://www.naver.com/'>개인정보수집 및 이용동의</a></span>
                                        <span className='on_1'>(필수)</span>
                                    </div>
                                    <div>
                                        <input type='checkbox' id='click_4' className='checkbox checkbox_com'></input>
                                        <label htmlFor='click_4' className='ck_view'></label>
                                        <span className='all_agree4'>이벤트, 프로모션 알림 메일 및 SMS 수신</span>
                                        <span className='on_2'>(선택)</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='register_btn'>
                            <input type='submit' value='회원가입 완료' id='btn_submit' className='register_btn2 btn_submit'></input>
                        </div>

                        <div className='register_etc'>
                            <span>이미 아이디가 있으신가요?</span>
                            <Link to='/login'>로그인</Link>
                        </div>
                    </div>
                </div>
            </form>
            <Footer></Footer>
        </div>
    )
}

export default RegisterForm;
