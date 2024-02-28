import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '@components/AnimatedLetters/AnimatedLetters';
import './introduction.scss';

const Introduction = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = [...'Suleman,'];
  const jobArray = [...'oftware Developer'];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  });

  return (
    <div className='intro '>
      <div className='intro__left'>
        <span className='sectiontag'>&lt;section&gt;</span>
        <h1 className='intro__headingPrimary'>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
&nbsp;
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>&apos;m</span>
&nbsp;
          <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
          <br />
          <img src='https://res.cloudinary.com/dhbiouaym/image/upload/v1663667972/Portfolio/logo-s_fna9e6.png' className='intro__logos' alt='' />
          <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={19} />
        </h1>
        <h2 className='intro__headingSecondary'>Computer Science Major at DePauw university</h2>
        <a href='https://www.linkedin.com/in/suleman-baloch/' target='_blank' rel='noreferrer'  className='intro__button'>
          Linkedln
        </a>
        <a href='https://github.com/sulemanbaloch2025' target='_blank' rel='noreferrer' className='intro__button'>
          GitHub
        </a>
    
        <span className='sectiontag'>&lt;/section&gt;</span>
      </div>
      <div className='intro__right'>
      <div className='logo__outline'>
      <svg
        id='yash'
        width='49rem'
        height='49.5rem'
        viewBox='0 0 299 295'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M149.5 0C232.436 0 298 65.564 298 148.5C298 231.436 232.436 297 149.5 297C66.564 297 1 231.436 1 148.5C1 65.564 66.564 0 149.5 0Z'
          stroke='white'
          strokeWidth='3'
        >
          <animate
            attributeName='stroke-dasharray'
            from='0,600'
            to='600,0'
            dur='5s'
            begin='0s'
            fill='freeze'
          />
          <animate
            attributeName='stroke-dashoffset'
            from='600'
            to='0'
            dur='5s'
            begin='0s'
            fill='freeze'
          />
        </path>

        <image
          y='1'
          width='299'
          height='295'
          xlinkHref='https://res.cloudinary.com/dnutayeb9/image/upload/v1704348426/cocbs8md3ffipeesikab.png'
        />
      </svg>
    </div>
        <div className='logo__fill'>
    
        </div>
      </div>
    </div>
  );
};

export default Introduction;
