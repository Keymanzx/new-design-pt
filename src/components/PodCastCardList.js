import React from "react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import PodCastCard from "./PodCastCard";

const listCard = [
  {
    ic: <BellIcon className="h-6 w-6" aria-hidden="true" />,
    title: "PodCast 1",
  },
  {
    ic: <BellIcon className="h-6 w-6" aria-hidden="true" />,
    title: "PodCast 1",
  },
  {
    ic: <BellIcon className="h-6 w-6" aria-hidden="true" />,
    title: "PodCast 1",
  },
  {
    ic: <BellIcon className="h-6 w-6" aria-hidden="true" />,
    title: "PodCast 1",
  },
  {
    ic: <BellIcon className="h-6 w-6" aria-hidden="true" />,
    title: "PodCast 1",
  },
  {
    ic: <BellIcon className="h-6 w-6" aria-hidden="true" />,
    title: "PodCast 1",
  },
  {
    ic: <BellIcon className="h-6 w-6" aria-hidden="true" />,
    title: "PodCast 1",
  },
  {
    ic: <BellIcon className="h-6 w-6" aria-hidden="true" />,
    title: "PodCast 1",
  },
];

export default function PodCastCardList() {
  return (
    <>
      <div className="bg-[#2D2B49] px-4 py-4 rounded-xl">
        <h1 className="py-4">Podcasts</h1>
        <div className="grid grid-row-1 gap-4">
          {listCard.map((item) => {
            return <PodCastCard title={item.title} />;
          })}
        </div>
      </div>
    </>
  );
}
