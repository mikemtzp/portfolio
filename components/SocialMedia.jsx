import React from 'react'
import socialIcons from '../data/socialIcons';

const SocialMedia = () => {
  return (
    <>
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
    </>
  )
}

export default SocialMedia