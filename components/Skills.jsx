import Image from 'next/image';
import React from 'react';
import { skills } from '../data';

const Skills = () => {
  return (
    <div className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='uppercase gradient-text tracking-widest'>Skills</p>
        <h2>My tech stack</h2>
        <div className='grid grid-cols-4 md:grid-cols-6'>
          {skills.map(([url, image, tech]) => (
            <div className='grid grid-rows-2' key={tech}>
              <a href={url} target='_blank' rel='noopener noreferrer'>
                <Image src={image} alt={tech} width={50} height={50} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
