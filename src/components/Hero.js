import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-blue-500 font-bold p-2'>
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className='text-black md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 max-sm:text-white'>
          Grow with data.
        </h1>
        <div className='flex justify-center items-center text-black max-sm:text-white'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Fast, flexible financing for
          </p>
          <Typed
          className=' text-black md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 max-sm:text-white'
            strings={['BTB', 'BTC', 'SASS']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-blue-600 max-sm:text-white'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
        <button className='bg-blue-500 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Get Started</button>
      </div>
    </div>
  );
};

export default Hero;