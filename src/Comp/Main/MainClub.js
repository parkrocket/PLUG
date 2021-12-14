import React from 'react'
import { Link } from 'react-router-dom';

function MainClub() {
    return (
        <div className='club_wrap'>
            <div className='title'>
                <h2>지금 핫한 동호회</h2>
                <a href='#!'>더보기</a>
            </div>
            <div className='club'>
                <div className='club_ul'>
                    <a href='#!' className='club_box'>
                        <div className='img'><img src='' alt=''/></div>
                        <p className='img_bg'></p>
                        <div className='club_tit'>
                            <p className='area_num'>지역/5명</p>
                            <p className='tit'>동호회명</p>
                        </div>
                    </a>
                    <a href='#!' className='club_box'>
                        <div className='img'><img src='' alt=''/></div>
                        <p className='img_bg'></p>
                        <div className='club_tit'>
                            <p className='area_num'>지역/5명</p>
                            <p className='tit'>동호회명</p>
                        </div>
                    </a>
                    <a href='#!' className='club_box'>
                        <div className='img'><img src='' alt=''/></div>
                        <p className='img_bg'></p>
                        <div className='club_tit'>
                            <p className='area_num'>지역/5명</p>
                            <p className='tit'>동호회명</p>
                        </div>
                    </a>
                    <a href='#!' className='club_box'>
                        <div className='img'><img src='' alt=''/></div>
                        <p className='img_bg'></p>
                        <div className='club_tit'>
                            <p className='area_num'>지역/5명</p>
                            <p className='tit'>동호회명</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default MainClub
