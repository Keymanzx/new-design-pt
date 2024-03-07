import React from "react";

export default function RoomCard({ title, img }) {
  return (
    <div
      className={`px-5 py-2 mx-2 md:mx-auto bg-[#5B5978] rounded-md shadow-md flex flex-col md:flex-row items-center hover:bg-[#48466C]`} // Added hover class
    >
      <div className="shrink-0 md:w-1/2 order-2 md:order-1">
        <img
          className={`md:w-10 h-10 w-10 rounded-md hidden md:block ${
            // Added conditional class for XS responsiveness
            window.innerWidth <= 767 ? "w-full" : ""
          }`}
          src={img}
          alt={title}
        />
      </div>
      <div className="w-full md:w-1/2 order-1 md:order-2">
        <div className="md:text-lg xs:text-base font-medium text-white ">
          #{title}
        </div>
        {/* <p className="text-gray-300 hidden md:block">{title}</p> */}
      </div>
    </div>
  );
}
