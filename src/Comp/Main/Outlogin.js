import React from 'react'
import { Link } from 'react-router-dom';

function Outlogin() {
    return (
        <div className='bn_side'>
            <div id='ol_before' className='ol'>
                <div>
                    <p className='top_txt'>로그인 후 더욱 편리하게 이용하세요</p>
                    <p className='login'><Link to="/login">로그인</Link></p>
                    <p className='join'><a href='#!'>회원가입</a></p>
                    <p className='pw_lost'><a href='#!'>비밀번호찾기</a></p>
                </div>
            </div>
        </div>
    )
}
export default Outlogin;
