import React from "react";

function Chat() {
  return (
    <div className="mt-5 ml-4">
      <div className="w-full ">
        {/* Chat header */}
        <div className="h-11">
          <div>
            <h2 className="text-xl font-[Bahnschrift]">Haimanot</h2>
            <h3 className="text-xl text-gray-400 ">last seen recently</h3>
          </div>
          <div></div>
        </div>
      </div>
      <div className="w-full mt-4 border-b-2 "></div>
    </div>
  );
}

export default Chat;
