import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const OurWorks = () => {
  const [user] = useAuthState(auth);
  const [works, setWorks] = useState([]);
  useEffect(() => {
    fetch("https://uiu-crowdfounding-apps.herokuapp.com/ourwroks")
      .then((res) => res.json())
      .then((data) => setWorks(data));
  }, []);

  return (
    <div className="my-10 ">
      <h1 className="text-2xl font-bold underline text-rose-700 mb-8">
        Our Works
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-3 ">
        {works.map((item) => (
          <div class="block overflow-hidden rounded-2xl">
            <img alt="Office" src={item.img} class="object-cover w-full h-56" />

            <div class="p-4 bg-gray-900">
              <h5 class="text-xl text-white">{item.name}</h5>

              <p class="mt-1 text-xs text-gray-500">{item.details}</p>
              {item.loan ? (
                <button type="" className="btn mt-2 bg-green-500">
                  {" "}
                  {user ? (
                    <Link to="/requestforloan">{item.loan}</Link>
                  ) : (
                    <Link to="/login">{item.loan}</Link>
                  )}
                </button>
              ) : (
                <button type="" className="btn mt-2 bg-green-500">
                  {" "}
                  {user ? (
                    <Link to="/donate">{item.donate}</Link>
                  ) : (
                    <Link to="/login">{item.donate}</Link>
                  )}{" "}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWorks;
