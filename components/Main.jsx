// import Image from 'next/image';
import React from 'react';
import SocialMedia from './SocialMedia';

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
            <SocialMedia />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
