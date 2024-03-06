import React from "react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import RoomCard from "../components/RoomCard";

const listCard = [
  {
    ic: <BellIcon className="h-6 w-6" aria-hidden="true" />,
    title: "สีลม",
    img: "https://upload.wikimedia.org/wikipedia/th/c/c5/Pantip_Logo.png",
  },
  {
    ic: <BellIcon className="h-6 w-6" aria-hidden="true" />,
    title: "รวมมิตร",
    img: "https://upload.wikimedia.org/wikipedia/th/c/c5/Pantip_Logo.png",
  },
  {
    ic: <BellIcon className="h-6 w-6" aria-hidden="true" />,
    title: "รัชดา",
    img: "https://upload.wikimedia.org/wikipedia/th/c/c5/Pantip_Logo.png",
  },
  {
    ic: <BellIcon className="h-6 w-6" aria-hidden="true" />,
    title: "การ์ตูน",
    img: "https://upload.wikimedia.org/wikipedia/th/c/c5/Pantip_Logo.png",
  },
  {
    ic: <BellIcon className="h-6 w-6" aria-hidden="true" />,
    title: "ชานเรือน",
    img: "https://upload.wikimedia.org/wikipedia/th/c/c5/Pantip_Logo.png",
  },
  {
    ic: <BellIcon className="h-6 w-6" aria-hidden="true" />,
    title: "ห้องสมุด",
    img: "https://upload.wikimedia.org/wikipedia/th/c/c5/Pantip_Logo.png",
  },
  {
    ic: <BellIcon className="h-6 w-6" aria-hidden="true" />,
    title: "ภูมิภาค",
    img: "https://upload.wikimedia.org/wikipedia/th/c/c5/Pantip_Logo.png",
  },
  {
    ic: <BellIcon className="h-6 w-6" aria-hidden="true" />,
    title: "แกลลอรี่",
    img: "https://upload.wikimedia.org/wikipedia/th/c/c5/Pantip_Logo.png",
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
