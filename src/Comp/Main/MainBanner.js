import React from 'react';
import mainBn from '../../Images/main_bn_bg01.jpg';
import Outlogin from './Outlogin.js';

function MainBanner() {
  return (
    <div className="banner">
      <div className="main_bn">
        <div className="bn_list">
          <div className="bn_img">
            <a href="#!">
              <img src={mainBn} alt="" />
            </a>
          </div>
        </div>
      </div>
      <Outlogin></Outlogin>
    </div>
  );
}

export default MainBanner;
