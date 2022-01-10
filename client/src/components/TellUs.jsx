import React,{useState} from "react";

import logo from "./20220106_120910.png";
import logoW from "./logoWhite.png";
import { Link } from "react-router-dom";
import { BiRightArrowAlt, BiLeftArrowAlt,BiUserPin } from "react-icons/bi";
import { MdOutlineEngineering } from "react-icons/md";
import {MdDone} from 'react-icons/md'
import {BsFileText, BsHeadset} from 'react-icons/bs'

function TellUs() {
  const [prblm, setPrblm]= useState('');
  const [input, setInput]= useState('');
  const [expOut, setExpOut]= useState('');
  const [output, setOutput]= useState('');


  async function submit(e) {
    // e.preventDefault();
  const detail = {
      "problemStatement": prblm,
      "input": input,
      "expectedOutput": expOut,
      "output": output,
  };

  console.log(detail);
}
  return (
    <>
      <div className="w-full h-screen  inset-0 relative flex-col sm:flex-row sm:flex">
      <div className="lg:w-2/5 md:w-1/2  w-full relative h-screen flex flex-col items-center justify-center bg-theme ">
          
          <div className="h-7 z-10 w-18  top-3.5 left-3.5 sm:hidden  absolute">
            <Link to={"/"}>
            <img className="w-full h-full " src={logoW} alt="logo" /></Link>
          </div>
        <div className="w-full relative h-screen flex flex-col items-center justify-center  p-9 sm:p-5 sm:py-5">
          <div className="lg:px-3 mb-4 md:mb-2">
            <h1 className="text-lg  lg:text-3xl sm:text-xl font-semibold text-white mb-2 ">STEP 2</h1>
            <p className="text-white text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              incidunt perspiciatis magni minus libero laudantium?
            </p>
          </div>

          <div className=" w-full lg:px-6 h-auto">
            <div className=" flex gap-2 mb-2 md:mt-3 lg:mt-4">
              <div className="flex flex-col gap-1 items-center justify-center">
                <div className="">
                  <h3 className="text-sm  h-6   w-6 border-2  text-center border-theme-lite rounded-full  items-center justify-center  text-theme-lite">
                    1
                  </h3>
                </div>
                <div className="w-0.5 h-10 border border-theme-lite border-dashed"></div>
              </div>

              <div className="flex flex-col gap-1">
                <div className=" text-sm md:text-xs lg:text-sm flex items-center text-theme-lite font-semibold">
                  <MdOutlineEngineering
                    style={{ fontSize: "1.3rem", marginRight: "5px" }}
                  />
                  <h3 className="">Select your required services</h3>
                </div>

                <p className="text-theme-lite text-xs ">
                Select the service required from the given list of services.
                </p>
              </div>
            </div>
            <div className=" flex gap-2 mb-2 ">
              <div className="flex flex-col gap-1 items-center justify-center">
                <div className="">
                  <h3 className="text-sm  h-6  w-6 border-2 text-center border-white rounded-full  items-center justify-center  text-white">
                    2
                  </h3>
                </div>
                <div className="w-0.5 h-10 border border-white border-dashed"></div>
              </div>

              <div className="flex flex-col gap-1">
                <div className=" text-sm md:text-xs lg:text-sm flex items-center text-white font-semibold">
                  <BsFileText
                    style={{ fontSize: "1.3rem", marginRight: "5px" }}
                  />
                  <h3 className="">Tell us your problem</h3>
                </div>

                <p className="text-white text-xs ">
                Let us know about the problem that you are have and their requirements
                </p>
              </div>
            </div>

            <div className=" flex gap-2 mb-2 ">
              <div className="flex flex-col gap-1 items-center justify-center">
                <div className="">
                  <h3 className="text-sm  h-6  w-6 border-2 text-center border-theme-lite rounded-full  items-center justify-center  text-theme-lite">
                    3
                  </h3>
                </div>
                <div className="w-0.5 h-10 border border-theme-lite border-dashed"></div>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex text-sm md:text-xs lg:text-sm items-center text-theme-lite font-semibold">
                  <BiUserPin
                    style={{ fontSize: "1.3rem", marginRight: "5px" }}
                  />
                  <h3 className="">Tell us about yourself</h3>
                </div>

                <p className="text-theme-lite text-xs ">
                Furnish the details of your company and contact informatin for communication
                </p>
              </div>
            </div>

            <div className=" flex gap-2 mb-2 ">
              <div className="flex flex-col gap-1 items-center justify-center">
                <div className="">
                  <h3 className="text-sm  h-6  w-6 border-2 text-center border-theme-lite flex items-center justify-center rounded-full  text-theme-lite">
                    <MdDone style={{}}/>
                  </h3>
                </div>
                <div className="w-0.5 h-10  border-theme-lite border-dashed"></div>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex text-sm md:text-xs lg:text-sm items-center text-theme-lite font-semibold">
                  <BsHeadset
                    style={{ fontSize: "1.3rem", marginRight: "5px" }}
                  />
                  <h3 className=" ">Get in touch with us</h3>
                </div>

                <p className="text-theme-lite text-xs ">
                Your request will be assigned a reference Id and our executive will get in touch with you.
                </p>
              </div>
            </div>
          </div>
    </div>

          
        </div>

        {/* -------------------------------------------------------------------------- */}

        <div className="bg-white w-full md:h-full h-auto   md:overflow-scroll ">
          <div className="p-2 flex h-auto flex-col gap-7 sm:gap-3 justify-center relative items-center mt-0 pt-0">
            
          <div className="h-10 md:h-7 md:w-24 top-3.5 right-2.5 w-32 mr-8 hidden md:block  absolute">
                <Link to={`/`}>
                <img className="w-full h-full   " src={logo} alt="" />

                </Link>
              </div>
            <div className="w-full h-full px-4 mt-5 md:mt-7 lg:px-7">
              <div className="flex items-start justify-start w-full pl-0">
                <h3 className="text-theme lg:font-bold font-semibold text-lg lg:text-2xl text-left ">
                  Tell us your problem
                </h3>
              </div>

              <form className="mt-2 " action="#" method="POST">
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="rounded-md shadow-sm flex flex-col gap-1.5 md:gap-2.5  lg:gap-4 ">
                  <div>
                    <label htmlFor="statement" className="text-theme text-xs lg:text-sm ">
                      Problem statement
                    </label>
                    <textarea
                        value={prblm}
                        onChange={(e) => setPrblm(e.target.value)}
                      id="statement"
                      name="state"
                      type="text"
                      autoComplete="state"
                      required
                      className="appearance-none  resize-none  relative flex flex-wrap justify-center w-full md:p-3 p-2 h-20  border border-theme  placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-xs lg:text-sm"
                      placeholder="Sample problem: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores sapiente vitae, doloremque error eaque architecto pariatur dolorum!"
                    />
                  </div>

                  <div className="flex flex-col lg:flex-row md:gap-2.5 gap-1.5 lg:gap-5">
                    <div className="lg:w-1/2">
                      <label
                        htmlFor="full-name"
                        className="text-theme text-xs lg:text-sm "
                      >
                       Type of Input
                      </label>

                      <select
                        id="cars"
                        name="cars"
                        class="appearance-none rounded-md relative block w-full md:p-2 p-1.5 lg:p-3 border border-theme  placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-xs lg:text-sm"
                      >
                        <option value="type1">type1</option>
                        <option value="type2">type2</option>
                        <option value="type3">type3</option>
                        <option value="type3">type3</option>
                      </select>
                    </div>
                    <div className="lg:w-1/2 ">
                      <label
                        htmlFor="inputt"
                        className="text-theme text-xs lg:text-sm "
                      >
                        Other Inputs (if any)
                      </label>
                      <input
                          value={input}
                          onChange={(e) => setInput(e.target.value)}
                        id="inputt"
                        name="text"
                        type="text"
                        autoComplete="text"
                        required
                        className="appearance-none  relative block w-full md:p-2 p-1.5 lg:p-3 border border-theme  placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-xs lg:text-sm"
                        placeholder="Specify other inputs"
                      />
                    </div>
                  </div>

                  <div className="w-full md:flex-row md:gap-3 gap-1.5 flex flex-col items-start md:items-center">
                    <label htmlFor="image" className="text-theme text-xs lg:text-sm ">
                    Upload Your Sample  
                    </label>
                    <input
                      //   value={email}
                      //   onChange={(e) => setEmail(e.target.value)}
                      id="image"
                      name="email"
                      type="file"
                      autoComplete="email"
                      className="appearance-none  relative block file:px-3 file:bg-white file: w-auto  file:py-1 file:border  file:border-gray-500  placeholder-gray-500 file:text-gray-500 file:rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-xs lg:text-sm"
                      placeholder="Enter type of business.."
                    /> <button type="submit" className="lg:px-6 px-3 text-xs  bg-white  lg:text-md font-semibold py-1 border border-theme rounded-lg">Upload</button>
                  </div>

                  <div className="mt-1 md:mt-0 w-full h-auto bg-b-th  flex items-center py-1 px-2 text-xs md:text-sm text-theme rounded-lg  border-l-4 border-theme ">
                  Note : The uploaded file wil be saved privately and it will be deleted automatically once solution is provided
                  </div>




                  <div>
                    <label htmlFor="statement" className="text-theme text-xs lg:text-sm ">
                    Expected Output
                    </label>
                    <textarea
                        value={expOut}
                        onChange={(e) => setExpOut(e.target.value)}
                      id="statement"
                      name="state"
                      type="text"
                      autoComplete="state"
                      required
                      className="appearance-none  resize-none  relative flex flex-wrap justify-center w-full md:p-3 p-2 h-20  border border-theme  placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-xs lg:text-sm"
                      placeholder="Sample problem: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores sapiente vitae, doloremque error eaque architecto pariatur dolorum!"
                    />
                  </div>

                  <div className="flex flex-col lg:flex-row md:gap-2.5 gap-1.5 lg:gap-5">
                    <div className="lg:w-1/2">
                      <label
                        htmlFor="full-name"
                        className="text-theme text-xs lg:text-sm "
                      >
                        Type of Output
                      </label>

                      <select
                        id="cars"
                        name="cars"
                        class="appearance-none rounded-md relative block w-full md:p-2 p-1.5 lg:p-3 border border-theme  placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-xs lg:text-sm"
                      >
                        <option value="type1">type1</option>
                        <option value="type2">type2</option>
                        <option value="type3">type3</option>
                        <option value="type3">type3</option>
                      </select>
                    </div>
                    <div className="lg:w-1/2 ">
                      <label
                        htmlFor="output"
                        className="text-theme text-xs lg:text-sm "
                      >
                        Other Outputs (if any)
                      </label>
                      <input
                          value={output}
                          onChange={(e) => setOutput(e.target.value)}
                        id="output"
                        name="text"
                        type="text"
                        autoComplete="text"
                        required
                        className="appearance-none  relative block w-full md:p-2 p-1.5 lg:p-3 border border-theme  placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-xs lg:text-sm"
                        placeholder="Specify other outputs"
                      />
                    </div>
                  </div>

                  <div className="w-full md:flex-row md:gap-3 gap-1.5 flex flex-col items-start md:items-center">
                    <label htmlFor="image" className="text-theme text-xs lg:text-sm ">
                    Upload Your Sample  
                    </label>
                    <input
                      //   value={email}
                      //   onChange={(e) => setEmail(e.target.value)}
                      id="image"
                      name="email"
                      type="file"
                      autoComplete="email"
                      className="appearance-none  relative block file:px-3 file:bg-white file: w-auto  file:py-1 file:border  file:border-gray-500  placeholder-gray-500 file:text-gray-500 file:rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-xs lg:text-sm"
                      placeholder="Enter type of business.."
                    /> <button type="submit" className="lg:px-6 px-3 text-xs  bg-white  lg:text-md font-semibold py-1 border border-theme rounded-lg">Upload</button>
                  </div>

                  <div className="mt-1 md:mt-0 w-full h-auto bg-b-th  flex items-center py-1 px-2 text-xs md:text-sm text-theme rounded-lg  border-l-4 border-theme ">
                  Note : The uploaded file wil be saved privately and it will be deleted automatically once solution is provided
                  </div>
                </div>

                <div className="flex my-3 justify-between">
                  <Link to={"/select"}>
                  <button  className="px-4 text-sm lg:text-base py-2 bg-theme text-center rounded w-auto font-medium text-white ">
                     <BiLeftArrowAlt style={{color:"white", fontSize: "20px", marginRight:".3rem"}}/> Prev
                  </button>
                  </Link>

                  <Link to={"/form"}>
                  <button onClick={submit} className="px-4 text-sm lg:text-base py-2 bg-theme text-center rounded w-auto font-medium text-white ">
                     Next<BiRightArrowAlt style={{color:"white", fontSize: "20px", marginLeft:".3rem"}}/>
                  </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TellUs;
