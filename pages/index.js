import Head from "next/head";
import Image from "next/image";
import Chat from "../components/Chat";
import Chatlist from "../components/Chatlist";
import Sideicon from "../components/Sideicon";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Chat UI</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-[#17212b] text-[#f5f5f5] flex  h-screen  ">
        <div className="w-[128px] md:w-[110px] bg-[#0E1621] flex-none  overflow-scroll scrollbar-hide">
          <Sideicon className="" />
        </div>
        <div className="  lg:w-[388px] 3xl:w-[400px] 4xl:w-[419px] flex-none bg-[#17212B] border-r border-r-[#0E1621] overflow-scroll scrollbar-hide ">
          <Chatlist className="" />
        </div>
        <div className="hidden lg:inline-block  bg-[#0E1621] flex-grow overflow-scroll scrollbar-hide">
          <Chat />
        </div>
      </main>
    </div>
  );
}
