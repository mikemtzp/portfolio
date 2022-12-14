import Image from 'next/image';
import React from 'react';
import dommy from '../public/assets/dommy.jpeg'

const About = () => {
  return (
    <div id='about' className='w-full h-auto pt-32 p-2 flex items-center'>
      <div className=' max-w-[1240px] m-auto lg:grid grid-cols-3 gap-6'>
        <div className='col-span-2 pl-5 pr-5 lg:pr-0 xl:pl-0'>
          <p className='uppercase gradient-text tracking-widest'>About</p>
          <h2>Who I am</h2>
          <p className='text-gray-200 my-3 lg:my-5 xl:text-lg text-center lg:text-left'>
            My path as a developer began in early 2022 when I started working
            with HTML and CSS to understand how simple websites where built.
            After that, I learned the basics of my first programming language,
            JavaScript, which I used to build interactive SPAs using DOM
            manipulationa and APIs integration. I then, started using React for
            interactive UIs for the Front-end.
          </p>
          <p className='text-gray-200 mb-3 lg:my-5 xl:text-lg text-center lg:text-left'>
            The time came to dive into Back-end with Ruby as my second language.
            After understanding databases, and MVC architecture, I adopted my
            first full-stack framework, Ruby on Rails, to build complete
            integrated and functional sites with authentication and
            authorization features.
          </p>
          <p className='text-gray-200 mb-3 lg:my-5 xl:text-lg text-center lg:text-left'>
            My 3-year professional experience in Business Management and Digital
            Marketing had allowed me to deeply understand terms related to
            design and development such as UI and UX, and to work within remote
            diverse teams complying with project deadlines.
          </p>
          <p className='text-gray-200 mb-3 lg:my-5 xl:text-lg text-center lg:text-left'>
            Currently, I spend my time building projects with Next.js and
            learning new technologies.
          </p>
        </div>
        <div className='w-fit xl:w-auto h-auto m-auto shadow-xl shadow-slate-800 rounded-xl p-4 hover:scale-105 ease-in duration-300 hover:shadow-slate-600'>
          <Image
            src={dommy}
            alt=''
            width={320}
            height={450}
            className='rounded-xl h-72 w-56 md:h-auto md:w-auto'
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default About;
