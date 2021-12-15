import React from 'react';
import middleBn from '../../Images/main_middle_bn.jpg';
import '../../Css/default.css';
import '../../Css/main.css';
import MainBanner from './MainBanner.js';
import MainComu from './MainComu.js';
import MainTrade from './MainTrade';
import MainClub from './MainClub';
import MainEvent from './MainEvent';

function Main(){
    return (
        <div id='contents' className='main_wrap'>
            <MainBanner></MainBanner>
            <MainComu></MainComu>
            <div className='middle_bn'>
                <a href='#!'><img src={middleBn} alt='이벤트 배너'/></a>
            </div>
            <MainTrade></MainTrade>
            <MainClub></MainClub>
            <MainEvent></MainEvent>
        </div>
    );
}

export default Main;