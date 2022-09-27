import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Loan = () => {
  const [user] = useAuthState(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const url = `https://uiu-crowdfounding-apps.herokuapp.com/requestloan`;
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
  let medical = <span>REQUEST FOR MEDICAL LOAN</span>;
  let financial = <span>REQUEST FOR FINANCIAL LOAN</span>;

  return (
    <div>
      <section class="relative bg-center bg-no-repeat bg-cover bg-[url(https://educations.pk/blog/wp-content/uploads/2021/09/student-loan.png)]">
        <div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

        <div class="relative px-4 py-32 mx-auto ml-5 max-w-screen-xl sm:px-6 lg:px-8 lg:h-screen lg:items-center lg:flex">
          <div class="max-w-xl text-center sm:text-left">
            <h1 class="text-3xl font-extrabold sm:text-5xl">
              REQUEST FOR LOAN
              <strong class="block text-2xl font-extrabold text-rose-700">
                Only For UIU Students
              </strong>
            </h1>

            <p class="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
              A student can get loan for their financial or medical issue
            </p>
          </div>
        </div>
      </section>
      {/* second-part */}
      <div>
        <div className="relative flex mt-20 flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0 ">
          <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
            <div className="mb-16 lg:my-42 lg:max-w-lg lg:pr-5">
              <div className="max-w-xl mb-6">
                <div>
                  <p className="inline-block px-3 py-2  mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
                    Financial Issue
                  </p>
                </div>
                <p className="text-start text-gray-700 md:text-lg">
                  We know that,in every trimester students need to pay a huge
                  amount of money for their study purpose. Sometime students are
                  unable to collect money from their family for their financial
                  problem.In this time a student can apply for a financial
                  loan.We will try to collect money from our students and give
                  them a Loan so that they can continue their trimester.After
                  solving their financial problem they will give the money back
                  and we return money from whom we took money.
                </p>
              </div>
              <div className="flex flex-col items-center md:flex-row">
                {user ? (
                  <label
                    htmlFor="my-modal-2"
                    className="inline-flex  items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-purple-600 uppercase hover:bg-rose-600 focus:shadow-outline focus:outline-none"
                  >
                    {financial}
                  </label>
                ) : (
                  <label
                    htmlFor="my-modal-2"
                    className="inline-flex  items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-purple-600 uppercase hover:bg-rose-600 focus:shadow-outline focus:outline-none"
                  >
                    <Link to="/login">{financial}</Link>
                  </label>
                )}
              </div>
            </div>
          </div>
          <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
            <img
              className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
              src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
          </div>
        </div>

        {/* second part */}
        <div className="relative flex flex-col-reverse px-4 py-16 mx-auto lg:block lg:flex-col lg:py-32 xl:py-32 md:px-8 sm:max-w-xl md:max-w-full">
          <div className="z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
            <img
              src="https://media.istockphoto.com/photos/beautiful-young-asian-girl-doctor-with-a-notebook-for-records-on-a-picture-id1200980407?k=20&m=1200980407&s=612x612&w=0&h=9AQIf7tqRfuptTmHLWGNN2fNdZvV75L3yokYnE2R2Oo="
              className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
              alt=""
            />
          </div>
          <div className="relative flex justify-end max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl">
            <div className="mb-16  lg:pr-5 lg:max-w-lg lg:mb-0">
              <div className="max-w-xl mb-6 ml-20">
                <div>
                  <p className="inline-block px-3 py-2  mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
                    Medical issues
                  </p>
                </div>

                <p className="text-start  text-gray-700 md:text-lg">
                  Sometime student have limited savings, and this savings are
                  not enough for their medical treatment.In this time they can
                  apply for a medical loan.We will try to collect money from our
                  students and give them a Loan so that they can get proper
                  treatment.when they return the money we will return money from
                  whom we took money.
                </p>
              </div>
              <form>
                <div className="flex items-center mt-4 ml-24">
                  {user ? (
                    <label
                      type="submit"
                      htmlFor="my-modal-2"
                      className="inline-flex uppercase items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-700 hover:bg-rose-600 focus:shadow-outline focus:outline-none"
                    >
                      {medical}
                    </label>
                  ) : (
                    <label
                      type="submit"
                      htmlFor="my-modal-2"
                      className="inline-flex uppercase items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-700 hover:bg-rose-600 focus:shadow-outline focus:outline-none"
                    >
                      <Link to="/login">{medical}</Link>
                    </label>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <input type="checkbox" id="my-modal-2" className="modal-toggle" />
      <div class="min-h-screen bg-transparent py-6 flex flex-col justify-center modal sm:py-12">
        <div class="relative py-1 sm:max-w-xl sm:mx-auto">
          <div class="relative px-4 py-5 bg-gray-200 mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
            <div class="max-w-md mx-auto">
              <div class="flex items-center space-x-5">
                <div class="block  font-bold text-xl mx-auto text-gray-700">
                  <h2 class="leading-relaxed">Request for Loan</h2>
                </div>
              </div>
              <div class="divide-y divide-gray-200">
                <div class="py-2 text-base leading-6 space-y-1 text-gray-700 sm:text-lg sm:leading-7">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex w-full gap-10">
                      <div class="flex flex-col">
                        <label class="leading-loose">Name</label>
                        <input
                          type="text"
                          {...register("name", {
                            required: {
                              value: true,
                              message: "Name is Required",
                            },
                          })}
                          class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder="Enter your Name"
                        />
                      </div>
                      <div class="flex flex-col">
                        <label class="leading-loose">Email</label>
                        <input
                          type="text"
                          {...register("email", {
                            required: {
                              value: true,
                              message: "email is Required",
                            },
                          })}
                          class="px-7 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder="Enter your E-mail"
                        />
                      </div>
                    </div>
                    <div className="flex w-full gap-10">
                      <div class="flex flex-col">
                        <label class="leading-loose">Department</label>
                        <input
                          type="text"
                          {...register("dept", {
                            required: {
                              value: true,
                              message: "Department is Required",
                            },
                          })}
                          class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder="Dept Name"
                        />
                      </div>
                      <div class="flex flex-col">
                        <label class="leading-loose">ID</label>
                        <input
                          type="nnumber"
                          {...register("id", {
                            required: {
                              value: true,
                              message: "Id is Required",
                            },
                          })}
                          class="px-7 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder="Enter your varsity Id no."
                        />
                      </div>
                    </div>
                    <div className="flex w-full gap-10">
                      <div class="flex flex-col">
                        <label class="leading-loose">Address</label>
                        <input
                          type="text"
                          {...register("address", {
                            required: {
                              value: true,
                              message: "address is Required",
                            },
                          })}
                          class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder="Dept Name"
                        />
                      </div>
                      <div class="flex flex-col">
                        <label class="leading-loose">Number</label>
                        <input
                          type="number"
                          {...register("number", {
                            required: {
                              value: true,
                              message: "number is Required",
                            },
                          })}
                          class="px-7 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder="Enter your varsity Id no."
                        />
                      </div>
                    </div>
                    <div className="flex w-full gap-10">
                      <div class="flex flex-col">
                        <label class="leading-loose">Date of Return</label>
                        <input
                          type="Date"
                          {...register("returndate", {
                            required: {
                              value: true,
                              message: "Return is Required",
                            },
                          })}
                          class="px-8 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder="Dept Name"
                        />
                      </div>
                      <div class="flex flex-col">
                        <label class="leading-loose">Gender</label>
                        <select
                          {...register("gender", {
                            required: {
                              value: true,
                              message: "Gender is Required",
                            },
                          })}
                          className="select px-14 py-1 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600 select-bordered w-full max-w-xs"
                        >
                          <option disabled selected>
                            Selected Gender
                          </option>
                          <option>Male </option>
                          <option>Female</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex w-full gap-10">
                      <div class="flex flex-col">
                        <label class="leading-loose">Loan Amount</label>
                        <input
                          type="number"
                          {...register("amount", {
                            required: {
                              value: true,
                              message: "Amount is Required",
                            },
                          })}
                          class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder="Dept Name"
                        />
                      </div>
                      <div class="flex flex-col">
                        <label class="leading-loose">Cause</label>
                        <input
                          type="text"
                          {...register("cause", {
                            required: {
                              value: true,
                              message: "Cause is Required",
                            },
                          })}
                          class="px-7 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder="Why you need loan..."
                        />
                      </div>
                    </div>
                    <div class="pt-4 flex items-center space-x-4">
                      <label
                        htmlFor="my-modal-2"
                        class="flex hover:bg-gray-300 justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none"
                      >
                        <svg
                          class="w-6 h-6 mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                          ></path>
                        </svg>{" "}
                        Cancel
                      </label>
                      <button class="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">
                        Request
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px- py-2  mb-4 text-xs font-bold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
              Benefited Students
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"></h2>
        </div>
        <div className="grid max-w-sm gap-5 mb-8 lg:grid-cols-3 sm:mx-auto lg:max-w-full">
          <div className="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20">
            <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
              20 Nov 2020
            </p>
            <a
              href="/"
              className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
              aria-label="Read article"
              title="Nori grape silver beet broccoli kombu beet"
            >
              Name: Md.Riazul Islam
            </a>
            <p className="max-w-xs mx-auto mb-2 text-gray-700">
              Reason for loan: Medical purpose loan
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Read more
            </a>
          </div>
          <div className="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20">
            <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
              20 Apl 2020
            </p>
            <a
              href="/"
              className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
              aria-label="Read article"
              title="Well, the way they make shows is, they make one"
            >
              Name: Mahidul Raju
            </a>
            <p className="max-w-xs mx-auto mb-2 text-gray-700">
              Reason for loan: Study purpose loan.
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Read more
            </a>
          </div>
          <div className="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20">
            <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
              10 Dec 2020
            </p>
            <a
              href="/"
              className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
              aria-label="Read article"
              title="Pommy ipsum smeg head whizz morris himer due"
            >
              Name: Md.Akib Mia
            </a>
            <p className="max-w-xs mx-auto mb-2 text-gray-700">
              Reason for loan: Study purpose loan.
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loan;
