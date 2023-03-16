import React, { useEffect } from 'react';
import './header.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Me from '../../assets/me.png';

const Header = () => {
  // useEffect(() => {
  //   Aos.init({ duration: 5000 });
  // }, []);

  return (
    <div className='header'>
      <div data-aos='fade-right' className='h-left'>
        <div className='left-container'>
          <h2 className='greeting'>Hi, I am </h2>
          <h2 className='name'>Hae Sung Jeong</h2>
          <h3 className='title'>Software Engineer</h3>
          <div className='description'>
          A software engineer who loves to implement new technologies and turns ideas into practical applications. 
          I'm passionate about designing solutions to solve problems that would best fit the situation with given constraints.
          </div>
        </div>
      </div>
      <div className='h-right'>
        <div className='img-container'>
          <div className='shape'></div>
          {/* <img className='me' src={Me}></img> */}
          {/* <img data-aos='fade' className='me' src={Me}></img> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
