import React from "react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import ContentCard from "./ContentCard";

const listCard = [
  {
    ic: <BellIcon className="h-6 w-6" aria-hidden="true" />,
    title: "Content 1",
  },
  {
    ic: <BellIcon className="h-6 w-6" aria-hidden="true" />,
    title: "Content 1",
  },
  {
    ic: <BellIcon className="h-6 w-6" aria-hidden="true" />,
    title: "Content 1",
  },
  {
    ic: <BellIcon className="h-6 w-6" aria-hidden="true" />,
    title: "Content 1",
  },
  {
    ic: <BellIcon className="h-6 w-6" aria-hidden="true" />,
    title: "Content 1",
  },
  {
    ic: <BellIcon className="h-6 w-6" aria-hidden="true" />,
    title: "Content 1",
  },
  {
    ic: <BellIcon className="h-6 w-6" aria-hidden="true" />,
    title: "Content 1",
  },
  {
    ic: <BellIcon className="h-6 w-6" aria-hidden="true" />,
    title: "ตั้งกระทู้",
  },
];

export default function ContentCardList() {
  return (
    <>
      <div className="bg-[#2D2B49] px-6 py-6 rounded-xl">
        <div className="grid grid-row-1 gap-4 ">
          {listCard.map((item) => {
            return <ContentCard title={item.title} />;
          })}
        </div>
      </div>
    </>
  );
}
