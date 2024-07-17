import React from "react";
import { VscAccount } from "react-icons/vsc";
import { MdOutlineMessage } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";

const Support = () => {
  return (
    <div className=" flex-1 bg-[#C9D6B9]">
      <div className="bg-white  px-28 justify-between items-center flex h-16">
        <h1 className=" font-[800]  text-3xl text-[#000000]">Support</h1>
        <VscAccount className="h-12 w-12" />
      </div>
      <div className=" rounded-lg  px-28">
        <div className="mt-5 rounded-lg bg-white flex justify-between">
          <div className="flex-1  p-2 gap-5 flex flex-col ">
            <MdOutlineMessage className="h-8 text-purple-900 w-8" />
            <h1 className="font-[800] text-3xl ">Contact US</h1>
            <p>
              Have a question or just want to know more? Feel free to reach out
              to us.
            </p>
          </div>
          <div className="flex-1 p-6 ">
            <div className="  bg-white  rounded-lg shadow-md">
              <p className="mb-6 font-bold text-gray-600">
                You will receive response within 24 hours of time of submit.
              </p>
              <form>
                <div className="flex mb-4">
                  <div className="w-1/2 mr-2">
                    <label className="block text-sm font-bold text-gray-700 ">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="James"
                      className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div className="w-1/2 ml-2">
                    <label className="block text-sm font-bold text-gray-700">
                      Surname
                    </label>
                    <input
                      type="text"
                      placeholder="Arthur"
                      className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-bold text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="name@mail.com"
                    className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-bold text-gray-700">
                    Message
                  </label>
                  <textarea
                    placeholder="Your Message"
                    className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  ></textarea>
                </div>
                <div className="mb-4 flex items-start">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 mr-2 h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                  />
                  <label className="text-sm text-gray-700">
                    I agree with
                    <a href="#" className="text-purple-600">
                      Terms & Conditions.
                    </a>
                  </label>
                </div>
                <div className="flex flex-col gap-2 space-x-2">
                  <button
                    type="submit"
                    className="w-full py-2 px-4 bg-gray-200 text-gray-500 rounded-lg hover:bg-gray-300 cursor-not-allowed"
                    disabled
                  >
                    Send a Message
                  </button>
                  <button
                    type="button"
                    className="w-full py-2 px-4 bg-gray-200 text-gray-500 rounded-lg font-extrabold hover:bg-gray-300"
                  >
                    Book a Meeting
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex bg-white  mt-24 rounded-xl">
          <div className="p-2 flex flex-col  gap-4  flex-1">
            <AiFillMessage className="h-7 w-7" />
            <h1 className="font-[800] text-3xl">Live Chat</h1>
            <p>Don’t have time to wait for the answer? Chat with us now.</p>
          </div>
          <div className="flex-1 p-3 bg-purple-900 rounded-xl">
            <button className=" rounded-lg font-medium text-sm mb-3 justify-start bg-white text-purple-900">
              Chat Bot
            </button>
            <h1 className="text-white">Chat with us now</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
