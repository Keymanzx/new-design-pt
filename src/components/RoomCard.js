import React from "react";

export default function RoomCard({ title, img }) {
  // return (
  //   <div className="p-6 mx-auto min-w-full bg-[#5B5978] rounded-md shadow-md flex items-center space-x-4 ">
  //     <div className="shrink-0 w-full md:w-1/2">
  //       <img className="md:w-14 w-8 rounded-md" src={img} alt={title}></img>
  //     </div>
  //     <div className="w-full md:w-1/2">
  //       <div className="text-xl font-medium text-white ">{title}</div>
  //       <p className="text-gray-300 hidden md:block ">{title}</p>
  //     </div>
  //   </div>
  // );

  return (
    <div className="p-6 mx-auto min-w-full bg-[#5B5978] rounded-md shadow-md flex flex-col md:flex-row items-center">
      <div className="shrink-0 w-full md:w-1/2 order-2 md:order-1">
        <img
          className="md:w-16 h-16 w-16 rounded-md hidden md:block"
          src={img}
          alt={title}
        />
      </div>
      <div className="w-full md:w-1/2 order-1 md:order-2">
        <div className="text-xl font-medium text-white"># {title}</div>
        <p className="text-gray-300 hidden md:block">{title}</p>
      </div>
    </div>
  );
}
