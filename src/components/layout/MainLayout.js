/**
 * Created by jiahang Lee on 2018/3/23.
 */
import React from 'react';
import  './MainLayout.css';
import Header from './Header.js';

function MainLayout({ children, location }) {
  return (
    <div className='normal'>
      <Header  location={location} />
      <div className='content'>
        <div className='main'>
          {children}
        </div>
      </div>

    </div>
  );
}

export default MainLayout;
