import React from "react";

export default function PodCastCard({ title }) {
  return (
    <>
      <div class=" flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div class="p-6">
          <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {title}
          </h5>
        </div>
      </div>
    </>
  );
}
