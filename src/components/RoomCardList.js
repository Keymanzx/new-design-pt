import React from "react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import RoomCard from "../components/RoomCard";

const listCard = [
  {
    ic: <BellIcon className="h-6 w-6" aria-hidden="true" />,
    title: "สุขภาพยืนหนึ่ง",
    img: "./1.png",
  },
  {
    ic: <BellIcon className="h-6 w-6" aria-hidden="true" />,
    title: "ท่องเที่ยว",
    img: "./2.png",
  },
  {
    ic: <BellIcon className="h-6 w-6" aria-hidden="true" />,
    title: "ที่พักที่ดีที่สุด",
    img: "./3.png",
  },
  {
    ic: <BellIcon className="h-6 w-6" aria-hidden="true" />,
    title: "อาหารน่าลอง",
    img: "./4.png",
  },
  {
    ic: <BellIcon className="h-6 w-6" aria-hidden="true" />,
    title: "ไลฟ์สไตล์",
    img: "./5.png",
  },
  {
    ic: <BellIcon className="h-6 w-6" aria-hidden="true" />,
    title: "กีฬารอบโลก",
    img: "./6.png",
  },
  {
    ic: <BellIcon className="h-6 w-6" aria-hidden="true" />,
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
      <div className="grid grid-cols-4 gap-4">
        {listCard.map((item) => {
          return <RoomCard title={item.title} img={item.img} />;
        })}
      </div>
    </>
  );
}
