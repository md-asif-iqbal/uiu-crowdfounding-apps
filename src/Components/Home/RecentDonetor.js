import React, { useEffect, useState } from "react";

const RecentDonetor = () => {

  const [donates, setDonates] = useState([])
  useEffect(() => {
      fetch('http://localhost:8000/recentDonator')
          .then(res => res.json())
          .then(data => setDonates(data))
  }, [])
  return (
    <div>
      <h1 className='text-2xl font-bold underline text-rose-700 mt-10 mb-8'>Recent Donar</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-3">
        
        
      {
                donates.map(item => (
                  <div class="relative block p-8 overflow-hidden border border-gray-100 rounded-lg">
          <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

          <div class="justify-between sm:flex">
            <div>
              <h5 class="text-xl font-bold text-gray-900">
              {item.details}
              </h5>

              <p class="mt-1 text-xs font-medium text-gray-600">By {item.name}</p>
            </div>

            <div class="flex-shrink-0 hidden ml-3 sm:block">
              <img
                alt={item.name}
                src={item.img}
              
                class="object-cover w-16 h-16 rounded-lg shadow-sm"
              />
            </div>
          </div>

  
        </div>

                ))}
        
      </div>
    </div>
  );
};

export default RecentDonetor;
