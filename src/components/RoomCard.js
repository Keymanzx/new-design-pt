import React from "react";

export default function RoomCard({ title, img }) {
  return (
    <div className="p-6 mx-auto min-w-full bg-[#5B5978] rounded-md shadow-md flex items-center space-x-4 ">
      <div className="shrink-0">
        <img
          className="h-14 rounded-md"
          src={img}
          alt={title}
        ></img>
      </div>
      <div>
        <div className="text-xl font-medium text-white">{title}</div>
        <p className="text-gray-300">{title}</p>
      </div>
    </div>
  );
}
