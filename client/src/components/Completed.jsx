
import React from "react";
import chat from "./chat.png";
import logo from "./20220106_120910.png";
import logoW from "./logoWhite.png";
import { Link } from "react-router-dom";
import {AiFillCheckCircle} from 'react-icons/ai'
import {GiSmartphone} from 'react-icons/gi'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'

function Completed() {
  return (
    <>
    <div className="w-full h-screen  inset-0 relative flex-col sm:flex-row sm:flex">
      <div className="lg:w-2/5 md:w-5/12  w-full relative h-screen flex items-center justify-center bg-theme ">
          <div className="h-7 w-18  top-3.5 left-3.5 sm:hidden  absolute">
            <img className="w-full h-full " src={logoW} alt="logo" />
          </div>

            <div className="w-full h-full lg:p-10 lg:px-5 p-3 flex items-center justify-center gap-2 lg:gap-3 text-white flex-col ">
                <span className=" text-5xl lg:text-6xl"><AiFillCheckCircle /></span>
                <h3 className="lg:text-2xl text-lg font-semibold">Completed</h3>
                <p className="lg:text-base text-xs">You can reach us at</p>
                <p className="lg:text-base text-xs"><GiSmartphone/> 8010768815 / 9819652514</p>
                <span className="lg:text-4xl text-2xl "><AiFillLinkedin/> <AiFillFacebook/></span>
            </div>
        </div>

        <div className="bg-white w-full h-full ">
          <div className="p-2 flex h-full flex-col gap-7 sm:gap-3 justify-center  sm:justify-center items-center mt-0 pt-0">
            
          <div className="h-10 md:h-7 md:w-24 top-3.5 right-2.5 w-32 mr-8 hidden md:block  absolute">
                <Link to={`/`}>
                <img className="w-full h-full   " src={logo} alt="" />

                </Link>
              </div>

            <div className="flex items-center justify-center px-4 md:px-12 lg:px-28">
              <h3 className="text-theme font-bold text-lg md:text-xl lg:text-2xl text-center">
                Reference Id : 6824578925
              </h3>
            </div>

            <div className=" h-auto md:h-64 md:w-auto w-full p-0 overflow-hidden  flex items-center justify-center m-5">
              <img src={chat} alt="" className=" h-full w-full" />
            </div>

            <div className="flex items-center justify-center md:px-12 lg:px-32  ">
              <h3 className="text-theme font-normal text-md md:text-xl  font-sans text-center ">Your request has been submitted successfully, Our executive will get in touch with you shortly!
              </h3>
            </div>
            <Link to={"/"}>
              <button className="px-4 py-3 bg-theme text-center rounded text-sm lg:text-lg font-medium mt-3 text-white ">
              Go back to website
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Completed;
