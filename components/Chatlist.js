import React from "react";
import { UserCircleIcon } from "@heroicons/react/solid";
function Chatlist() {
  return (
    <div className="mt-5">
      <div className="flex flex-col ">
        {/* ChatList header */}
        <div className="w-full ">
          <input
            type="text"
            placeholder="Search"
            className="w-[90%] flex mx-auto h-[45px] text-xl pl-4 rounded-md bg-[#242F3D] placeholder-[#6D7883]"
          />
        </div>
        <div className="w-full mt-4 border-b-2"></div>
        {/* ChatList body */}
        <div className="max-w-[90%] mx-auto">
          <div className="flex text-xl items-center ">
            <div>
              <UserCircleIcon className="w-20 text-[#768C9E]" />
            </div>
            <div className="">
              <div>
                <h2>Dota 2</h2>
              </div>
              <div className=" flex overflow-hidden truncate  max-w-[95%]  ">
                I already ask mine, i cant do it again
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chatlist;
