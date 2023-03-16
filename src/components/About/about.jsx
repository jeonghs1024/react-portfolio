import React, { useEffect } from 'react';
import './about.css';
import img from '../../assets/mecoding.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FaHtml5, FaCss3Alt, FaNodeJs, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { DiJava } from 'react-icons/di';
import { AiFillGithub } from 'react-icons/ai';
import { GrMysql } from 'react-icons/gr';

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id='about'>
      <div className='left'>
        <div className='img-card'>
          <img
            data-aos='fade-up'
            id='coding'
            src={img}
          />
        </div>
      </div>
      <div data-aos='fade-down' className='right'>
        <h1 className='title'>About Me</h1>
        <p className='description'>
          blahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblah
          blahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblah
        </p>

        <div
          data-aos='fade-zoom-in'
          data-aos-easing='ease-in-back'
          data-aos-delay='300'
          data-aos-offset='0'
          className='skills'
        >
          <FaHtml5 size={70} />
          <FaCss3Alt size={70} />
          <IoLogoJavascript size={70} />
          <FaNodeJs size={70} />
          <FaReact size={70} />
          <DiJava size={70} />
          <GrMysql size={70} />
          <AiFillGithub size={70} />
        </div>
      </div>
    </div>
  );
};

export default About;
