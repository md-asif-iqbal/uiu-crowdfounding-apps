import React, { useState } from "react";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
const JoinWIthUs = () => {
  const [user] = useAuthState(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const url = `https://uiu-crowdfounding-apps.herokuapp.com/vlounteer`;
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
      });
  };

  return (
    <div>
      <div className="relative bg-purple-900">
        <div className="absolute inset-x-0 bottom-0">
          <svg
            viewBox="0 0 224 12"
            fill="currentColor"
            className="w-full -mb-1 text-white"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
          </svg>
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
            <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
              Become a volunteer
              <br className="hidden md:block" />
              with Our Team
              <span className="relative inline-block px-2">
                <div className="absolute inset-0 transform -skew-x-12 bg-teal-accent-400" />
                <span className="relative text-rose-500">UIU</span>
              </span>
            </h2>
            <p className="mb-6 text-base text-indigo-100 md:text-lg">
              Volunteering can help you make friends, learn new skills, advance
              your career, and even feel happier and healthier. Learn how to
              find the right volunteer opportunity for you.
            </p>
            <form className="items-center w-full mb-4 md:flex-row md:px-16">
              {
                user? <label
                htmlFor="my-modal-191"
                className="inline-flex modal-button items-center justify-center w-full h-12 px-12 font-semibold tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-rose-600 hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none"
              >
                Join
              </label>:
              <Link to="/login">
              <label
              htmlFor="my-modal-191"
              className="inline-flex modal-button items-center justify-center w-full h-12 px-12 font-semibold tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-rose-600 hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none"
            >
               Join
            </label>
            </Link>
              }
            </form>
            <input type="checkbox" id="my-modal-191" className="modal-toggle" />
            <div class="flex modal h-screen ">
              <div class="m-auto modal-box">
                <div>
                  <label
                    htmlFor="my-modal-191"
                    className="btn btn-sm btn-circle absolute right-2 top-2"
                  >
                    ✕
                  </label>
                  <button
                    type="button"
                    class="relative mt-6 w-full flex justify-center items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize   bg-black rounded-md hover:bg-gray-900  focus:outline-none   transition duration-300 transform active:scale-95 ease-in-out"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      enable-background="new 0 0 24 24"
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                      fill="#FFFFFF"
                    >
                      <g>
                        <rect fill="none" height="24" width="24"></rect>
                      </g>
                      <g>
                        <g>
                          <path d="M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6V13z"></path>
                        </g>
                      </g>
                    </svg>
                    <span class="pl-2 mx-1">Volunteer Application Form</span>
                  </button>
                  <div class="mt-0 bg-white rounded-lg shadow">
                    <div class="flex">
                      <div class="flex-1 py-5 pl-5 overflow-hidden">
                        <svg
                          class="inline align-text-top"
                          height="24px"
                          viewBox="0 0 24 24"
                          width="24px"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#000000"
                        >
                          <g>
                            <path
                              d="m4.88889,2.07407l14.22222,0l0,20l-14.22222,0l0,-20z"
                              fill="none"
                              id="svg_1"
                              stroke="null"
                            ></path>
                            <path
                              d="m7.07935,0.05664c-3.87,0 -7,3.13 -7,7c0,5.25 7,13 7,13s7,-7.75 7,-13c0,-3.87 -3.13,-7 -7,-7zm-5,7c0,-2.76 2.24,-5 5,-5s5,2.24 5,5c0,2.88 -2.88,7.19 -5,9.88c-2.08,-2.67 -5,-7.03 -5,-9.88z"
                              id="svg_2"
                            ></path>
                            <circle
                              cx="7.04807"
                              cy="6.97256"
                              r="2.5"
                              id="svg_3"
                            ></circle>
                          </g>
                        </svg>
                        <h1 class="inline text-2xl font-semibold leading-none">
                          Sender
                        </h1>
                      </div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div class="px-5 pb-5">
                        <input
                          {...register("name", {
                            required: {
                              value: true,
                              message: "Name is Required",
                            },
                          })}
                          placeholder="Name"
                          class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                        />
                        <input
                          {...register("email", {
                            required: {
                              value: true,
                              message: "Email is Required",
                            },
                          })}
                          placeholder="Email"
                          required
                          class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                        />
                        <div class="flex">
                          <div class="flex-grow  pr-2">
                            <input
                              {...register("dept", {
                                required: {
                                  value: true,
                                  message: "Department is Required",
                                },
                              })}
                              placeholder="Department"
                              class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                            />
                          </div>
                          <div class="flex-grow">
                            <input
                              {...register("studentID", {
                                required: {
                                  value: true,
                                  message: "StudentID is Required",
                                },
                              })}
                              placeholder="Student Id"
                              type="number"
                              class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                            />
                          </div>
                        </div>
                        <div class="flex">
                          <div class="flex-grow  pr-2">
                            <input
                              {...register("address", {
                                required: {
                                  value: true,
                                  message: "address is Required",
                                },
                              })}
                              placeholder="Address"
                              class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                            />
                          </div>
                          <div class="flex-grow">
                            <input
                              {...register("number", {
                                required: {
                                  value: true,
                                  message: "Number is Required",
                                },
                              })}
                              placeholder="Number"
                              type="number"
                              class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                            />
                          </div>
                        </div>
                        <h1 className="mt-2 font-semibold">Days of Work</h1>
                        <div className="flex gap-5">
                          <div class="flex items-center pt-3">
                            <input
                              {...register("day1", {})}
                              type="checkbox"
                              value="Saturday"
                              class="w-4 h-4 text-black bg-gray-300 border-none rounded-md focus:ring-transparent"
                            />
                            <label
                              for="safeAdress"
                              class="block ml-2 text-sm text-gray-900"
                            >
                              Saturday
                            </label>
                          </div>
                          <div class="flex items-center pt-3">
                            <input
                              type="checkbox"
                              {...register("day2", {})}
                              value="Sunday"
                              class="w-4 h-4 text-black bg-gray-300 border-none rounded-md focus:ring-transparent"
                            />
                            <label
                              for="safeAdress"
                              class="block ml-2 text-sm text-gray-900"
                            >
                              Sunday
                            </label>
                          </div>
                          <div class="flex items-center pt-3">
                            <input
                              type="checkbox"
                              {...register("day3", {})}
                              value="Monday"
                              class="w-4 h-4 text-black bg-gray-300 border-none rounded-md focus:ring-transparent"
                            />
                            <label
                              for="safeAdress"
                              class="block ml-2 text-sm text-gray-900"
                            >
                              Monday
                            </label>
                          </div>
                          <div class="flex items-center pt-3">
                            <input
                              type="checkbox"
                              {...register("day4", {})}
                              value="Tuesday"
                              class="w-4 h-4 text-black bg-gray-300 border-none rounded-md focus:ring-transparent"
                            />
                            <label
                              for="safeAdress"
                              class="block ml-2 text-sm text-gray-900"
                            >
                              Tuesday
                            </label>
                          </div>
                        </div>
                        <div className="flex gap-5">
                          <div class="flex items-center pt-3">
                            <input
                              type="checkbox"
                              {...register("day5", {})}
                              value="Wednesday"
                              class="w-4 h-4 text-black bg-gray-300 border-none rounded-md focus:ring-transparent"
                            />
                            <label
                              for="safeAdress"
                              class="block ml-2 text-sm text-gray-900"
                            >
                              Wednesday
                            </label>
                          </div>
                          <div class="flex items-center pt-3">
                            <input
                              type="checkbox"
                              {...register("day6", {})}
                              value="Thursday"
                              class="w-4 h-4 text-black bg-gray-300 border-none rounded-md focus:ring-transparent"
                            />
                            <label
                              for="safeAdress"
                              class="block ml-2 text-sm text-gray-900"
                            >
                              Thursday
                            </label>
                          </div>
                          <div class="flex items-center pt-3">
                            <input
                              type="checkbox"
                              value="Friday"
                              {...register("day7", {})}
                              class="w-4 h-4 text-black bg-gray-300 border-none rounded-md focus:ring-transparent"
                            />
                            <label
                              for="safeAdress"
                              class="block ml-2 text-sm text-gray-900"
                            >
                              Friday
                            </label>
                          </div>
                        </div>
                      </div>
                      <div class="flex">
                        <div class="flex-none pt-2.5 pr-2.5 pl-1"></div>
                      </div>
                      <div class="px-5 pb-5">
                        <h1 className="font-bold">
                          Skillsets or Area of Interest
                        </h1>
                        <textarea
                          {...register("skillset", {
                            required: {
                              value: true,
                            },
                          })}
                          placeholder="Skillsets or Area of Interest"
                          class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                        />
                      </div>
                      <div class="flex flex-row-reverse p-3">
                        <div class="flex-initial pl-3">
                          <button
                            type="submit"
                            class="flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize   bg-black rounded-md hover:bg-gray-800  focus:outline-none focus:bg-gray-900  transition duration-300 transform active:scale-95 ease-in-out"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="24px"
                              viewBox="0 0 24 24"
                              width="24px"
                              fill="#FFFFFF"
                            >
                              <path d="M0 0h24v24H0V0z" fill="none"></path>
                              <path
                                d="M5 5v14h14V7.83L16.17 5H5zm7 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-8H6V6h9v4z"
                                opacity=".3"
                              ></path>
                              <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"></path>
                            </svg>
                            <span class="pl-2 mx-1">Submit</span>
                          </button>
                        </div>

                        <div class="flex-initial">
                          <label
                            htmlFor="my-modal-191"
                            type="button"
                            class="flex items-center px-5 py-2.5 font-medium tracking-wide text-black capitalize rounded-md  hover:bg-red-200 hover:fill-current hover:text-red-600  focus:outline-none  transition duration-300 transform active:scale-95 ease-in-out"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="24px"
                              viewBox="0 0 24 24"
                              width="24px"
                            >
                              <path d="M0 0h24v24H0V0z" fill="none"></path>
                              <path d="M8 9h8v10H8z" opacity=".3"></path>
                              <path d="M15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"></path>
                            </svg>
                            <span class="pl-2 mx-1">Delete</span>
                          </label>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="/"
              aria-label="Scroll down"
              className="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="currentColor"
              >
                <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinWIthUs;
