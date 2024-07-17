import React from "react";
import { VscAccount } from "react-icons/vsc";
import Portfolio from "./Portfolio";
import Chart_history from "./Chart_history";
import Details from "./Details";

const Right_Deshboard = () => {
  return (
    <div className="bg-[#C9D6B9]  flex-1">
      <div className="bg-white px-28 justify-between items-center flex h-16">
        <h1 className=" font-[800] text-3xl text-[#000000]">Dashboard</h1>
        <VscAccount className="h-12 w-12" />
      </div>
      <div className="px-28 ">
        <Portfolio></Portfolio>
        <Chart_history></Chart_history>
        <Details></Details>
      </div>
    </div>
  );
};

export default Right_Deshboard;
