import React from "react";
import {
  UserCircleIcon,
  SearchIcon,
  PhoneIcon,
  DotsVerticalIcon,
} from "@heroicons/react/solid";

import {
  PaperClipIcon,
  EmojiHappyIcon,
  MicrophoneIcon,
} from "@heroicons/react/outline";
function Chat() {
  return (
    <div className="bg-[#17212B] h-[100%]">
      <div className="">
        {/* Chat header */}
        <div className="h-[80px] flex justify-between bg-[#17212B] ml-3 pt-3   ">
          <div>
            <h2 className="text-xl text-gray-200 font-[Bahnschrift]">
              Abel Kibebe
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
        <div className="bg-[#0E1621]   ">
          <div className=" h-[80vh] flex flex-col justify-between overflow-scroll scrollbar-hide ">
            <div className="ml-3 mr-4 mt-4 space-y-4 flex flex-col">
              <div className="flex justify-start ">
                <p className="text-xl bg-[#17212B] py-3 px-6 rounded-md  ">
                  Hello
                  <span className="text-gray-500 pt-3 relative top-2 left-3">
                    11:03 AM
                  </span>
                </p>
              </div>
              <div className="flex justify-end ">
                <p className="text-xl bg-[#17212B] py-3 px-6 rounded-md  ">
                  Hello Mate how are you doing
                  <span className="text-gray-500 pt-3 relative top-2 left-3">
                    11:03 AM
                  </span>
                </p>
              </div>
              <div className="flex justify-start ">
                <p className="text-xl bg-[#17212B] py-3 px-6 rounded-md  ">
                  Hello
                  <span className="text-gray-500 pt-3 relative top-2 left-3">
                    11:03 AM
                  </span>
                </p>
              </div>
              <div className="flex justify-end ">
                <p className="text-xl bg-[#17212B] py-3 px-6 rounded-md  ">
                  Hello Mate how are you doing
                  <span className="text-gray-500 pt-3 relative top-2 left-3">
                    11:03 AM
                  </span>
                </p>
              </div>
              <div className="flex justify-start ">
                <p className="text-xl bg-[#17212B] py-3 px-6 rounded-md  ">
                  Hello
                  <span className="text-gray-500 pt-3 relative top-2 left-3">
                    11:03 AM
                  </span>
                </p>
              </div>
              <div className="flex justify-end ">
                <p className="text-xl bg-[#17212B] py-3 px-6 rounded-md  ">
                  Hello Mate how are you doing
                  <span className="text-gray-500 pt-3 relative top-2 left-3">
                    11:03 AM
                  </span>
                </p>
              </div>
              <div className="flex justify-start ">
                <p className="text-xl bg-[#17212B] py-3 px-6 rounded-md  ">
                  Hello
                  <span className="text-gray-500 pt-3 relative top-2 left-3">
                    11:03 AM
                  </span>
                </p>
              </div>
              <div className="flex justify-end ">
                <p className="text-xl bg-[#17212B] py-3 px-6 rounded-md  ">
                  Hello Mate how are you doing
                  <span className="text-gray-500 pt-3 relative top-2 left-3">
                    11:03 AM
                  </span>
                </p>
              </div>
              <div className="flex justify-start ">
                <p className="text-xl bg-[#17212B] py-3 px-6 rounded-md  ">
                  Hello
                  <span className="text-gray-500 pt-3 relative top-2 left-3">
                    11:03 AM
                  </span>
                </p>
              </div>
              <div className="flex justify-end ">
                <p className="text-xl bg-[#17212B] py-3 px-6 rounded-md  ">
                  Hello Mate how are you doing
                  <span className="text-gray-500 pt-3 relative top-2 left-3">
                    11:03 AM
                  </span>
                </p>
              </div>
              <div className="flex justify-start ">
                <p className="text-xl bg-[#17212B] py-3 px-6 rounded-md  ">
                  Hello
                  <span className="text-gray-500 pt-3 relative top-2 left-3">
                    11:03 AM
                  </span>
                </p>
              </div>
              <div className="flex justify-end ">
                <p className="text-xl bg-[#17212B] py-3 px-6 rounded-md  ">
                  Hello Mate how are you doing
                  <span className="text-gray-500 pt-3 relative top-2 left-3">
                    11:03 AM
                  </span>
                </p>
              </div>
              <div className="flex justify-start ">
                <p className="text-xl bg-[#17212B] py-3 px-6 rounded-md  ">
                  Hello
                  <span className="text-gray-500 pt-3 relative top-2 left-3">
                    11:03 AM
                  </span>
                </p>
              </div>
              <div className="flex justify-end ">
                <p className="text-xl bg-[#17212B] py-3 px-6 rounded-md  ">
                  Hello Mate how are you doing
                  <span className="text-gray-500 pt-3 relative top-2 left-3">
                    11:03 AM
                  </span>
                </p>
              </div>
            </div>
            {/* Message reply */}
            <div className="bg-[#17212B] flex fixed mt-[83vh] w-[72%] flex-col justify-end">
              <div className="flex items-center justify-between h-[69px] space-x-5 ml-3 mr-4">
                <div className="">
                  <PaperClipIcon className="w-9 text-gray-500 rotate-180" />
                </div>
                <div className="flex-grow">
                  <input
                    type="text"
                    className="w-full p-4 bg-transparent outline-none text-xl placeholder:text-gray-500"
                    placeholder="Write a message..."
                  />
                </div>
                <div className="flex items-center space-x-6 ">
                  <div>
                    <EmojiHappyIcon className="w-9 text-gray-500" />
                  </div>
                  <div>
                    <MicrophoneIcon className="w-9 text-gray-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
