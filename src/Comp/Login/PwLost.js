import React from 'react'
import '../../Css/default.css';
import '../../Css/pwLost.css';
import Head from '../Head.js';
import Footer from '../Footer';

function PwLost() {
    return (
        <div>
            <Head></Head>
            <form>
                <div className='body_wrap'>
                    <p className='logo_title'>비밀번호 찾기</p>
                    <div className='input_wrap'>
                        <input type='text' name='mb_email' id='box_1' className='login_box box_1' placeholder='이메일' required/>
                        <div id='captcha' className='captcha'>
                            <legend><label htmlFor='captcha_key'>자동등록방지</label></legend>
                            <img src='http://keysv.cafe24.com/plugin/kcaptcha/kcaptcha_image.php?t=1639542139827' alt='' id='captcha_img'/><input type='text' name='captcha_key' id='captcha_key' className='captcha_box required' required/>
                            <button type='button' id='captcha_reload'><span></span>이미지 새로고침</button>
                            <span id='captcha_info'>자동등록방지 숫자를 순서대로 입력하세요.</span>
                        </div>
                        <input type='submit' value='비밀번호 찾기' className='login_btn'></input>
                    </div>	
                </div>
            </form>
            <Footer></Footer>
        </div>
    )
}

export default PwLost
