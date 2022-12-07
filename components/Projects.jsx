import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import dommie from '../public/assets/dommie.jpeg';

const Projects = () => {
  return (
    <div className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='gradient-text uppercase tracking-widest pl-5 xl:pl-0 '>Projects</p>
        <h2 className='pl-5 xl:pl-0 sm:mb-5'>What I&apos;ve built</h2>
        <div className='grid sm:grid-cols-2 gap-8 mx-4 lg:mx-0'>
          <div className='group relative text-center text-white flex items-center justify-center h-auto w-full shadow-xl shadow-slate-800 rounded-xl p-4 hover:bg-gradient-to-tr from-purple-600 to-green-600'>
            <Image
              src={dommie}
              alt='/'
              className='rounded-xl group-hover:opacity-10 h-full w-[50%]'
            />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
              <h3 className='text-2xl tracking-wider'>
                Project Name
              </h3>
              <p className='pb-2'>React</p>
              <Link href='/'>
                <p className='bg-slate-400 rounded-xl'>More Info</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
