import React, { useEffect, useState } from 'react';

const OurPreviousWork = () => {
  const [prevousWorks, setPreviousWorks] = useState([])
  useEffect(() => {
      fetch('http://localhost:8000/previouswroks')
          .then(res => res.json())
          .then(data => setPreviousWorks(data))
  }, [])

    return (
        <div>
            <h1 className='text-2xl font-bold underline text-rose-700 mb-8'>Our Previous Work</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-3 '>
            
            {
                prevousWorks.map(item => (
                  <div  class="relative block bg-black group rounded-xl">
  <img
    alt="Developer"
    src={item.img}
    class="absolute rounded-xl inset-0 object-cover w-full h-full opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div class="relative p-8">
    <p class="text-sm font-medium tracking-widest text-pink-500 uppercase">
      {item.date}
    </p>

    <p class="text-2xl font-bold text-white">{item.name}</p>

    <div class="mt-64">
      <div
        class="opacity-0 transition-all transform translate-y-8 group-hover:opacity-100 group-hover:translate-y-0"
      >
        <p class="text-sm text-white">
         {item.details}
        </p>
      </div>
    </div>
  </div>
            </div>
                 
                      ))
                  }

                  </div>
                  </div>
    );
};

export default OurPreviousWork;