import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <h1 className='font-bold text-2xl'>About Us</h1>
            <div className="relative px-4 pt-16 mx-auto mb-16 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full">
      <div className="max-w-xl mx-auto lg:max-w-screen-xl">
        <div className="mb-16 lg:max-w-lg lg:mb-0">
          <div className="max-w-xl mb-6">
            
            <p className="text-base text-gray-700 md:text-lg text-start">
            We work for Students,Poor & Homeless People, Affected People and Street Child.Sometime student need money for their study purpose & medical issue.In this time we are collectine money from students and try to give a loan to help them.Every year we manage some event like Winter Cloth Distribution ,Eid Cloth Distribution for help the people.For this purpose,we collect money or cloth from our students buy some coth and distribution.If you need any type of help or support then you can post in help desk we will try to help you.
            </p>
          </div>
          <div className="flex items-center">
            <a
              href="/"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-600 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
            >
              Get started
            </a>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center h-full overflow-hidden lg:w-2/3 xl:w-1/2 lg:absolute lg:justify-start lg:bottom-0 lg:right-0 lg:items-end mr-8">
        <img
          src="https://cdn.corporatefinanceinstitute.com/assets/10-Poor-Study-Habits-Opener.jpeg"
          className="object-cover object-top w-full h-64 max-w-xl -mb-16 rounded shadow-2xl lg:ml-64 xl:ml-8 lg:-mb-24 xl:-mb-28 lg:h-auto lg:max-w-screen-md"
          alt=""
        />
      </div>
    </div>
        </div>
    );
};

export default AboutUs;