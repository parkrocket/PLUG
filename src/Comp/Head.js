import React from 'react';
import searchIcon from '../Images/search_icon.png';
import '../Css/default.css';
import '../Css/comp.css';

function Head(){
    return (
        <div className='Head'>
            <div className='top_pop_bg'>
                <div className='top_pop'>
                    <p>회원가입하고 맥북 받으실래요?</p>
                    <div className='close top_pop_close'>
                        <div className='line line01'></div>
                        <div className='line line02'></div>
                        <div className='line line03'></div>
                    </div>
                </div>
            </div>
            <div className='head_header'>
                <div className='header_bg'>
                    <div className='search_bar_wrap'>
                        <div className='h_top_wrap'>
                            <h1 className='logo'><a href='#!'><img src='' alt='로고'/></a></h1>
                            <form name='fsearchbox' method='get' action='#!'>
                                <input type='hidden' name='sfl' value='wr_subject||wr_content||wr_3'/>
                                <input type='hidden' name='sop' value='and'/>
                                <label htmlFor='sch_stx' className='sound_only'>검색어 필수</label>	
                                <input type='search' name='stx' id='sch_stx' placeholder='찾으시는 스포츠가 있으신가요?'/>
                                <button  type='submit' id='sch_submit'><img src={searchIcon} alt='검색'/></button>
                                <button type='reset' className='s_close'>취소</button>
                            </form>
                        </div>
                        <div className='search_more_bg'></div>
                        <div className='more_bg_in'></div>
                        <div className='search_more_wrap'>
                            <div className='search_more'>
                            
                            </div>
                        </div>
                    </div>
                    <div className='more'> 
                        <div className='more_btn'>
                            <div className='btn'></div>
                            <p className='btn_text'>빠른 연결</p>
                        </div>
                        <ul> 
                        
                            <li className='on'>
                                <a href='#' data='' className='change_ud'><img src='' alt=''/><p></p></a>
                                <span className='icon_bg'></span>
                            </li>
                
                        </ul>
                    </div>
                </div>
                <div className='nav'>
                    <div className='menu_wrap' id="gnb">
                        <div className='select'>
                            <div className='selected'>
                                <img src='' alt=''/>
                                <span>
                                    카테고리
                                </span>
                            </div>
                            <div className='option shadow-sm'>
                            
                                <a href='' className='change_ud' data=''>
                                    <div className=''>
                                    </div>
                                </a>
                            
                            </div>
                        </div>  

                        <ul id='gnb_1dul' className='menu'>
                            <li className='gnb_1dli'><a href='' className='gnb_1da'>커뮤니티</a></li>
                            <li className='gnb_1dli'><a href='' className='gnb_1da'>동호회</a></li>
                            <li className='gnb_1dli'><a href='' className='gnb_1da'>중고마켓</a></li>
                            <li className='gnb_1dli'><a href='' className='gnb_1da'>번개모임</a></li>
                            <li className='gnb_1dli'><a href='' className='gnb_1da'>플러그맵</a></li>
                            <li className='gnb_1dli'><a href='' className='gnb_1da'>이벤트</a></li>
                        </ul>

                        <ul className='hd_login'>
                            {/* <li><a href='#!'>마이페이지</a></li>
                            <li><a href='#!'>로그아웃</a></li>
                            <li className='tnb_admin'><a href='#!'>관리자</a></li> */}
                            <li><a href='#!'>회원가입</a></li>
                            <li><a href='#!'>로그인</a></li>
                            <li className='write_btn'>
                                <button className='write_drop'>글쓰기</button>
                            </li>
                        </ul>  
                    </div>	
                </div>
            </div>
        </div>
    );
}

export default Head;