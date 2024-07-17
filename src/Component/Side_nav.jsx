import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";

const Side_nav = () => {
  return (
    <div className="w-64 ">
      <div className="mb-6  mt-14  mx-5">
        <h2 className="text-purple-900 font-bold text-xl">@DOSOMECODING</h2>
        <div className=" mt-5">
          <li className="list-none bg-[#C9D6B9] flex items-center gap-1 p-2 rounded-xl">
            <MdOutlineDashboardCustomize />

            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="list-none flex items-center gap-1  p-2 rounded-xl">
            <GrTransaction />

            <Link to="/transaction">Transaction</Link>
          </li>
          <div className="absolute pl-6 mb-6 bottom-0 left-0 w-full p-4">
            <button className="flex items-center text-gray-700">
              <FaUserCircle className="mr-2" />
              Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Side_nav;
