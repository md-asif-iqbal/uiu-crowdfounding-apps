import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const AffectedPeople = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const url = `https://uiu-crowdfounding-apps.herokuapp.com/donations`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        reset();
        setCounterDinner(0);
      });
  };

  const [user] = useAuthState(auth);
  const [counterDinner, setCounterDinner] = useState(0);

  const decrease = () => {
    if (counterDinner > 0) {
      setCounterDinner((count) => parseInt(count - 5));
    }
  };

  const increase = () => {
    setCounterDinner((count) => parseInt(count + 5));
    // console.log('yes');
  };
  const handleInput = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setCounterDinner(parseInt(e.target.value));
  };
  return (
    <div>
      <div className="relative flex flex-col mt-20 py-16 lg:pt-0 lg:flex-col lg:pb-0 ">
        <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-20 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">
              <div>
                <p className="inline-block px-3 py-2  mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
                  Affected people
                </p>
              </div>

              <p className="text-center text-gray-700 md:text-lg">
                Every year Bangladesh faces many natural disasters,like
                flood,strom & many sudden accidents & many people are
                affected.Overall risk of climate related impactare now
                vulnarable .Donate some money for them.
              </p>
            </div>
            <div className="flex flex-col items-center md:flex-row">
              {user ? (
                <label
                  htmlFor="my-modal"
                  className="inline-flex lg:mx-40 items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-purple-600 hover:bg-rose-600 focus:shadow-outline focus:outline-none"
                >
                  Donate Now
                </label>
              ) : (
                <label
                  htmlFor="my-modal"
                  className="inline-flex lg:mx-40 items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-purple-600 hover:bg-rose-600 focus:shadow-outline focus:outline-none"
                >
                  <Link to="/login">Donate Now</Link>
                </label>
              )}
            </div>
          </div>
        </div>
        <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
            src="https://pbs.twimg.com/media/E9IcmhyWQAIw7TD?format=jpg&name=4096x4096"
            alt=""
          />
        </div>
      </div>

      {/* second part */}
      <div className="relative flex flex-col-reverse px-4 py-16 mx-auto lg:block lg:flex-col lg:py-20 xl:py-48 md:px-8 sm:max-w-xl md:max-w-full">
        <div className="z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
          <img
            src="https://kristianmeryll.files.wordpress.com/2011/09/street-children-edit.jpg"
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
            alt=""
          />
        </div>
        <div className="relative flex justify-end max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl">
          <div className="mb-16  lg:pr-5 lg:max-w-lg lg:mb-0">
            <div className="max-w-xl mb-6 ml-20">
              <div>
                <p className="inline-block py-2 px-3  mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
                  Street Child
                </p>
              </div>
              <p className="text-center text-gray-700 md:text-lg">
                There are an estimated 4 million street children in Bangladesh.
                A street child is someone "for whom the street has become his or
                her habitual abode and/or source of livelihood; and who is
                inadequately protected, supervised, or directed by responsible
                adults". Street children do not go to school; instead they sell
                things in the streets or do other jobs as their parents earn
                less money or do not work. Many of the street children in
                Bangladesh die young as they are not properly taken care of. We
                are trying to help them & make their life easier.
              </p>
            </div>
            <form>
              <div className="flex items-center mt-4 ml-24">
                {user ? (
                  <label
                    htmlFor="my-modal"
                    className="inline-flex lg:mx-40 items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-purple-600 hover:bg-rose-600 focus:shadow-outline focus:outline-none"
                  >
                    Donate Now
                  </label>
                ) : (
                  <label
                    htmlFor="my-modal"
                    className="inline-flex lg:mx-40 items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-purple-600 hover:bg-rose-600 focus:shadow-outline focus:outline-none"
                  >
                    <Link to="/login">Donate Now</Link>
                  </label>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* third-part */}
      <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0 ">
        <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-20 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">
              <div>
                <p className="inline-block py-2 px-3  mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
                  Cloth Distribution
                </p>
              </div>

              <p className="text-center text-gray-700 md:text-lg">
                The need for winter clothing during winter — especially at the
                beginning of the season. Not only do regulars need items, but
                families often come to shelters seeking jackets, hats and
                gloves. Purchasing all of these items for each child can place a
                significant burden on families that are just getting by
                financially. If you’d like to donate clothing, thick socks,
                boots, coats, scarves and hats are some of the most sought-after
                items or some money. Don’t just limit what you bring to winter
                essentials. Below is a list of just some of the items that are
                needed for men, women, and children year round.
              </p>
            </div>
            <div className="flex flex-col items-center md:flex-row">
              {user ? (
                <label
                  htmlFor="my-modal"
                  className="inline-flex lg:mx-40 items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-purple-600 hover:bg-rose-600 focus:shadow-outline focus:outline-none"
                >
                  Donate Now
                </label>
              ) : (
                <label
                  htmlFor="my-modal"
                  className="inline-flex lg:mx-40 items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-purple-600 hover:bg-rose-600 focus:shadow-outline focus:outline-none"
                >
                  <Link to="/login">Donate Now</Link>
                </label>
              )}
            </div>
          </div>
        </div>
        <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
            src="https://www.sentinelassam.com/wp-content/uploads/2019/01/44a06a10-99a4-11e8-81c9-1b431fd718bc-rimg-w525-h350-dcd9bea7-gmir.jpg"
            alt=""
          />
        </div>
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <section
          id="login"
          class="p-4 bg-transparent flex flex-col justify-center min-h-screen max-w-md mx-auto modal"
        >
          <div class="p-6 -mt-20 bg-sky-100 rounded relative">
            <label
              htmlFor="my-modal"
              className="btn btn-sm btn-circle absolute right-2 top-3"
            >
              ✕
            </label>
            <div class="flex items-center justify-center font-black m-3 mb-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10 mr-3 text-red-600 animate-pulse"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clip-rule="evenodd"
                />
              </svg>
              <h1 class="tracking-wide text-3xl text-gray-900">
                Donate for people
              </h1>
            </div>
            <form
              id="login_form"
              onSubmit={handleSubmit(onSubmit)}
              action="api_login"
              method="POST"
              class="flex flex-col justify-center"
            >
              <div class="flex justify-between items-center mb-3">
                <div class="inline-flex items-center self-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8 mr-3 bg-gradient-to-r from-pink-600 to-red-600 shadow-lg rounded p-1.5 text-gray-100"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M13 7H7v6h6V7z" />
                    <path
                      fill-rule="evenodd"
                      d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="font-bold text-gray-900">$5 / Core</span>
                </div>
                <div class="flex">
                  <button
                    type="button"
                    onClick={decrease}
                    class="bg-yellow-600 p-1.5 font-bold rounded"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>

                  <input
                    id="item_count"
                    type="number"
                    {...register("price", {
                      required: {
                        value: true,
                      },
                    })}
                    onChange={handleInput}
                    value={counterDinner}
                    class="max-w-[100px] font-bold font-mono py-1.5 px-2 mx-1.5
            block border border-gray-300 rounded-md text-sm shadow-sm  placeholder-gray-400
            focus:outline-none
            focus:border-sky-500
            focus:ring-1
            focus:ring-sky-500
            focus:invalid:border-red-500  focus:invalid:ring-red-500"
                  />

                  <button
                    type="button"
                    onClick={increase}
                    class="bg-green-600 p-1.5 font-bold rounded"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <label class="text-sm font-medium">Name</label>
              <input
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },
                })}
                class="mb-3 px-2 py-1.5
          mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
          focus:outline-none
          focus:border-sky-500
          focus:ring-1
          focus:ring-sky-500
          focus:invalid:border-red-500 focus:invalid:ring-red-500"
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />

              <label class="text-sm font-medium">Email</label>
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "email is Required",
                  },
                })}
                class="mb-3 px-2 py-1.5
          mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
          focus:outline-none
          focus:border-sky-500
          focus:ring-1
          focus:ring-sky-500
          focus:invalid:border-red-500 focus:invalid:ring-red-500"
                type="text"
                name="email"
                placeholder="Noob@example.com"
                required
              />

              <label class="text-sm font-medium">Messages</label>
              <textarea
                {...register("details", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },
                })}
                class="
          mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
          focus:outline-none
          focus:border-sky-500
          focus:ring-1
          focus:ring-sky-500
          focus:invalid:border-red-500 focus:invalid:ring-red-500"
                name="details"
                placeholder="Write something"
              ></textarea>
              <button
                class="px-4 py-1.5 rounded-md shadow-lg bg-gradient-to-r from-pink-600 to-red-600 font-medium text-gray-100 block transition duration-300"
                type="submit"
              >
                <span id="login_process_state" class="hidden">
                  Sending :)
                </span>
                <span id="login_default_state">
                  Donate<span id="subtotal"> ${counterDinner}</span>
                </span>
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AffectedPeople;
