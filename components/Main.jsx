// import Image from 'next/image';
import React from 'react';
import socialIcons from '../data/socialIcons';

const Main = () => {
  return (
    <div className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div className='flex flex-col items-center justify-end'>
          {/* <Image
            src='/blob.svg'
            alt='blob'
            width={100}
            height={100}
            className='opacity-90'
          /> */}
          <h1 className='text-gray-200 my-2 cursor-default'>
            Hello there! I&apos;m{' '}
            <span className='gradient-text'>
              Mike
            </span>
          </h1>
          <h2 className='cursor-default'>Full-Stack Developer</h2>
          <p className='text-lg text-gray-200 my-5 max-width[70%] m-auto px-5'>
            I have a passion for creating intuitive and user-friendly web
            applications that solve real-world problems. With a strong
            background in both Front-end and Back-end development, I have the
            skills and expertise to bring your project from concept to
            completion. <br />
            Let&apos;s start a conversation about how I can help you turn your
            ideas into reality.
          </p>
          <div className='flex justify-center w-2/4 lg:w-1/4'>
            {socialIcons.map(([icon, url]) => (
              <div
                key={url}
                className='relative group p-1.5 ml-5 active:scale-110 ease-in-out transform active:duration-200 duration-200'
              >
                <a
                  className='text-gray-300 text-2xl w-full hover:text-white active:text-white'
                  href={url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <div className='absolute p-1 -inset-0.5 rounded-lg -z-10 opacity-0 transition duration-700 group-hover:opacity-75 group-hover:transition bg-gradient-to-tr from-purple-600 to-green-600'></div>
                  {icon}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
