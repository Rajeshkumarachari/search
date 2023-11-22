import React from "react";
import { SearchIcon, MicrophoneIcon } from "@heroicons/react/solid";
import {
  CEMARA_ICON,
  GOOGLE_APP_LOGO,
  GOOGLE_LOGO,
  MICROPHONE_ICON,
} from "../Utils/constant";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <header className=" flex w-full p-5 justify-between text-sm text-gray-700">
        <div></div>
        <div className="flex space-x-4 items-center ">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          <img
            className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer"
            src={GOOGLE_APP_LOGO}
            alt="GOOGLE_APP_LOGO"
          />
          <button className=" bg-blue-600 text-white px-7  py-2 rounded-md  text-base hover:bg-blue-700 shadow-lg">
            Sign in
          </button>
        </div>
      </header>
      <form className=" flex flex-col items-center  mt-2 flex-grow w-4/5">
        <img src={GOOGLE_LOGO} alt="google_logo" />
        <div className=" flex w-full mt-5 hover:shadow focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 text-center sm:max-w-xl lg:max-2xl:">
          <SearchIcon className=" h-5 mr-3 text-gray-500" />
          <input
            className=" focus:outline-none flex-grow  text-xl"
            type="text"
          />
          <img
            className="w-7 cursor-pointer"
            src={MICROPHONE_ICON}
            alt="microphone_icon"
          />
          <img className="w-7 cursor-pointer" src={CEMARA_ICON} alt="cemera" />
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:x-4">
          <button className="btn mx-3">Google Search</button>
          <button className="btn">I'm Feeling Lucky</button>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Home;
