import React from "react";
import {
  UserCircleIcon,
  SearchIcon,
  PhoneIcon,
  DotsVerticalIcon,
} from "@heroicons/react/solid";

function Chat() {
  return (
    <div className="bg-[#17212B] h-[100%]">
      <div className="">
        {/* Chat header */}
        <div className="h-[80px] flex justify-between bg-[#17212B] ml-3 pt-3   ">
          <div>
            <h2 className="text-xl text-gray-200 font-[Bahnschrift]">
              Haimanot
            </h2>
            <h3 className="text-xl text-gray-400 ">last seen recently</h3>
          </div>
          <div className="flex space-x-7">
            <SearchIcon className="w-8 text-[#768C9E]" />
            <PhoneIcon className="w-8 text-[#768C9E]" />
            <DotsVerticalIcon className="w-8 text-[#768C9E]" />
          </div>
        </div>
        {/* Messages */}
        <div className="bg-[#0E1621] h-[92vh] flex flex-col justify-between ">
          <div>asd</div>
          {/* Message reply */}
          <div>saa</div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
