import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#000000]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#c3d80d]'>Hi, I am</p>
        <h1 className='text-4xl sm:text-7xl text-[#c3d80d]'>
        Zola
        </h1>
        
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
        I am a passionate and dedicated individual with unique ability of problem solving with more than three years experience in HTML5, CSS, JavaScript, NodeJS,  Mongo DB, MySQL, React, Tailwind CSS, Firebase, GitHub and many more... on top of that I am a very quick learner, easy to work with everyone, willing to learn new frame work, technologies or system as required.
        .
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;