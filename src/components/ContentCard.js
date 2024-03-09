import React from "react";

// export default function ContentCard({ title, img, content }) {
//   return (
//     <>
//       <div className="p-6 mx-auto min-w-full bg-[#5B5978] rounded-md shadow-md flex items-center space-x-4 ">
//         <div className="shrink-0">
//           <img className="md:w-28 rounded-md" src={img} alt={title}></img>
//         </div>
//         <div className="w-full">
//           <div>
//             <div className="text-xl font-medium text-white">{title}</div>
//             <p className="text-gray-300">{content}</p>
//           </div>

//           <div className="text-right text-xs pt-8">
//             <p className="text-white"> 900,000 view 900,000 Like </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

export default function ContentCard({ title, img, content }) {
  return (
    <>
      <div className="p-6 mx-auto min-w-full bg-white rounded-md shadow-md flex flex-col items-center space-y-4 sm:flex-row sm:items-start  transition duration-1000 hover:bg-amber-500 hover:bg-opacity-25">
        <div>
          <img
            className="md:w-28 rounded-md sm:order-last"
            src={img}
            alt={title}
          />
        </div>
        <div className="w-full pl-4">
          <div>
            <div className="text-xl font-bold text-amber-400">{title}</div>
            <p className="text-gray-900 hover:text-white">{content}</p>
          </div>
          <div className="flex space-x-2 pt-2 text-sm">
            <button className="bg-[#3B3960] text-white px-2 py-1 rounded-full hover:bg-gray-600 transition duration-300 ease-in-out">
              #หนังดัง
            </button>
            <button className="bg-[#3B3960] text-white px-2 py-1 rounded-full hover:bg-gray-600 transition duration-300 ease-in-out">
              #หนังดี
            </button>
            <button className="bg-[#3B3960] text-white px-2 py-1 rounded-full hover:bg-gray-600 transition duration-300 ease-in-out">
              #หนังน่าดู
            </button>
          </div>

          <div className="text-right text-xs pt-8">
            <p className="text-white">900,000 views / 900,000 Likes</p>
          </div>
        </div>
      </div>
    </>
  );
}
