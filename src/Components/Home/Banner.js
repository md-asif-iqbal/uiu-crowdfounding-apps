import React from 'react';
import Background from '../../Image/istockphoto-1256079963-612x612 - Edited.png';
const Banner = () => {
   
    return (
        <div>
        <section
  class="relative bg-center bg-no-repeat bg-cover bg-[url(https://images.news18.com/ibnlive/uploads/2018/01/money.jpg?impolicy=website&width=510&height=356)]"
>
  <div
    class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"
  ></div>

  <div
    class="relative px-4 py-32 mx-auto  max-w-screen-xl sm:px-6 lg:px-8 lg:h-screen lg:items-center lg:flex"
  >
    <div class="max-w-xl text-center sm:text-left">
      <h1 class="text-3xl font-extrabold sm:text-5xl">
      UIU CROWDFUNDING

        <strong class="block text-2xl mt-10 font-extrabold text-rose-700">
        We Work For Help The People
        </strong>
  
      </h1>

      <div class="flex flex-wrap mt-8 text-center gap-4">
        <a
          href="#"
          class="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-rose-600 sm:w-auto active:bg-rose-500 hover:bg-rose-700 focus:outline-none focus:ring"
        >
          Donate
        </a>

        
      </div>
    </div>
  </div>
            </section>


        </div>
    );
};

export default Banner;