import React from "react";

export default function PodCastCard({ title, img, content }) {
  return (
    <>
      <div className="p-6 mx-auto min-w-full rounded-md flex flex-col items-center space-y-4 sm:flex-row sm:items-start bg-white transition duration-1000 hover:bg-amber-500 hover:bg-opacity-25">
        {/* <div>
              <img
                className="md:w-28 md:h-28 rounded-md sm:order-last"
                src={img}
                alt={title}
              />
            </div> */}
        <div className="w-full pl-4">
          <div>
            <div className="text-md text-amber-400 font-medium">{title}</div>
            <p className="text-gray-900 ">{content}</p>
          </div>

          <div className="text-right text-xs pt-8">
            <p className="text-white">By content new</p>
          </div>
        </div>
      </div>
    </>
  );
}
