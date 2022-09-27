import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const AllDonates = () => {
  const [user] = useAuthState(auth);
  const [donates, setDonates] = useState([]);
  useEffect(() => {
    fetch("https://uiu-crowdfounding-apps.herokuapp.com/alldonates")
      .then((res) => res.json())
      .then((data) => setDonates(data));
  }, []);
  return (
    <div>
      <section className="text-gray-700">
        <div className="container flex flex-col items-center mx-auto -mt-20 mb-12 md:p-10 md:px-12"></div>
        <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
          {donates.map((item) => (
            <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
              <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-900">
                <p className="relative px-6 py-1 text-lg italic text-center text-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-8 h-8 text-violet-400"
                  >
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>
                  {item.details}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute right-0 w-8 h-8 text-violet-400"
                  >
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-violet-400 text-gray-900">
                <p className="text-xl font-semibold leading-tight">
                  ${item.price}
                </p>
                <p className="text-xl font-semibold leading-tight">
                  {item.name}
                </p>
                <p className="text-sm uppercase">{item.email}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllDonates;
