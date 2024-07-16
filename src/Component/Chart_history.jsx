import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

const Chart_history = () => {
  return (
    <div className="mt-8 gap-2 flex justify-between ">
      <div className=" relative h-90 bg-white p-4 rounded-xl flex-1">
        {/* chart Conmonent */}
        <div className=" flex justify-between items-center">
          <div className="gap-4 flex flex-col">
            <p>Current Price</p>
            <span className="flex font-[600] text-2xl text-black items-center">
              <BsCurrencyDollar />
              63,250
              <p className="ml-3 flex  items-center text-green-600">
                <MdArrowOutward />
                0.4%
              </p>
            </span>
          </div>
          <div className="gap-2 flex">
            <button className="px-4 flex items-center gap-2 py-2 bg-purple-900 rounded-xl text-white hover:bg-purple-600">
              <FaPlusCircle />
              BUY
            </button>
            <button className="px-4 flex items-center gap-2 py-2 bg-purple-900 rounded-xl text-white hover:bg-purple-600">
              <FaMinusCircle />
              SELL
            </button>
          </div>
        </div>
        <div className=" flex-1 h-60 justify-center items-center flex">
          Chart Not Available!
        </div>
      </div>
      <div className=" h-90 bg-white p-4 rounded-xl flex-1">History</div>
    </div>
  );
};

export default Chart_history;
