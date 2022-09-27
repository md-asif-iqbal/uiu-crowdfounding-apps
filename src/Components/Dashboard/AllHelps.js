import { itMatchesOne } from "daisyui/src/lib/postcss-prefixer/utils";
import React, { useEffect, useState } from "react";

const AllHelps = () => {
  const [allHelps, setAllHelps] = useState([]);
  useEffect(() => {
    fetch("https://uiu-crowdfounding-apps.herokuapp.com/allhelps")
      .then((res) => res.json())
      .then((data) => setAllHelps(data));
  }, []);

  return (
    <div>
      <div className="grid ml-10 max-w-md grid-cols-1 gap-6 mx-auto auto-rows-fr lg:max-w-full lg:gap-2 xl:gap-6 lg:grid-cols-3">
        {allHelps.map((item) => (
          <div class="p-1 shadow-xl bg-gradient-to-r  mt-10 from-pink-500 via-red-500 to-yellow-500 rounded-2xl">
            <a class="block bg-white p-5 rounded-xl" href="">
              <div class="mt-5 w-full ">
                <h5 class="text-xl font-bold text-gray-900"> {item.help}</h5>

                <p class="mt-2 text-sm text-gray-500">user: {item.user}</p>
                <p class="mt-2 text-sm text-gray-500">E-mail: {item.email}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllHelps;
