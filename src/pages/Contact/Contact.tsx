import AnimatedLetters from '@components/AnimatedLetters/AnimatedLetters';
import React, { useState, useEffect, useRef } from 'react';
import './contact.scss';
import Map, { Marker } from 'react-map-gl';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = [...'Contact me'];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  });

  const form = useRef<HTMLFormElement>(null);

  const inputRef1 = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);
  const inputRef3 = useRef<HTMLTextAreaElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (form.current !== null) {
      emailjs.sendForm('service_8l4qyqe', 'template_35tvzj6', form.current, 'eo9HH2kx8nx--wRys')
        .then(() => {
          window.alert('Mail Sent Successfully!!!');
        }, (error) => {
          window.alert('Mail Not Sent!!!');
        });
    }

    if (inputRef1.current !== null) inputRef1.current.value = '';
    if (inputRef2.current !== null) inputRef2.current.value = '';
    if (inputRef3.current !== null) inputRef3.current.value = '';
  };

  return (
    <div className='contact'>
      <div className='contact__left'>
        <span className='tag' style={{ padding: '0rem' }}>&lt;body&gt;</span>
        <h1 className='about__headingPrimary'>
          <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
        </h1>
        <p className='contact__description'>
          I am interested in internship/full-time opportunities. However, if you have any other requests or
          questions, don&apos;t hesitate to contact me using below form either.
        </p>
        <div className='form'>
          <form ref={form} onSubmit={sendEmail}>
            <div className='form__group'>
              <input name='user_name' ref={inputRef1} type='text' className='form__input' id='name' placeholder='Full Name' required />
              <label htmlFor='name' className='form__label'>Full Name</label>
            </div>
            <div className='form__group'>
              <input type='email' ref={inputRef2} name='user_email' className='form__input' id='email' placeholder='Enter Your Email Address' required />
              <label htmlFor='email' className='form__label'>Email Address</label>
            </div>
            <div className='form__group'>
              <textarea name='message' ref={inputRef3} className='form__input' id='message' placeholder='Message' required />
              <label htmlFor='message' className='form__label'>Message</label>
            </div>
            <button type='submit' value='Send' className='intro__button'>
              Send Mail
            </button>
          </form>
        </div>
        <span className='tag' style={{ padding: '0rem' }}>&lt;body&gt;</span>
      </div>
      <div className='contact__right'>
  <Map
    mapboxAccessToken='pk.eyJ1IjoieWFzaGZhbGtlNzciLCJhIjoiY2t1MjQ2Z2cwMmxjazJvbXI2OGk5b2V0dSJ9.BGnMIJbpa2OzthfRTtTP6w'
    initialViewState={{
      longitude: -86.8647, // Updated longitude
      latitude: 39.6445,   // Updated latitude
      zoom: 9.5,
    }}
    mapStyle='mapbox://styles/yashfalke77/cl89ugdbm001q14rth35g4qth'
  >
    <Marker latitude={39.6445} longitude={-86.8647}>
      <button type='button' className='map__button'>
        <svg width='40' height='132' viewBox='0 0 420 512' fill='none' xmlns='http://www.w3.org/2000/svg'>
          {/* Your SVG path here */}
        </svg>
      </button>
    </Marker>
  </Map>
</div>
    </div>
  );
};

export default Contact;
