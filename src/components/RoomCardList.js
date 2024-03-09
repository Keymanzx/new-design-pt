import React from "react";
import { BellIcon } from "@heroicons/react/24/outline";
import RoomCard from "../components/RoomCard";
const listCard = [
  {
    title: "สุขภาพยืนหนึ่ง",
    img: "./1.png",
  },
  {
    title: "ท่องเที่ยว",
    img: "./2.png",
  },
  {
    title: "ที่พักที่ดีที่สุด",
    img: "./3.png",
  },
  {
    title: "อาหารน่าลอง",
    img: "./4.png",
  },
  {
    title: "ไลฟ์สไตล์",
    img: "./5.png",
  },
  {
    title: "กีฬารอบโลก",
    img: "./6.png",
  },
  {
    title: "เพลงฮิตติดชาร์ต",
    img: "./7.png",
  },
  {
    ic: <BellIcon className="h-6 w-6" aria-hidden="true" />,
    title: "สัตว์เลี้ยง",
    img: "./8.png",
  },
];


export default function RoomCardList() {
  return (
    <>
      <div className="flex overflow-x-auto space-x-4">
        {listCard.map((item, index) => (
          <RoomCard key={index} title={item.title} img={item.img} />
        ))}
      </div>
    </>
  );
}
