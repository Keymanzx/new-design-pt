import React from "react";

import RoomCard from "../components/RoomCard";
import PhotoCard from "./PhotoCard";
const listCard = [
  {
    img: "./9.png",
  },
  {
    img: "./10.png",
  },
  {
    img: "./11.png",
  },
  {
    img: "./12.png",
  },
];

export default function PhotoCardList() {
  return (
    <>
      <div className="flex overflow-x-auto text-xl text-gray-900 font-bold mb-2 sx:justify-start ">
      <img src="./heat.png"  width="26" height="20"/>
        <p className="ml-2">มาแรงประจำสัปดาห์</p>
      </div>
      <div className="flex overflow-x-auto">
        {listCard.map((item, index) => (
          <PhotoCard key={index} img={item.img} />
        ))}
      </div>
    </>
  );
}
