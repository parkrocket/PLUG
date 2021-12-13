import React from 'react';
import mainBn from './Images/main_bn_bg01.jpg';
import middleBn from './Images/main_middle_bn.jpg';
import './Css/default.css';
import './Css/main.css';

function Main(){
    return (
        <div id='contents' className='main_wrap'>
            <div className='banner'>
                <div className='main_bn'>
                    <div className='bn_list'>
                        <div className='bn_img'><a href='#!'><img src={mainBn} alt=''/></a></div>
                    </div>
                </div>
                <div className='bn_side'>
                    <div id='ol_before' className='ol'>
                        <div>
                            <p className='top_txt'>로그인 후 더욱 편리하게 이용하세요</p>
                            <p className='login'><a href='#!'>로그인</a></p>
                            <p className='join'><a href='#!'>회원가입</a></p>
                            <p className='pw_lost'><a href='#!'>비밀번호찾기</a></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='best_talk_wrap'>
                <div className='title'>
                    <h2>추천글</h2>
                    <a href='#!'>더보기</a>
                </div>
                <div className='best_talk'>
                    <ul>
                        <li>
                            <a href=''>
                                <div className='img'></div>
                                <div className='tit_wrap'>
                                    <p className='tit'>test</p>
                                    <span className='count'>(1)</span>
                                </div>
                                <p className='cont'>testtesttesttesttesttesttesttesttesttesttesttesttest</p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='notice'>
                    <div className='container'>
                        <div className='title'>
                            <h2>인기글</h2>
                            <a href='#!'>더보기</a>
                        </div>
                        <div className='item_wrap'>
                            <div className='item'>
                                <a href='#!'>
                                    <p className='tit'>testtesttesttesttesttesttesttesttesttesttesttesttest</p>
                                    <span className='count'>(2)</span>
                                </a>
                                <span className='time'>21.08.07</span>
                            </div>
                        </div>
                    </div>
                    <div className='container'> 
                        <div className='title'>
                            <h2>최신글</h2>
                            <a href='#!'>더보기</a>
                        </div>			
                        <div className='item_wrap'>
                            <div className='item'>
                                <a href='#!'>
                                    <p className='tit'>testtesttesttesttesttesttesttesttesttesttesttesttest</p>
                                    <span className='count'></span>
                                </a>
                                <span className='time'>21.08.07</span>
                            </div>
                        </div>
                    </div>
                    <div className='container'>
                        <div className='title'>
                            <h2>통합인기글</h2>
                            <a href='#!'>더보기</a>
                        </div>
                        <div className='item_wrap'>
                            <div className='item'>
                                <a href='#!'>
                                    <p className='tit'>testtesttesttesttesttest</p>
                                    <span className='count'>(8)</span>
                                </a>
                                <span className='time'></span>
                            </div>
                            <div className='item'>
                                <a href='#!'>
                                    <p className='tit'>testtesttesttesttesttest</p>
                                    <span className='count'>(8)</span>
                                </a>
                                <span className='time'></span>
                            </div>
                            <div className='item'>
                                <a href='#!'>
                                    <p className='tit'>testtesttesttesttesttest</p>
                                    <span className='count'>(8)</span>
                                </a>
                                <span className='time'></span>
                            </div>
                            <div className='item'>
                                <a href='#!'>
                                    <p className='tit'>testtesttesttesttesttest</p>
                                    <span className='count'>(8)</span>
                                </a>
                                <span className='time'></span>
                            </div>
                            <div className='item'>
                                <a href='#!'>
                                    <p className='tit'>testtesttesttesttesttest</p>
                                    <span className='count'>(8)</span>
                                </a>
                                <span className='time'></span>
                            </div>
                            <div className='item'>
                                <a href='#!'>
                                    <p className='tit'>testtesttesttesttesttest</p>
                                    <span className='count'>(8)</span>
                                </a>
                                <span className='time'></span>
                            </div>
                            <div className='item'>
                                <a href='#!'>
                                    <p className='tit'>testtesttesttesttesttest</p>
                                    <span className='count'>(8)</span>
                                </a>
                                <span className='time'></span>
                            </div>
                            <div className='item'>
                                <a href='#!'>
                                    <p className='tit'>testtesttesttesttesttest</p>
                                    <span className='count'>(8)</span>
                                </a>
                                <span className='time'></span>
                            </div>
                            <div className='item'>
                                <a href='#!'>
                                    <p className='tit'>testtesttesttesttesttest</p>
                                    <span className='count'>(8)</span>
                                </a>
                                <span className='time'></span>
                            </div>
                            <div className='item'>
                                <a href='#!'>
                                    <p className='tit'>testtesttesttesttesttest</p>
                                    <span className='count'>(8)</span>
                                </a>
                                <span className='time'></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='middle_bn'>
                <a href='#!'><img src={middleBn} alt='이벤트 배너'/></a>
            </div>

            <div className='market_wrap'>
                <div className='title'>
                    <h2>중고마켓</h2>
                    <a href='#!'>더보기</a>
                </div>
                <div className='market_item_wrap'>
                    <div className='market_item'>
                        <div className='item_box'>
                            <a href='#!'>
                                <div className='img'></div>
                                <span className='area'></span>
                                <p className='product'></p>
                            </a>
                            <div className='price'>
                                <span className='sell'></span>
                                <span className='free_trade'>무료나눔</span>
                            </div>
                            <div className='tag'>
                                <span>#test</span>
                            </div>
                        </div>
                        <div className='item_box'>
                            <a href='#!'>
                                <div className='img'></div>
                                <span className='area'></span>
                                <p className='product'></p>
                            </a>
                            <div className='price'>
                                <span className='sell'></span>
                                <span className='free_trade'>무료나눔</span>
                            </div>
                            <div className='tag'>
                                <span>#test</span>
                            </div>
                        </div>
                        <div className='item_box'>
                            <a href='#!'>
                                <div className='img'></div>
                                <span className='area'></span>
                                <p className='product'></p>
                            </a>
                            <div className='price'>
                                <span className='sell'></span>
                                <span className='free_trade'>무료나눔</span>
                            </div>
                            <div className='tag'>
                                <span>#test</span>
                            </div>
                        </div>
                        <div className='item_box'>
                            <a href='#!'>
                                <div className='img'></div>
                                <span className='area'></span>
                                <p className='product'></p>
                            </a>
                            <div className='price'>
                                <span className='sell'></span>
                                <span className='free_trade'>무료나눔</span>
                            </div>
                            <div className='tag'>
                                <span>#test</span>
                            </div>
                        </div>
                        <div className='item_box'>
                            <a href='#!'>
                                <div className='img'></div>
                                <span className='area'></span>
                                <p className='product'></p>
                            </a>
                            <div className='price'>
                                <span className='sell'></span>
                                <span className='free_trade'>무료나눔</span>
                            </div>
                            <div className='tag'>
                                <span>#test</span>
                            </div>
                        </div>
                        <div className='item_box'>
                            <a href='#!'>
                                <div className='img'></div>
                                <span className='area'></span>
                                <p className='product'></p>
                            </a>
                            <div className='price'>
                                <span className='sell'></span>
                                <span className='free_trade'>무료나눔</span>
                            </div>
                            <div className='tag'>
                                <span>#test</span>
                            </div>
                        </div>
                        <div className='item_box'>
                            <a href='#!'>
                                <div className='img'></div>
                                <span className='area'></span>
                                <p className='product'></p>
                            </a>
                            <div className='price'>
                                <span className='sell'></span>
                                <span className='free_trade'>무료나눔</span>
                            </div>
                            <div className='tag'>
                                <span>#test</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='club_wrap'>
                <div className='title'>
                    <h2>지금 핫한 동호회</h2>
                    <a href='#!'>더보기</a>
                </div>
                <div className='club'>
                    <div className='club_ul'>
                        <a href='#!' className='club_box'>
                            <div className='img'><img src='' alt=''/></div>
                            <span className='img_bg'></span>
                            <div className='club_tit'>
                                <p className='area_num'>지역/5명</p>
                                <p className='tit'>동호회명</p>
                            </div>
                        </a>
                        <a href='#!' className='club_box'>
                            <div className='img'><img src='' alt=''/></div>
                            <span className='img_bg'></span>
                            <div className='club_tit'>
                                <p className='area_num'>지역/5명</p>
                                <p className='tit'>동호회명</p>
                            </div>
                        </a>
                        <a href='#!' className='club_box'>
                            <div className='img'><img src='' alt=''/></div>
                            <span className='img_bg'></span>
                            <div className='club_tit'>
                                <p className='area_num'>지역/5명</p>
                                <p className='tit'>동호회명</p>
                            </div>
                        </a>
                        <a href='#!' className='club_box'>
                            <div className='img'><img src='' alt=''/></div>
                            <span className='img_bg'></span>
                            <div className='club_tit'>
                                <p className='area_num'>지역/5명</p>
                                <p className='tit'>동호회명</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div className='event_wrap'>
                <div className='title'>
                    <h2>이벤트</h2>
                    <a href='<?= G5_BBS_URL ?>/board.php?bo_table=event'>더보기</a>
                </div>
                <div className='event_list'>
                    <div className='event_item'>
                        <a href='#!'>
                            <div className='event_bn'><img src='' alt=''/></div>
                            <div className='event_info'>
                                <div className='td_datetime'>
                                    2021.11.09 - 2021.11.13
                                </div>
                                <div className='td_subject'>
                                
                                    <a href='#!' className='bo_cate_link'></a>
                                    
                                    <div className='bo_tit'>
                                        <a href='#!'>
                                            이벤트 제목
                                        </a>
                                        <span className='new_icon'>N<span className='sound_only'>새글</span></span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='event_item'>
                        <a href='#!'>
                            <div className='event_bn'><img src='' alt=''/></div>
                            <div className='event_info'>
                                <div className='td_datetime'>
                                    2021.11.09 - 2021.11.13
                                </div>
                                <div className='td_subject'>
                                
                                    <a href='#!' className='bo_cate_link'></a>
                                    
                                    <div className='bo_tit'>
                                        <a href='#!'>
                                            이벤트 제목
                                        </a>
                                        <span className='new_icon'>N<span className='sound_only'>새글</span></span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='event_item'>
                        <a href='#!'>
                            <div className='event_bn'><img src='' alt=''/></div>
                            <div className='event_info'>
                                <div className='td_datetime'>
                                    2021.11.09 - 2021.11.13
                                </div>
                                <div className='td_subject'>
                                
                                    <a href='#!' className='bo_cate_link'></a>
                                    
                                    <div className='bo_tit'>
                                        <a href='#!'>
                                            이벤트 제목
                                        </a>
                                        <span className='new_icon'>N<span className='sound_only'>새글</span></span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;