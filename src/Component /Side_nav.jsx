import React from "react";
import { Link } from "react-router-dom";

const Side_nav = () => {
  return (
    <div className="text-purple-700  h-screen w-full  text-sm">
      <div>
        <h2 className="font-semibold ">@DOSOMECODING</h2>
      </div>
      <div>
        <div>
          <Link to="/">Deshboard</Link>
        </div>
        <div>
          <Link to="/transaction">Transaction</Link>
        </div>
      </div>
    </div>
  );
};

export default Side_nav;
