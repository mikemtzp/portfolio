import React from 'react';

const Main = () => {
  return (
    <div className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <h1 className='text-gray-200 my-2'>
            Hello there! I&apos;m{' '}
            <span className='bg-clip-text text-transparent inline-block bg-gradient-to-tr from-purple-600 to-green-600'>
              Mike
            </span>
          </h1>
          <h2>Full-Stack Developer</h2>
          <p className='text-lg text-gray-200 my-5 max-width[70%] m-auto py-3 px-5'>
            I have a passion for creating intuitive and user-friendly web
            applications that solve real-world problems. With a strong
            background in both front-end and back-end development, I have the
            skills and expertise to bring your project from concept to
            completion. <br />Let&apos;s start a conversation about how I can help you
            turn your ideas into reality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
