import React, { useEffect, useState } from "react";

const RequestForLoan = () => {
  const [allLoans, setAllLoans] = useState([]);
  useEffect(() => {
    fetch("https://uiu-crowdfounding-apps.herokuapp.com/allloans")
      .then((res) => res.json())
      .then((data) => setAllLoans(data));
  }, []);
  return (
    <div>
      <section className="py-6 text-gray-400">
        <div className="container mx-auto p-4 sm:p-10">
          <div className="grid max-w-md grid-cols-1 gap-6 mx-auto auto-rows-fr lg:max-w-full lg:gap-2 xl:gap-6 lg:grid-cols-3">
            {allLoans.map((item) => (
              <div className="relative flex flex-col items-center p-8 border-2 rounded-md border-violet-400 bg-gray-800">
                <span className="absolute  top-0 px-6 pt-1 pb-2 font-medium rounded-b-lg bg-violet-400 text-gray-900">
                  {item.cause}
                </span>
                <p className="flex items-center justify-center my-6 space-x-2 font-bold">
                  <span className="pb-2 text-4xl">{item.name}</span>
                </p>
                <ul className="flex-1 text-start space-y-2">
                  <li className="flex items-center space-x-2">
                    <span>Student Id: {item.id}</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span>Department: {item.dept}</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span>Number: {item.number}</span>
                  </li>

                  <li className="flex items-center space-x-2">
                    <span>Gender:{item.gender}</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span>Address: {item.address}</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span>Amount: ${item.amount}</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span>Return Date: {item.returndate}</span>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RequestForLoan;
