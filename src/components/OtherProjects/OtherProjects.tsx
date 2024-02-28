import AnimatedLettersFast from '@components/AnimatedLettersFast/AnimatedLettersFast';
import React, { useState, useEffect } from 'react';
import './otherProjects.scss';

const OtherProjects = () => {
  const [letterClass, setLetterClass] = useState('text-animate-fast');
  const nameArray = [...'Other Projects '];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-fast-hover');
    }, 4000);
  });

  return (
    <div className='other'>
      <span className='sectiontag'>&lt;section&gt;</span>
      <div className='other__container'>
        <h1 className='other__headingPrimary'>
          <AnimatedLettersFast letterClass={letterClass} strArray={nameArray} idx={15} />
        </h1>
      </div>

      <ul className='other__list'>
        <li className='other__items'>
          <div className='other__card'>
            <div className='other__cardTop'>
              <svg className='other__cardFolder'>
                <use href='icons/symbol-defs.svg#icon-folder' />
              </svg>
              <div className='other__cardLink'>
            
              </div>
            </div>
            <div className='other__cardBody'>
              <div className='other__cardBodyHeading'>CRUD MERN Application</div>
              <p className='other__cardBodyDescription'>
              Developed a MERN web app with CRUD functionality, elevating Chemistry students' scores by 45% through organic structure drawing. By optimizing page load times with React.Lazy and React Router, load times improved by 40%. My Node.js/Express.js API efficiently handled 10,000+ HTTP requests/sec, and I maintained a 99.9% MongoDB uptime for chemical structure storage
              {' '}

              </p>
            </div>
            <div className='other__cardFooter'>
              <div className='other__tags'> Material UI &nbsp; Nextjs &nbsp; Mongodb &nbsp; jwt-auth</div>
            </div>
          </div>
        </li>
        <li className='other__items'>
          <div className='other__card'>
            <div className='other__cardTop'>
              <svg className='other__cardFolder'>
                <use href='icons/symbol-defs.svg#icon-folder' />
              </svg>
              <div className='other__cardLink'>
              

              </div>
            </div>
            <div className='other__cardBody'>
              <div className='other__cardBodyHeading'>Web 3.0 Blockchain Application</div>
              <p className='other__cardBodyDescription'>
              Created a Web 3.0 blockchain app with React, Next.js, and Node.js, integrating it with MetaMask for secure Ethereum wallet transactions. Additionally, I designed and deployed Ethereum smart contracts using Solidity.
              </p>
            </div>
            <div className='other__cardFooter'>
              <div className='other__tags'> Material UI &nbsp; React &nbsp; MongoDB &nbsp; Expressjs</div>
            </div>
          </div>
        </li>
        <li className='other__items'>
          <div className='other__card'>
            <div className='other__cardTop'>
              <svg className='other__cardFolder'>
                <use href='icons/symbol-defs.svg#icon-folder' />
              </svg>
              <div className='other__cardLink'>
              
         
              </div>
            </div>
            <div className='other__cardBody'>
              <div className='other__cardBodyHeading'>eCommerce Application
</div>
              <p className='other__cardBodyDescription'>
              Developed a Next.js full-stack app for a seamless user experience, boosting conversion rates. I also incorporated Stripe for secure payment processing and integrated a headless CMS like Sanity for streamlined product information management and updates
</p>
            </div>
            <div className='other__cardFooter'>
              <div className='other__tags'> SCSS / SASS &nbsp; UI / UX &nbsp; Nodejs &nbsp; HTML</div>
            </div>
          </div>
        </li>
        <li className='other__items'>
          <div className='other__card'>
            <div className='other__cardTop'>
              <svg className='other__cardFolder'>
                <use href='icons/symbol-defs.svg#icon-folder' />
              </svg>
              <div className='other__cardLink'>
              
         
              </div>
            </div>
            <div className='other__cardBody'>
              <div className='other__cardBodyHeading'>Full-Stack Chatting Application</div>
              <p className='other__cardBodyDescription'>
              Chat Application created with Firebase and React: fast message delivery to high concurrency handling.     </p>
            </div>
            <div className='other__cardFooter'>
              <div className='other__tags'> Bulma &nbsp; javascript &nbsp; vanilla js</div>
            </div>
          </div>
        </li>
        <li className='other__items'>
          <div className='other__card'>
            <div className='other__cardTop'>
              <svg className='other__cardFolder'>
                <use href='icons/symbol-defs.svg#icon-folder' />
              </svg>
              <div className='other__cardLink'>
             
       
              </div>
            </div>
            <div className='other__cardBody'>
              <div className='other__cardBodyHeading'>Society Workshop Registration Portal</div>
              <p className='other__cardBodyDescription'>
              Created a user-friendly registration portal with React.js and Node.js for over 100 students. Incorporated data handling via Axios and ensured secure token storage and retrieval using JavaScript's local storage API                {' '}

              </p>
            </div>
            <div className='other__cardFooter'>
              <div className='other__tags'> Python &nbsp; Django &nbsp; HTML / CSS &nbsp; Javascript</div>
            </div>
          </div>
        </li>
        <li className='other__items'>
          <div className='other__card'>
            <div className='other__cardTop'>
              <svg className='other__cardFolder'>
                <use href='icons/symbol-defs.svg#icon-folder' />
              </svg>
              <div className='other__cardLink'>
              
       
              </div>
            </div>
            <div className='other__cardBody'>
              <div className='other__cardBodyHeading'>Course Tracker</div>
              <p className='other__cardBodyDescription'>
              Created a program that utilizes a linked list to manage a student's course data. The program allows users to insert, display, remove courses, calculate GPA, and quit the program using a menu-based interface.
              </p>
            </div>
            <div className='other__cardFooter'>
              <div className='other__tags'> C++ </div>
            </div>
          </div>
        </li>
        <li className='other__items'>
          <div className='other__card'>
            <div className='other__cardTop'>
              <svg className='other__cardFolder'>
                <use href='icons/symbol-defs.svg#icon-folder' />
              </svg>
              <div className='other__cardLink'>
              
       
              </div>
            </div>
            <div className='other__cardBody'>
              <div className='other__cardBodyHeading'>Restaurant Menu App</div>
              <p className='other__cardBodyDescription'>
              Build a MERN based menu application for a restaurant cuisine, offering dish descriptions, images, and user reviews, with the option to locate nearby restaurants.              </p>
            </div>
            <div className='other__cardFooter'>
              <div className='other__tags'>  React &nbsp; MongoDB &nbsp; Express.js &nbsp; Node.js</div>
            </div>
          </div>
        </li>
        <li className='other__items'>
          <div className='other__card'>
            <div className='other__cardTop'>
              <svg className='other__cardFolder'>
                <use href='icons/symbol-defs.svg#icon-folder' />
              </svg>
              <div className='other__cardLink'>
             
       
              </div>
            </div>
            <div className='other__cardBody'>
              <div className='other__cardBodyHeading'>MERN Splitwise App</div>
              <p className='other__cardBodyDescription'>
              Created a MERN app to split expenses among dorm students</p>
</div>
            <div className='other__cardFooter'>
              <div className='other__tags'>  React.js &nbsp; Node.js &nbsp; MongoDB &nbsp; AWS S3 Bucket</div>
            </div>
          </div>
        </li>
        <li className='other__items'>
          <div className='other__card'>
            <div className='other__cardTop'>
              <svg className='other__cardFolder'>
                <use href='icons/symbol-defs.svg#icon-folder' />
              </svg>
              <div className='other__cardLink'>
              
       
              </div>
            </div>
            <div className='other__cardBody'>
              <div className='other__cardBodyHeading'>Resume Section Classifier App</div>
              <p className='other__cardBodyDescription'>
              Designed a Python program such that given the Resume of a person, detect the section words such as experience, skills, projects, etc. Implemented different machine learning algorithms to get the desired output.</p>
</div>
            <div className='other__cardFooter'>
              <div className='other__tags'>  Python &nbsp; scikit-learn &nbsp; numpy &nbsp;pandas</div>
            </div>
          </div>
        </li>
        <li className='other__items'>
          <div className='other__card'>
            <div className='other__cardTop'>
              <svg className='other__cardFolder'>
                <use href='icons/symbol-defs.svg#icon-folder' />
              </svg>
              <div className='other__cardLink'>
               
       
              </div>
            </div>
            <div className='other__cardBody'>
              <div className='other__cardBodyHeading'>React Password Generator App</div>
              <p className='other__cardBodyDescription'>
              Developed a React-based password generator app for myself for easily creating secure, customizable passwords with options for length and character types </p></div>
            <div className='other__cardFooter'>
              <div className='other__tags'>  React &nbsp; JS &nbsp; HTML &nbsp;CSS</div>
            </div>
          </div>
        </li>
        <li className='other__items'>
          <div className='other__card'>
            <div className='other__cardTop'>
              <svg className='other__cardFolder'>
                <use href='icons/symbol-defs.svg#icon-folder' />
              </svg>
              <div className='other__cardLink'>
             
       
              </div>
            </div>
            <div className='other__cardBody'>
              <div className='other__cardBodyHeading'>Notes App</div>
              <p className='other__cardBodyDescription'>
              Designed a React-based personal note-taking application, offering a user-friendly interface for users to create, edit, and organize their personal notes efficiently </p></div>
            <div className='other__cardFooter'>
              <div className='other__tags'>  React &nbsp; JS &nbsp; HTML &nbsp;CSS</div>
            </div>
          </div>
        </li>
      </ul>
      <span className='sectiontag'>&lt;/section&gt;</span>
    </div>
  );
};

export default OtherProjects;
