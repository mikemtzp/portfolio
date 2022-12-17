import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import SocialMedia from './SocialMedia';

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] mx-auto py-32 w-full'>
        <p className='uppercase gradient-text tracking-widest pl-5 xl:pl-0'>
          Contact
        </p>
        <h2 className='pl-5 xl:pl-0 mb-3 sm:mb-5'>Get in touch</h2>
        <div className='grid lg:grid-cols-5 gap-8 mx-6 xl:mx-0 mt-6 xl:mt-0'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-[1px_2px_10px_4px_rgba(88,28,135,0.9)] rounded-xl p-4'>
            <div className='lg:p-4 h-full'>
              <div className='flex py-2'>
                <FaMapMarkerAlt className='text-white text-2xl w-auto h-auto' />
                <p className='text-xl text-gray-200 ml-5'>
                  Based in CDMX, Mexico
                </p>
              </div>
              <div className='flex py-2'>
                <FaPhoneAlt className='text-white text-2xl w-auto h-auto' />
                <p className='text-xl text-gray-200 ml-5'>
                  Tel: +52 551112 9068
                </p>
              </div>
              <div className='flex py-2'>
                <FaEnvelope className='text-gray-200 text-2xl w-auto h-auto' />
                <p className='text-xl text-gray-200 ml-5'>
                  mikemp8226@gmail.com
                </p>
              </div>
              <div className='flex justify-center mt-16'>
                <SocialMedia />
              </div>
            </div>
          </div>
          {/* right */}
          <div className='col-span-3 w-full h-auto shadow-[1px_2px_10px_4px_rgba(88,28,135,0.9)] rounded-xl lg:p-4'>
            <form action='put' className='p-4'>
              <div className='sm:grid sm:grid-cols-2 gap-4 w-full'>
                <div className='flex flex-col'>
                  <label htmlFor='name'>Name</label>
                  <input id='name' type='text' required autoComplete='off' />
                </div>
                <div className='flex flex-col'>
                  <label htmlFor='linkedin'>LinkedIn</label>
                  <input
                    id='linkedin'
                    type='text'
                    required
                    autoComplete='off'
                  />
                </div>
              </div>
              <div className='flex flex-col py-2'>
                <label htmlFor='email'>Email</label>
                <input id='email' type='email' required autoComplete='off' />
              </div>
              <div className='flex flex-col py-2'>
                <label htmlFor='message'>Message</label>
                <textarea
                  id='message'
                  className='border-2 rounded-lg p-2 my-1 resize-none'
                  rows='8'
                  required
                  autoComplete='off'
                />
              </div>
              <button className='w-full my-4 shadow-[1px_2px_10px_4px_rgba(51,65,85,0.9)] hover:shadow-[1px_2px_10px_4px_rgba(100,116,139,0.9)] hover:duration-75 transition ease-in duration-900'>Contact</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
