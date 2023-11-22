import React, { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className=" grid w-full divide-y-[1px] divide-gray-300 bg-gray-100">
      <div className="px-8 py-3">
        <p>India</p>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-y-3 grid-flow-row-dense px-8 py-3">
        <div className=" float-left flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
          <p className="ptn">About</p>
          <p className="ptn">Advertising</p>
          <p className="ptn">Business</p>
          <p className="ptn">How Search works</p>
        </div>
        <div className=" float-right flex justify-center space-x-8 ml-auto  md:ml-auto">
          <p className="ptn">Privacy</p>
          <p className="ptn">Terms</p>
          <p className="ptn">Settings</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
