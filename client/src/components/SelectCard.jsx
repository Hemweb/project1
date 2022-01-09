import React from "react";

function SelectCard(props) {
  return (
    <>
      <div
        className={
          props.isActive
            ? "bg-white rounded-md  lg:rounded-lg shadow-md md:shadow-lg drop-shadow-lg flex items-center justify-center relative h-14 border-l-4 border-theme  text-theme"
            : "bg-white rounded-md  lg:rounded-lg shadow-md md:shadow-lg drop-shadow-lg flex items-center justify-center relative h-14 border-l-4 border-gray-400  text-theme"
        }
      >
        <div
          className={
            props.isActive
              ? "bg-theme top-2.5 left-2.5 w-2.5 h-2.5 rounded-full  absolute "
              : "top-2.5 left-2.5 w-2.5 h-2.5 rounded-full bg-gray-400 absolute"
          }
        ></div>
        <h3
          className={
            props.isActive ? "py-2 md:px-9 px-4 h-full text-xs font-semibold md:text-sm lg:text-md flex items-center justify-center text-center cursor-pointer w-full"
            : "py-2 lg:px-9  px-6 h-full text-xs md:text-sm lg:text-md flex items-center justify-center text-center cursor-pointer w-full" }
          id={props.name}
          onClick={props.onClickHandler}
        >
          {props.name}
        </h3>
      </div>
    </>
  );
}

export default SelectCard;
