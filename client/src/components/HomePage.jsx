
import React from "react";
import flow from "./flow.jpg";
import logo from "./20220106_120910.png";
import logoW from "./logoWhite.png";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <div className="w-full h-screen  inset-0 relative flex-col sm:flex-row sm:flex">
        <div className="lg:w-2/5 md:w-5/12  w-full relative h-screen flex items-center justify-center bg-theme ">
          
          <div className="h-7 w-18  top-3.5 left-3.5 sm:hidden  absolute">
            <img className="w-full h-full " src={logoW} alt="logo" />
          </div>

          <h1 className="text-xl  lg:text-3xl sm:text-xl font-semibold text-white   ">
            Welcome to <br />
            <span className="text-4xl lg:text-4xl sm:text-3xl">P A C T S</span>
          </h1>
        </div>

        <div className="bg-white w-full h-full ">
          <div className="p-2 flex h-full flex-col gap-7 sm:gap-3 justify-center  sm:justify-center items-center mt-0 pt-0">
            
          <div className="h-10 md:h-7 md:w-24 lg:w-28 lg:h-10 lg:top-4  top-3.5 right-2.5 w-32 mr-8 hidden md:block  absolute">
                <Link to={`/`}>
                <img className="w-full h-full   " src={logo} alt="" />

                </Link>
              </div>

            <div className="flex items-center justify-center px-4 md:px-12 lg:px-28">
              <h3 className="text-theme font-bold text-lg md:text-xl lg:text-2xl text-center">
              Do you have an unsolved  business problem or need ideas to grow your business?
              </h3>
            </div>

            <div className=" sm:p-5  h-36 md:h-64 lg:p-0 overflow-hidden  flex items-center justify-center m-1 lg:m-5">
              <img src={flow} alt="" className=" h-full" />
            </div>

            <div className="flex items-center justify-center px-5 sm:px-20 lg:px-40 mb-2">
              <h3 className="text-theme font-normal text-md md:text-lg lg:text-xl font-sans text-center ">
              Let us know what’s on your mind & we’ll offer the best solution.
              </h3>
            </div>
            <Link to={"/select"}>
              <button className="px-4 py-3 bg-theme text-center rounded w-auto text-sm sm:text-lg   font-medium text-white ">
                Let's Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
