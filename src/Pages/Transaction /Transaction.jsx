import React from "react";
import { VscAccount } from "react-icons/vsc";
import { RiDownload2Line } from "react-icons/ri";

const Transaction = () => {
  return (
    <div className="bg-[#C9D6B9] flex-1">
      <div className="bg-white  px-28 justify-between items-center flex h-16">
        <h1 className=" font-[800]  text-3xl text-[#000000]">Transaction</h1>
        <VscAccount className="h-12 w-12" />
      </div>
      <div className=" px-28  relative mt-4">
        <div className="flex justify-end">
          <button className="px-4 right-28 top-0 flex items-center gap-2 py-2 bg-purple-900 rounded-xl text-white hover:bg-purple-600">
            <RiDownload2Line />
            Export Csv
          </button>
        </div>
        <div className="mt-6 rounded-xl bg-white  p-5">
          <div className=" flex justify-between">
            <nav className="flex   ">
              <ul className="border-b-2 border-purple-700  px-8">All</ul>
              <ul className=" px-8">Withdraw</ul>
              <ul className=" px-8">Deposit</ul>
              <ul className=" px-8">Trade</ul>
            </nav>
            <input
              className="outline-none p-2 rounded-xl"
              type="text"
              placeholder="Search By Id"
            />
          </div>
          <div className=" mt-3">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-4 px-4 border-b-2 text-left text-gray-600 font-semibold">
                      ID
                    </th>
                    <th className="py-4 px-4 border-b-2 text-left text-gray-600 font-semibold">
                      Date & Time
                    </th>
                    <th className="py-4 px-4 border-b-2 text-left text-gray-600 font-semibold">
                      Type
                    </th>
                    <th className="py-4 px-4 border-b-2 text-left text-gray-600 font-semibold">
                      Amount
                    </th>
                    <th className="py-4 px-4 border-b-2 text-left text-gray-600 font-semibold">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-100">
                    <td className="py-4 px-4 border-b">HDB2NA2H</td>
                    <td className="py-4 px-4 border-b flex flex-col">
                      2022-06-09 <p>07:06 PM</p>
                    </td>
                    <td className="py-4 px-4 border-b">INR Deposit</td>
                    <td className="py-4 px-4 border-b text-green-600">
                      + ₹81,123.10
                    </td>
                    <td className="py-4 px-4 border-b">
                      <span className="bg-yellow-200 text-yellow-800 py-1 px-3 rounded-full text-xs">
                        Pending
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="py-4 px-4 border-b">HDB2NA2H</td>
                    <td className="py-4 px-4 border-b flex flex-col">
                      2022-06-07 <p>02:48 PM</p>
                    </td>
                    <td className="py-4 px-4 border-b">INR Withdraw</td>
                    <td className="py-4 px-4 border-b text-red-600">
                      - ₹81,123.10
                    </td>
                    <td className="py-4 px-4 border-b">
                      <span className="bg-orange-200 text-orange-800 py-1 px-3 rounded-full text-xs">
                        Processing
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="py-4 px-4 border-b">HDB2NA2H</td>
                    <td className="py-4 px-4 border-b flex flex-col">
                      2022-06-04 <p>09:21 AM</p>
                    </td>
                    <td className="py-4 px-4 border-b">Buy</td>
                    <td className="py-4 px-4 border-b text-green-600">
                      + 12.48513391 BTC
                    </td>
                    <td className="py-4 px-4 border-b">
                      <span className="bg-red-200 text-red-800 py-1 px-3 rounded-full text-xs">
                        Cancelled
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="py-4 px-4 border-b">HDB2NA2H</td>
                    <td className="py-4 px-4 border-b flex flex-col">
                      2022-06-03 <p>01:32 PM</p>
                    </td>
                    <td className="py-4 px-4 border-b">Sell</td>
                    <td className="py-4 px-4 border-b text-red-600">
                      - 0.36401628 BTC
                    </td>
                    <td className="py-4 px-4 border-b">
                      <span className="bg-green-200 text-green-800 py-1 px-3 rounded-full text-xs">
                        Completed
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="py-4 px-4 border-b">HDB2NA2H</td>
                    <td className="py-4 px-4 border-b flex flex-col">
                      2022-06-03 <p>09:02 AM</p>
                    </td>
                    <td className="py-4 px-4 border-b">BTC Deposit</td>
                    <td className="py-4 px-4 border-b text-green-600">
                      + 4.13946104 BTC
                    </td>
                    <td className="py-4 px-4 border-b">
                      <span className="bg-green-200 text-green-800 py-1 px-3 rounded-full text-xs">
                        Completed
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="py-4 px-4 border-b">HDB2NA2H</td>
                    <td className="py-4 px-4 border-b flex flex-col">
                      2022-06-01 <p>01:56 PM</p>
                    </td>
                    <td className="py-4 px-4 border-b">BTC Withdraw</td>
                    <td className="py-4 px-4 border-b text-red-600">
                      - 10.00000000 BTC
                    </td>
                    <td className="py-4 px-4 border-b">
                      <span className="bg-green-200 text-green-800 py-1 px-3 rounded-full text-xs">
                        Completed
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Transaction;
