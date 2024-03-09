import React from "react";
import RoomCardList from "../components/RoomCardList";
import SearchBar from "../components/SearchBar";
import ContentCardList from "../components/ContentCardList";
import PodCastCardList from "../components/PodCastCardList";

export default function Homepage() {
  return (
    <div>
      <div className="p-6">
        <RoomCardList />
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="col-span-1 md:col-span-3">
            {/* <div className="mb-2">
              <SearchBar />
            </div> */}
            <div>
              <ContentCardList />
            </div>
          </div>
          <div>
            <PodCastCardList />
          </div>
        </div>
      </div>
    </div>
  );
}
