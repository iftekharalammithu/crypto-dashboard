import React from "react";
import Side_nav from "../../Component /Side_nav";
import Right_Deshboard from "../../Component /Right_Deshboard";

const Deshboard = () => {
  return (
    <div className="flex h-screen ">
      <div className="w-[15%] pt-[54px] pl-[28px] custom-border">
        <Side_nav></Side_nav>
      </div>
      <div className="w-[85%]">
        <Right_Deshboard></Right_Deshboard>
      </div>
    </div>
  );
};

export default Deshboard;
