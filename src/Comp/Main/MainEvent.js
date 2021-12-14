import React from 'react'
import { Link } from 'react-router-dom';

function MainEvent() {
    return (
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
                            <div className='datetime'>
                                2021.11.09 - 2021.11.13
                            </div>
                            <div className='tit_wrap'>
                                <p className='bo_tit'>
                                    이벤트 제목
                                </p>
                                <p className='new_icon'>N<span className='sound_only'>새글</span></p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className='event_item'>
                <a href='#!'>
                        <div className='event_bn'><img src='' alt=''/></div>
                        <div className='event_info'>
                            <div className='datetime'>
                                2021.11.09 - 2021.11.13
                            </div>
                            <div className='tit_wrap'>
                                <p className='bo_tit'>
                                    이벤트 제목
                                </p>
                                <p className='new_icon'>N<span className='sound_only'>새글</span></p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className='event_item event_end'>
                    <a href='#!'>
                        <div className='event_bn'><img src='' alt=''/></div>
                        <div className='event_info'>
                            <div className='datetime'>
                                2021.11.09 - 2021.11.13
                            </div>
                            <div className='tit_wrap'>
                                <p className='bo_tit'>
                                    이벤트 제목
                                </p>
                                <p className='new_icon'>N<span className='sound_only'>새글</span></p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default MainEvent
