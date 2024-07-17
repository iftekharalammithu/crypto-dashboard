import React from "react";

import { BsCurrencyDollar } from "react-icons/bs";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

const Chart_history = () => {
  return (
    <div className="mt-8 gap-7 flex justify-between ">
      <div className=" relative h-90 bg-white p-4 rounded-xl flex-1">
        {/* chart Conmonent */}
        <div className=" flex justify-between items-center">
          <div className="gap-2 flex flex-col">
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
      <div className=" h-90 bg-white p-4 rounded-xl flex-1">
        <div className="text-xl">Recent Transaction</div>
        <div className="flex flex-col  mt-6 gap-4 ">
          <div className=" px-2  items-center flex justify-between h-14">
            <div className="flex items-center gap-1">
              <BsCurrencyDollar className="h-7 w-7" />
              <div>
                <p className="text-black text-lg font-[500]">Deposit</p>
                <span>2024-02-15 14:05:00</span>
              </div>
            </div>
            <div className="text-lg font-medium">+ 81,623</div>
          </div>
          <div className=" px-2  items-center flex justify-between h-14">
            <div className="flex items-center gap-1">
              <BsCurrencyDollar className="h-7 w-7" />
              <div>
                <p className="text-black text-lg font-[500]">Sell</p>
                <span>2024-02-15 14:05:00</span>
              </div>
            </div>
            <div className="text-lg font-medium">- 5.568457542</div>
          </div>
          <div className=" px-2 items-center flex justify-between h-14">
            <div className="flex items-center gap-1">
              <BsCurrencyDollar className="h-7 w-7" />
              <div>
                <p className="text-black text-lg font-[500]">Withdraw</p>
                <span>2024-02-15 14:05:00</span>
              </div>
            </div>
            <div className="text-lg font-medium">+ 81,623</div>
          </div>
          <div className=" items-center bg-[#C9D6B9] font-medium flex rounded-xl justify-center h-14">
            <button className="h-full rounded-xl w-full hover:bg-[#afbe8e]">
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart_history;
