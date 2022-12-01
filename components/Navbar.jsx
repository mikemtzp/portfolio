import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  return (
    <div className='fixed w-full h-16 shadow-xl z-[100] border-b border-slate-800'>
      <div className='flex justify-between items-center w-full h-full px-4 2xl:px-14'>
        <div className='relative group'>
          <div className='absolute -inset-0.5 rounded-lg blur opacity-75 group-hover:bg-gradient-to-tr group-hover:from-purple-600 group-hover:to-green-600 group-hover:animate-ping'></div>
          <Image
            src='/../public/assets/navLogoB.jpeg'
            alt=''
            width={120}
            height={30}
            className='relative rounded-lg w-32 h-auto'
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
