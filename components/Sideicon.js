import React from "react";
import {
  BeakerIcon,
  ViewListIcon,
  ChatAlt2Icon,
  FolderIcon,
  CollectionIcon,
  ChatIcon,
  FolderOpenIcon,
} from "@heroicons/react/solid";
function Sideicon() {
  return (
    <div className="mt-[30px] h-screen">
      <div className=" flex flex-col items-center space-y-14">
        <ViewListIcon className="w-9 text-[#768C9E]" />
        <ChatAlt2Icon className="w-11 text-[#768C9E]" />
        <FolderIcon className="w-11 text-[#768C9E]" />
        <CollectionIcon className="w-11 text-[#768C9E]" />
        <ChatIcon className="w-11 text-[#768C9E]" />
        <FolderOpenIcon className="w-11 text-[#768C9E]" />
      </div>
    </div>
  );
}

export default Sideicon;
