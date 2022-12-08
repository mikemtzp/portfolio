import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProjectItem = ({ title, image, tech, projectUrl }) => {
  return (
    <div className='group relative text-center text-white flex items-center justify-center h-auto w-full shadow-xl shadow-slate-800 rounded-xl p-4 hover:bg-gradient-to-tr from-purple-600 to-green-600'>
      <Image
        src={image}
        alt={title}
        className='rounded-xl group-hover:opacity-10 h-full w-[50%]'
      />
      <div className='hidden group-hover:flex group-hover:flex-col group-hover:items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl tracking-wider'>{title}</h3>
        <p className='mb-3'>{tech}</p>
        <Link href={projectUrl}>
          <p className='bg-black hover:bg-opacity-50 w-fit rounded-xl px-5'>See More</p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
