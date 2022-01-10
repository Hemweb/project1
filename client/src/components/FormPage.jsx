import React,{useState} from "react";

import logo from "./20220106_120910.png";
import logoW from "./logoWhite.png";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { BiUserPin } from "react-icons/bi";
import { MdOutlineEngineering } from "react-icons/md";
import {MdDone} from 'react-icons/md'
import {BsFileText, BsHeadset} from 'react-icons/bs'
function FormPage() {

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [SpfcType, setSpfcType] = useState("");
  const [bType, setBType] = useState("type1");


  async function submit(e) {
    // e.preventDefault();
    const userDetail = {
      credentials: {
        "fullname": fullName,
        "email": email,
        "phone": phoneNo,
        "role": role,
        "companyName": company,
        "speceficType": SpfcType,
        "businessType": bType,
      },
    };

  console.log(userDetail);
}
  return (
    <>
    <div className="w-full h-screen  inset-0 relative flex-col sm:flex-row sm:flex">
      <div className="lg:w-2/5 md:w-1/2  w-full relative h-screen flex flex-col items-center justify-center bg-theme ">
          
          <div className="h-7 w-18 z-10 top-3.5 left-3.5 sm:hidden  absolute">
            <Link to={"/"}>
            <img className="w-full h-full " src={logoW} alt="logo" /></Link>
          </div>
        <div className="w-full relative h-screen flex flex-col items-center justify-center  p-9 sm:p-5 sm:py-5">
          <div className="lg:px-3 mb-4 md:mb-2">
            <h1 className="text-lg  lg:text-3xl sm:text-xl font-semibold text-white mb-2 ">STEP 3</h1>
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
                  <h3 className="text-sm  h-6  w-6 border-2 text-center border-theme-lite rounded-full  items-center justify-center  text-theme-lite">
                    2
                  </h3>
                </div>
                <div className="w-0.5 h-10 border border-theme-lite border-dashed"></div>
              </div>

              <div className="flex flex-col gap-1">
                <div className=" text-sm md:text-xs lg:text-sm flex items-center text-theme-lite font-semibold">
                  <BsFileText
                    style={{ fontSize: "1.3rem", marginRight: "5px" }}
                  />
                  <h3 className="">Tell us your problem</h3>
                </div>

                <p className="text-theme-lite text-xs ">
                Let us know about the problem that you are have and their requirements
                </p>
              </div>
            </div>

            <div className=" flex gap-2 mb-2 ">
              <div className="flex flex-col gap-1 items-center justify-center">
                <div className="">
                  <h3 className="text-sm  h-6  w-6 border-2 text-center border-white rounded-full  items-center justify-center  text-white">
                    3
                  </h3>
                </div>
                <div className="w-0.5 h-10 border border-white border-dashed"></div>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex text-sm md:text-xs lg:text-sm items-center text-white font-semibold">
                  <BiUserPin
                    style={{ fontSize: "1.3rem", marginRight: "5px" }}
                  />
                  <h3 className="">Tell us about yourself</h3>
                </div>

                <p className="text-white text-xs ">
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

        <div className="bg-white w-full md:h-full h-screen flex justify-center ">
          <div className="p-2 w-full flex h-auto flex-col gap-7 sm:gap-3 justify-center relative items-center mt-0 pt-0">
            
          <div className="h-10 md:h-7 md:w-24 top-3.5 right-2.5 w-32 mr-8 hidden md:block  absolute">
                <Link to={`/`}>
                <img className="w-full h-full   " src={logo} alt="" />

                </Link>
              </div>
            <div className="w-full h- px-4 mt-5 md:mt-7 lg:px-7">
              <div className="flex items-start justify-start w-full pl-0">
                <h3 className="text-theme lg:font-bold font-semibold text-lg lg:text-2xl text-left ">
                Tell us about your company ?
                </h3>
              </div>

              <form className="lg:mt-8 md:space-y-4 space-y-3 lg:space-y-6" action="#" method="POST">
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="rounded-md shadow-sm flex flex-col gap-3  lg:gap-6 ">
                  <div className="flex flex-col lg:flex-row md:gap-2.5 gap-3 lg:gap-5">
                    <div className="lg:w-1/2">
                      <label
                        htmlFor="full-name"
                        className="text-theme text-xs lg:text-sm"
                      >
                        Type of business<span className="text-red-500 "> *</span>
                      </label>
                      
                        <select id="cars" name="cars" class="appearance-none rounded-md relative block w-full md:p-2 p-1.5 lg:p-3 border border-theme  placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-xs lg:text-sm">
                            <option value="type1" onClick={(e)=> setBType(e.target.value)}>type1</option>
                            <option value={bType} onClick={()=> setBType("type2")}>type2</option>
                            <option value="type3">type3</option>
                            <option value="type3">type3</option>
                        </select>
                    </div>
                    <div className="lg:w-1/2 ">
                      <label
                        htmlFor="email-address"
                        className="text-theme text-xs lg:text-sm"
                      >
                        Specific the type of Business
                      </label>
                      <input
                          value={SpfcType}
                          onChange={(e) => setSpfcType(e.target.value)}
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="appearance-none  relative block w-full md:p-2 p-1.5 lg:p-3 border border-theme  placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-xs lg:text-sm"
                        placeholder="Enter type of business.."
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-theme text-xs lg:text-sm">
                      Your name<span className="text-red-500 "> *</span>
                    </label>
                    <input
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      className="appearance-none  relative block w-full md:p-2 p-1.5 lg:p-3 border border-theme  placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-xs lg:text-sm"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-5">
                    <div className="w-full">
                      <label
                        htmlFor="company-name"
                        className="text-theme text-xs lg:text-sm"
                      >
                        Company name<span className="text-red-500 "> *</span>
                      </label>
                      <input
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                        id="company-name"
                        name="Cname"
                        type=""
                        autoComplete="name"
                        required
                        className="appearance-none rounded-md relative block w-full md:p-2 p-1.5 lg:p-3 border border-theme  placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-xs lg:text-sm"
                        placeholder="Enter your Company name"
                      />
                    </div>
                    <div className="w-full ">
                      <label htmlFor="role" className="text-theme text-xs lg:text-sm">
                        Role
                      </label>
                      <input
                          value={role}
                          onChange={(e) => setRole(e.target.value)}
                        id="role"
                        name="role"
                        type=""
                        autoComplete="role"
                        required
                        className="appearance-none  relative block w-full md:p-2 p-1.5 lg:p-3 border border-theme  placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-xs lg:text-sm"
                        placeholder="Your role in company "
                      />
                    </div>
                    <div className="w-full">
                      <label htmlFor="phone" className="text-theme text-xs lg:text-sm">
                        Phone Number<span className="text-red-500 "> *</span>
                      </label>
                      <input
                          value={phoneNo}
                          onChange={(e) => setPhoneNo(e.target.value)}
                        id="phone"
                        name="phone"
                        type="number"
                        autoComplete="phone"
                        required
                        className="appearance-none rounded-md relative block w-full md:p-2 p-1.5 lg:p-3 border border-theme  placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-xs lg:text-sm"
                        placeholder="Your number"
                      />
                    </div>
                    <div className="w-full ">
                      <label
                        htmlFor="email-address"
                        className="text-theme text-xs lg:text-sm"
                      >
                        Email address<span className="text-red-500 "> *</span>
                      </label>
                      <input
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="appearance-none  relative block w-full md:p-2 p-1.5 lg:p-3 border border-theme  placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-xs lg:text-sm"
                        placeholder="Email address"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  
                  <Link to={"/tellus"}>
                  <button  className="px-4 text-sm lg:text-base py-2 bg-theme text-center rounded w-auto font-medium text-white ">
                  <BiArrowBack /> Prev
                  </button>
                  </Link>

                  <Link to={"/completed"}>
                  <button onClick={submit} className="px-4 text-sm lg:text-base py-2 bg-theme text-center rounded w-auto font-medium text-white ">
                  Submit
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

export default FormPage;
