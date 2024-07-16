import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { CiBitcoin } from "react-icons/ci";
import { TbDownload } from "react-icons/tb";
import { HiOutlineUpload } from "react-icons/hi";

const Portfolio = () => {
  return (
    <div>
      <div className="h-28 custom-border flex justify-between items-center p-6 bg-white mt-8 rounded-xl">
        <div className="gap-4 flex flex-col">
          <p>Total Portfolio Value</p>
          <span className="flex gap-1 font-[600] text-2xl text-black items-center">
            <BsCurrencyDollar />
            1,245,000
          </span>
        </div>
        <div className="gap-4 flex flex-col">
          <p>Total Balance</p>
          <span className="flex font-[600] text-black gap-1 text-2xl items-center">
            125,000
            <CiBitcoin />
          </span>
        </div>
        <div className="gap-4 flex flex-col">
          <p>Last Transaction</p>
          <span className="flex font-[600] text-black text-2xl gap-1 items-center">
            0.1255485
            <CiBitcoin />
          </span>
        </div>
        <div className="gap-2 flex">
          <button className="px-4 flex items-center gap-1 py-2 bg-purple-900 rounded-xl text-white hover:bg-purple-600">
            <TbDownload />
            Deposit
          </button>
          <button className="px-4 flex items-center gap-1 py-2 bg-purple-900 rounded-xl text-white hover:bg-purple-600">
            <HiOutlineUpload />
            Withdraw
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
