import React,{useState} from "react";
import SelectCard from "./SelectCard";

import logo from "./20220106_120910.png";
import logoW from "./logoWhite.png";
import { Link } from "react-router-dom";
import { BiRightArrowAlt,BiUserPin } from "react-icons/bi";
import { MdOutlineEngineering } from "react-icons/md";
import {MdDone} from 'react-icons/md'
import {BsFileText, BsHeadset} from 'react-icons/bs'

function FormPage() {
  const [titles] = useState([
    {
      id: "1",
      name: "Excel support",
    },
    {
      id: "2",
      name: "Automation",
    },
    {
      id: "3",
      name: "Web scraping",
    },
    {
      id: "4",
      name: "Email Automation",
    },
    {
      id: "4",
      name: "Notification creation",
    },
    {
      id: "4",
      name: "Tech Recommendation",
    },
    {
      id: "4",
      name: "Tech Audit",
    },
    {
      id: "4",
      name: "Integrating 2 applications",
    },
    {
      id: "4",
      name: "Website dev/Support",
    },
    {
      id: "4",
      name: "Dashboard creation",
    },
    {
      id: "4",
      name: "Analytics",
    },
    {
      id: "4",
      name: "Process Simulation",
    },
    {
      id: "4",
      name: "Process Mapping",
    },
  ]);
  const [selected, setSelected] = useState("Excel support");
const [array] = useState([])
 const handleChange = (e) => {
    const checked = e.target.checked;
    const checkedValue = e.target.value;

    const checkedName = e.target.name;
    if(checked){
       console.log(checkedValue);
       array.push(checkedValue)
    }
    console.log(array);
    };


  const onClickHandler = (e) => {
    if (e.target.id) {
      setSelected(e.target.id);
    }
    return;
  };

  return (
    <>
      <div className="w-full h-screen  inset-0 relative flex-col sm:flex-row sm:flex">
        <div className="lg:w-2/5 md:w-1/2  w-full relative h-screen flex flex-col items-center justify-center bg-theme ">
          
          <div className="h-7 w-18  top-3.5 left-3.5 sm:hidden  absolute">
            <img className="w-full h-full " src={logoW} alt="logo" />
          </div>
        <div className="w-full relative h-screen flex flex-col items-center justify-center  p-9 sm:p-5 sm:py-5">
          <div className="lg:px-3 mb-4 md:mb-2">
            <h1 className="text-lg  lg:text-3xl sm:text-xl font-semibold text-white mb-2 ">STEP 1</h1>
            <p className="text-white text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              incidunt perspiciatis magni minus libero laudantium?
            </p>
          </div>

          <div className=" w-full lg:px-6 h-auto">
            <div className=" flex gap-2 mb-2 md:mt-3 lg:mt-4">
              <div className="flex flex-col gap-1 items-center justify-center">
                <div className="">
                  <h3 className="text-sm  h-6   w-6 border-2  text-center border-white rounded-full  items-center justify-center  text-white">
                    1
                  </h3>
                </div>
                <div className="w-0.5 h-10 border border-white border-dashed"></div>
              </div>

              <div className="flex flex-col gap-1">
                <div className=" text-sm md:text-xs lg:text-sm flex items-center text-white font-semibold">
                  <MdOutlineEngineering
                    style={{ fontSize: "1.3rem", marginRight: "5px" }}
                  />
                  <h3 className="">Select your required services</h3>
                </div>

                <p className="text-white text-xs ">
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

        <div className="bg-white w-full md:h-full h-auto pb-3 lg:pb-0 ">
          <div className="p-2 flex h-full flex-col gap-7 sm:gap-3 justify-center relative items-center mt-0 pt-0">
            
          <div className="h-10 md:h-7 md:w-24 top-3.5 right-2.5 w-32 mr-8 hidden md:block  absolute">
                <Link to={`/`}>
                <img className="w-full h-full   " src={logo} alt="" />

                </Link>
              </div>

            <div className="w-full h-full px-4 mt-5 md:mt-7 lg:px-7">
              <div className="flex items-start justify-start w-full pl-0 ">
                <h3 className="text-theme lg:font-bold font-semibold text-lg lg:text-2xl text-left  ">
                  Lorem ipsum dolor sit amet.
                </h3>
              </div>

              <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2 mt-4 mb-4 ">
                  {titles.map((title,index) => (
                      <SelectCard {...title} key={index} onClickHandler={onClickHandler} 
                      isActive={selected === title.name}/>
                  ))}
                
              </div>

                    <div className="w-full h-auto rounded-md md:rounded-lg lg:rounded-xl bg-theme p-5 pt-3 mb-3  ">
                        <div className="text-white font-semibold text-lg mb-1 "><h2>Excel Support</h2></div>
                        <div className="w-14 h-0.5 bg-white"></div>
                        <div className=" text-white mt-2 font-normal text-sm">
                            <form className="flex flex-col gap-2" onChange={handleChange} action="">
                                <div className="">
                                <input className="bg-black border-white border-8   "  type="checkbox" id="one" name="one" value=" I have the input and I need to get to an output. Can you help?"/>
                                <label htmlFor="one"> I have the input and I need to get to an output. Can you help?</label></div>
                                <div className="">
                                <input className="bg-black border-white border-8   "  type="checkbox" id="two" name="two" value=" I have data formatting issue"/>
                                <label htmlFor="two"> I have data formatting issue</label></div>
                                <div className="">
                                <input className="bg-black border-white border-8   "  type="checkbox" id="three" name="three" value=" Help me with linking files/consolidating files"/>
                                <label htmlFor="three"> Help me with linking files/consolidating files</label></div>
                                <div className="">
                                <input className="bg-black border-white border-8   "  type="checkbox" id="four" name="four" value=" I have the raw data. Can you help me create reports"/>
                                <label htmlFor="four"> I have the raw data. Can you help me create reports</label></div>
                            </form>
                        </div>
                    </div>
              <div className="flex flex-row-reverse ">
                <Link to={"/tellus"}>
                  <button onClick={handleChange} className="px-4 text-sm lg:text-base py-2 bg-theme text-center rounded w-auto font-medium text-white ">
                     Next<BiRightArrowAlt style={{color:"white", fontSize: "20px", marginLeft:".3rem"}}/>
                  </button>
                </Link>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormPage;
