import React from "react";

const Details = () => {
  return (
    <div className="flex mt-8 h-32 gap-5 ">
      <div className="flex-1  rounded-lg p-4 bg-white">
        <button className="bg-purple-900 text-white rounded-xl text-sm p-1">
          Loan
        </button>
        <p className="mt-3 font-medium">
          Learn more about Loans – Keep your Bitcoin, access it’s value without
          selling it
        </p>
      </div>
      <div className="flex-1  bg-purple-900 rounded-lg p-4">
        <button className="bg-white text-purple-900 rounded-xl text-sm p-1">
          Contact
        </button>
        <p className="mt-3 text-white font-medium">
          Learn more about our real estate, mortgage, and corporate account
          services
        </p>
      </div>
    </div>
  );
};

export default Details;
