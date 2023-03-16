import React, { useState } from 'react';
import './projectList.css';
import LaptopIcon from '@mui/icons-material/Laptop';
import GitHubIcon from '@mui/icons-material/GitHub';

const ProjectList = () => {
  const [projects] = useState([
    {
      name: 'Travel Planner Bot',
      img: 'chat_planner',
      link: 'https://jeonghs1024.github.io/travel_planner_bot/',
      github: 'https://github.com/jeonghs1024/chatbot-planner',
    },
    {
      name: 'Music Venue App',
      img: 'venuebuddy',
      link: 'https://jeonghs1024.github.io/Venue-Buddy/',
      github: 'https://github.com/jeonghs1024/Venue-Buddy',
    },
    {
      name: 'Yo Soy Sauce',
      img: 'yosoysauce',
      link: 'https://www.yosoysauceatx.com/',
    },
    {
      name: 'Java Swing Map',
      img: 'java_map',
      github: 'https://github.com/jeonghs1024/JavaSwingMap',
    },
    {
      name: 'Weather Dashboard',
      img: 'weather_dashboard',
      link: 'https://jeonghs1024.github.io/weather-dashboard/',
      github: 'https://github.com/jeonghs1024/weather-dashboard',
    },
    {
      name: 'whatever',
      img: 'weather_dashboard',
      link: 'https://jeonghs1024.github.io/weather-dashboard/',
      github: 'https://github.com/jeonghs1024/JavaSwingMap',
    },
  ]);

  const [currentProject, setCurrentProject] = useState();

  const handleMouseEnter = (project, i) => {
    setCurrentProject({ ...project, i });
    if (project.name) {
      const selected = document.getElementById(project.name);
      selected.style.transitionDuration = '.5s';
      selected.style.transform = 'translateY(-34.5vh)';
    }
  };

  const handleMouseLeave = (project, i) => {
    setCurrentProject({ ...project, i });
    if (project.name) {
      const selected = document.getElementById(project.name);
      selected.style.transitionDuration = '.5s';
      selected.style.transform = 'translateY(34.5vh)';
    }
  };

  return (
    <section id='projects' className='projects'>
      <div
        data-aos='fade-zoom-in'
        data-aos-easing='ease-in-back'
        data-aos-delay='300'
        data-aos-offset='0'
        className='project-title'
      >
        Projects
      </div>
      <div className='card-wrapper'>
        {projects.map((project, i) => (
          <div
            onMouseEnter={() => handleMouseEnter(project, i)}
            onMouseLeave={() => handleMouseLeave(project, i)}
            className='project'
            data-aos='fade-up'
          >
            <div className='browser'>
              {' '}
              <div className='circle'></div>
              <div className='circle'></div>
              <div className='circle'></div>
              <div className='ptitle'> {project.name}</div>
            </div>
            <img
              src={require(`../../assets/projects/${project.img}.png`)}
              alt={project.name}
              className='card'
            />
            <div id={project.name} className='demo-github'>
              <a href={project.link} id='l' className='demo'>
                <LaptopIcon fontSize='large' style={{ color: '#fff' }} />
              </a>
              <a href={project.github} id='g' className='github'>
                <GitHubIcon fontSize='large' style={{ color: '#fff' }} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
