import React, { useState, useEffect } from 'react';
import './projects.scss';
import LazyLoad from 'react-lazyload';
import AnimatedLettersFast from '@components/AnimatedLettersFast/AnimatedLettersFast';

const Project = () => {
  const [letterClass, setLetterClass] = useState('text-animate-fast');
  const nameArray = [...'03. My Projects'];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-fast-hover');
    }, 4000);
  });
  return (
    <div className='project' id='projects'>
      <span className='sectiontag'>&lt;section&gt;</span>
      <h1 className='about__headingPrimary'>
        <AnimatedLettersFast letterClass={letterClass} strArray={nameArray} idx={15} />
      </h1>

      {/* ----------------------------------------- for desktops -------------------------- */}

      <LazyLoad once height={400}>
        <section className='project__section'>
          <div className='project__left'>
            <img className='project__img' src='https://res.cloudinary.com/dnutayeb9/image/upload/v1697514903/project1_mykuzm.png' alt='color palette' />
          </div>
          <div className='project__right'>
            <h3 className='project__headingTertiary'>Featured Project</h3>
            <a href='https://icsa-portfolio-emvr-sulemanbaloch2025.vercel.app' target='_blank' rel='noreferrer' className='project__headingSecondary'><h2>Web portfolio for the International Computer Science Association</h2></a>
            <div className='project__descriptionContainer'>
              <p className='project__description'>
              Developed a centralized website using Next.js, TypeScript, and Tailwind CSS to showcase society projects and research for 500+ students. Utilized Amazon S3 for cloud-based multimedia content storage.            </p>
              <div className='project__tags'> Next.js &nbsp; React.js &nbsp; Node.js &nbsp; TypeScript &nbsp; AWS &nbsp; Tailwind CSS</div>
              <div className='project__icons'>
              
               
              </div>
            </div>
          </div>
        </section>
      </LazyLoad>
      <LazyLoad once height={400}>
        <section className='project__section'>
          <div className='project__left1'>
            <h3 className='project__headingTertiary'>Featured Project</h3>
            <a  target='_blank' rel='noreferrer' className='project__headingSecondary'><h2> Library Management System</h2></a>
            <div className='project__descriptionContainer project__descriptionContainer1'>
              <p className='project__description'>
              Created library management system for a Greencastle library with Node.js, Express.js, GraphQL, React.js, MongoDB Atlas, and Bootstrap, earning 95% library assistant satisfaction. Improved UI with React.js and Bootstrap, and reduced data latency by 30% through GraphQL and Apollo API design.                {' '}

              </p>
              <div className='project__tags'>
                React.js &nbsp;
                Express.js &nbsp; Node.js &nbsp; Express.js &nbsp; GraphQL &nbsp; MongoDB Atlas
                {' '}

              </div>
              <div className='project__icons project__icons1'>
            

              </div>
            </div>
          </div>
          <div className='project__right'>
            <img className='project__img' src='https://res.cloudinary.com/dnutayeb9/image/upload/v1697516099/Screenshot_2023-10-17_at_12.14.27_AM_gtqjfb.png' alt='yelpcap campgrounds' />
          </div>
        </section>
      </LazyLoad>
      <LazyLoad once height={400}>
        <section className='project__section project__section3'>
          <div className='project__left'>
            <img className='project__img' src='https://res.cloudinary.com/dnutayeb9/image/upload/v1697516600/20180822191834-WE-Women-Entrepreneur-meditation-app-HERO_gkyhue.jpg' alt='online grocery store' />
          </div>
          <div className='project__right'>
            <h3 className='project__headingTertiary'>Featured Project</h3>
            <a rel='noreferrer' className='project__headingSecondary'><h2>Android meditation app for Depauw Buddhist Club</h2></a>
            <div className='project__descriptionContainer'>
              <p className='project__description'>
              Created an Android meditation app for the Depauw Buddhist Club, offering guided sessions, a library of meditation tracks, and customizable timers for a seamless and personalized meditation experience. 
                <br />
                <br />
              </p>
              <div className='project__tags'>Java &nbsp; Android SDK &nbsp; Android Studio &nbsp;SQLite &nbsp; Google Play Services</div>
              <div className='project__icons'>
             
             
              </div>
            </div>
          </div>
        </section>
      </LazyLoad>

      {/* --------------------------------------------------- for Mobiles ----------------------------------------------------------------- */}

      <ul className='projectResp__list'>
        <li className='projectResp__items projectResp__items1'>
          <div className='projectResp__card'>
            <div className='projectResp__cardTop'>
              <svg className='projectResp__cardFolder'>
                <use href='icons/symbol-defs.svg#icon-folder' />
              </svg>
              <div className='projectResp__cardLink'>
                <a href='https://github.com/sulemanbaloch2025/ICSA-Portfolio' target='_blank' rel='noreferrer' style={{ marginRight: '1.6rem' }}>
                  <svg className='projectResp__icon'>
                    <use href='icons/symbol-defs.svg#icon-github' />
                  </svg>
                </a>
                <a href='https://icsa-portfolio-emvr-sulemanbaloch2025.vercel.app' target='_blank' rel='noreferrer'>
                  <svg className='projectResp__icon'>
                    <use href='icons/symbol-defs.svg#icon-external-link' />
                  </svg>
                </a>
              </div>
            </div>
            <div className='projectResp__cardBody'>
              <div className='projectResp__cardBodyHeading'>Web portfolio for the International Computer Science Association</div>
              <p className='projectResp__cardBodyDescription'>
              Developed a centralized website using Next.js, TypeScript, and Tailwind CSS to showcase society projects and research for 500+ students. Utilized Amazon S3 for cloud-based multimedia content storage.            </p>
          
              {' '}

            </div>
            <div className='projectResp__cardFooter'>
              <div className='projectResp__tags'> Next.js &nbsp; React.js &nbsp; Node.js &nbsp; TypeScript &nbsp; AWS &nbsp; Tailwind CSS</div>
            </div>
          </div>
        </li>
        <li className='projectResp__items  projectResp__items2'>
          <div className='projectResp__card'>
            <div className='projectResp__cardTop'>
              <svg className='projectResp__cardFolder'>
                <use href='icons/symbol-defs.svg#icon-folder' />
              </svg>
              <div className='projectResp__cardLink'>
                <a href='https://github.com/sulemanbaloch2025/LibraryI-Management-System' target='_blank' rel='noreferrer' style={{ marginRight: '1.6rem' }}>
                  <svg className='projectResp__icon'>
                    <use href='icons/symbol-defs.svg#icon-github' />
                  </svg>
                </a>
        
              </div>
            </div>
            <div className='projectResp__cardBody'>
              <div className='projectResp__cardBodyHeading'>Library Management System</div>
              <p className='projectResp__cardBodyDescription'>
              Created library management system for a Greencastle library with Node.js, Express.js, GraphQL, React.js, MongoDB Atlas, and Bootstrap, earning 95% library assistant satisfaction. Improved UI with React.js and Bootstrap, and reduced data latency by 30% through GraphQL and Apollo API design.                {' '}

              </p>
            </div>
            <div className='projectResp__cardFooter'>
              <div className='projectResp__tags'>
                {' '}
                React.js &nbsp;
                Express.js &nbsp; Node.js &nbsp; Express.js &nbsp; GraphQL &nbsp; MongoDB Atlas

              </div>
            </div>
          </div>
        </li>
        <li className='projectResp__items projectResp__items3'>
          <div className='projectResp__card'>
            <div className='projectResp__cardTop'>
              <svg className='projectResp__cardFolder'>
                <use href='icons/symbol-defs.svg#icon-folder' />
              </svg>
              <div className='projectResp__cardLink'>
                <a href='https://github.com/sulemanbaloch2025/Meditation-App' target='_blank' rel='noreferrer' style={{ marginRight: '1.6rem' }}>
                  <svg className='projectResp__icon'>
                    <use href='icons/symbol-defs.svg#icon-github' />
                  </svg>
                </a>
          
              </div>
            </div>
            <div className='projectResp__cardBody'>
              <div className='projectResp__cardBodyHeading'>Android meditation app for Depauw Buddhist Club</div>
              <p className='projectResp__cardBodyDescription'>
              Created an Android meditation app for the Depauw Buddhist Club, offering guided sessions, a library of meditation tracks, and customizable timers for a seamless and personalized meditation experience. 

                <br />
                <br />
                Users have reported reduced stress levels and improved well-being, with an average session duration of 20 minutes.


              </p>
            </div>
            <div className='projectResp__cardFooter'>
              <div className='projectResp__tags'> Java &nbsp; Android SDK &nbsp; Android Studio &nbsp;SQLite &nbsp; Google Play Services</div>
            </div>
          </div>
        </li>
      </ul>

      <span className='sectiontag'>&lt;/section&gt;</span>

    </div>
  );
};

export default Project;
