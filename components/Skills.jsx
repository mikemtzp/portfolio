import Image from 'next/image';
import React from 'react';
import { skills } from '../data';

const Skills = () => {
  return (
    <div className='w-full h-auto md:h-screen p-2 mt-5 md:mt-0'>
      <div className='max-w-[1240px] h-full mx-auto flex flex-col justify-center'>
        <p className='uppercase gradient-text tracking-widest pl-5 xl:pl-0'>
          Skills
        </p>
        <h2 className='pl-5 xl:pl-0 sm:mb-5'>My tech stack</h2>
        <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 2xl:flex 2xl:flex-wrap 2xl:gap-8 place-content-center justify-items-center gap-5 m-4'>
          {skills.map(([url, image, tech]) => (
            <a className='max-w-[100px] w-full min-w-fit' href={url} key={tech} target='_blank' rel='noopener noreferrer'>
              <div className='bg-slate-900 grid auto-rows-auto justify-items-center rounded-xl py-2 shadow-[1px_2px_10px_4px_rgba(51,65,85,0.9)] max-w-[100px] w-full min-w-fit hover:scale-110 hover:duration-75 transition ease-in duration-900'>
                <Image src={image} alt={tech} width={50} height={50} />
                <p className='text-gray-200 text-xs sm:text-sm pt-0.5'>
                  {tech}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
