import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { socialIcons } from '../data';

const Navbar = () => {
  const router = useRouter();
  const [nav, setNav] = useState(false);

  const handleNav = () => setNav(!nav);

  const navSections = [
    ['Home', '/'],
    ['About', '/#about'],
    ['Skills', '/#skills'],
    ['Projects', '/#projects'],
    ['Contact', '/#contact'],
  ];

  return (
    <nav>
      <div className='fixed top-0 w-full h-16 shadow-xl z-[100] bg-black bg-opacity-60 backdrop-blur-md border-b border-slate-800'>
        <div className='flex justify-between items-center z-[101] w-full h-full px-4 2xl:px-14'>
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
          <div>
            <ul className='hidden md:flex'>
              {navSections.map(([title, url]) => (
                <li key={title} className='relative group ml-4'>
                  {router.asPath !== `${url}` ? (
                    <div className='absolute -inset-0.5 rounded-lg -z-10 opacity-0 transition duration-700 group-hover:opacity-75 group-hover:transition bg-gradient-to-tr from-purple-600 to-green-600'></div>
                  ) : null}
                  <Link
                    href={url}
                    className={
                      router.asPath === `${url}`
                        ? 'bg-gradient-to-tr from-purple-600 to-green-600 bg-opacity-75 text-sm text-black rounded-md p-1 font-semibold cursor-default'
                        : 'bg-black text-sm text-gray-300 rounded-md p-1 border-l font-semibold'
                    }
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div
            onClick={handleNav}
            className='relative h-5 w-6 p-1 group md:hidden cursor-pointer'
          >
            <div className='absolute -inset-0.5 rounded -z-10 opacity-0 transition duration-700 group-active:opacity-100 group-active:transition bg-gradient-to-tr from-purple-600 to-green-600'></div>
            <div className='relative flex flex-col h-full justify-center items-center'>
              <span
                className={
                  nav
                    ? 'block rounded bg-gray-300 w-5 h-0.5 translate-y-0.5 origin-center rotate-45 transition duration-500'
                    : 'block rounded bg-gray-300 w-5 h-0.5 -translate-y-1 transition duration-500'
                }
              ></span>
              <span
                className={
                  nav
                    ? 'block rounded bg-gray-300 w-5 h-0.5 transition duration-150 opacity-0'
                    : 'block rounded bg-gray-300 w-5 h-0.5 opacity-100 transition duration-1000'
                }
              ></span>
              <span
                className={
                  nav
                    ? 'block rounded bg-gray-300 w-5 h-0.5 -translate-y-0.5 origin-center -rotate-45 transition duration-500'
                    : 'block rounded bg-gray-300 w-5 h-0.5 translate-y-1 transition duration-500'
                }
              ></span>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={handleNav}
        className={
          nav
            ? 'fixed md:hidden left-0 top-16 w-full h-screen z-[0] opacity-100 transition duration-300 bg-black/70'
            : 'hidden opacity-0'
        }
      ></div>
      <div
        className={
          nav
            ? 'fixed md:hidden flex flex-col justify-between p-3 pt-20 pb-4 rounded-b-lg border-b border-slate-800 left-0 top-0 w-screen h-[75%] bg-[#111111] ease-[cubic-bezier(0,0,0,1)] duration-1000'
            : 'fixed md:hidden flex flex-col justify-between p-3 pb-4 rounded-b-lg border-b border-slate-800 left-0 -top-full w-screen h-[65%] bg-[#111111] ease-[cubic-bezier(0.5,0,0,0)] duration-700'
        }
      >
        <ul className='md:flex'>
          {navSections.map(([title, url]) => (
            <li key={title} className='relative group mb-2' onClick={handleNav}>
              {router.asPath !== `${url}` ? (
                <div className='absolute -inset-0.5 rounded-lg -z-10 opacity-0 transition duration-700 group-hover:opacity-75 group-hover:transition bg-gradient-to-tr from-purple-600 to-green-600'></div>
              ) : null}
              <Link
                href={url}
                className={
                  router.asPath === `${url}`
                    ? 'bg-gradient-to-tr from-purple-600 to-green-600 flex justify-center items-center bg-opacity-75 text-sm text-black rounded-md p-1 font-semibold cursor-default'
                    : 'bg-black flex justify-center items-center text-sm text-gray-500 rounded-md p-1 font-semibold'
                }
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <hr className='border-slate-800' />
          <p className='uppercase text-center tracking-widest text-gray-300'>
            Let&apos;s connect
          </p>
          <hr className='border-slate-800 mb-3' />
          <div className='flex justify-evenly'>
            {socialIcons.map(([icon, url]) => (
              <div
                key={url}
                className='active:scale-110 ease-in-out transform active:duration-200 duration-200'
              >
                <a
                  className='text-gray-300 text-2xl hover:text-white active:text-white'
                  href={url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {icon}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
