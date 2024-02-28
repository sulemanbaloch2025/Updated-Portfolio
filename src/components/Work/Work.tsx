import React, { useEffect, useState } from 'react';
import AnimatedLettersFast from '../AnimatedLettersFast/AnimatedLettersFast';
import './work.scss';

const Work = () => {
  const [letterClass, setLetterClass] = useState('text-animate-fast');
  const nameArray = [...'02. Work Experience'];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-fast-hover');
    }, 4000);
  });
  return (
    <div className='about' id='Work'>
      <div className='about__left'>
        <span className='sectiontag'>&lt;section&gt;</span>
        <h1 className='about__headingPrimary'>
          <AnimatedLettersFast letterClass={letterClass} strArray={nameArray} idx={15} />
        </h1>
        <div className='about__description'>
        <span className='about__link'>  Dec 2023 - Jan 2024 | Software Engineering Intern | Vroozi<br/></span>
        Developed a cross-platform mobile app MVP using TypeScript, Node, React Native, and GraphQL, and conducted successful mobile testing
       <br/>

        <span className='about__link'>  May 2023 - Aug 2023 | Software Engineering Intern | Vroozi<br/></span>
        Collaborated with senior engineers to create a full-stack web dashboard, implemented unit tests to enhance efficiency, and developed a real-time messaging tool
        <br/>
        <span className='about__link'>  May 2023 - Aug 2023 | Software Engineering Intern  | Sports Exctiement <br/></span>
        Coordinated with 10 developers to create a MERN web app for career and education, attracting 1,000 pre-launch users. Integrated MongoDB API, improved deployment with React CI/CD pipeline, and enhanced security with standardized JWT token authentication for user profiles<br/>

       

        </div>
        <span className='sectiontag'>&lt;/section&gt;</span>
      </div>
      <div className='about__right'>
   

      </div>
    </div>
  );
};

export default Work;
