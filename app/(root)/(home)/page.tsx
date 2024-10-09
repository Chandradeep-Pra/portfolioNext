"use client";

import Pills from "@/components/shared/Pills";
import { LinkPreview } from "@/components/shared/ui/link-preview";
// import { motion } from "framer-motion";

import GithubLogo from "@/public/assests/icons/Github";
import LinkedinLogo from "@/public/assests/icons/LinkedinLogo";
import Link from "next/link";
// import TelegramLogo from "@/public/assests/icons/TelegramLogo";
import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";

const Page = () => {
  return (
    <div className="flex w-full flex-col max-lg:overflow-none">
      <div className="grid md:grid-cols-3 grid-rows-4 max-lg:hidden">
        <h1 className="text-7xl font-bold col-span-2">Full-stack</h1>
        <div className="ml-16 flex items-center justify-center gap-2 -mt-6">
          <Link href={"/projects"}>
            <h1 className="bg-white text-black italic text-xl  rounded-full font-sans py-1 px-16">
              Projects
            </h1>
          </Link>
          <FaArrowCircleRight size={"2rem"} />
        </div>
        <span className="font-sans text-lg">
          <span className="text-gray">My goal is to</span>
          <span className="italic"> write maintainable, clean </span>
          <span className="text-gray">and</span>
          <span className="italic"> understandable code. I aim to make</span>
          <span className="italic"> development </span>
          <span className="text-gray">a fun, rewarding experience.</span>
        </span>
        <h1 className="text-7xl font-bold col-span-2 text-center">Developer</h1>
      </div>
      <div className="sm:hidden">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold">Full-stack</h1>
          <h1 className="text-4xl font-bold bg-blue-400 ml-[115px]">
            Developer
          </h1>
          <span className="font-sans text-lg mt-6">
            <span className="text-gray">My goal is to</span>
            <span className="italic"> write maintainable, clean </span>
            <span className="text-gray">and</span>
            <span className="italic"> understandable code. I aim to make</span>
            <span className="italic"> development </span>
            <span className="text-gray">a fun, rewarding experience.</span>
          </span>
          <div className="mt-8 flex items-center justify-center gap-2">
            <Link href={"/projects"}>
              <h1 className="bg-white text-black italic text-xl  rounded-full font-sans py-1 px-16">
                Projects
              </h1>
            </Link>
            <FaArrowCircleRight size={"2rem"} />
          </div>
        </div>
      </div>
      <div className="flex  justify-around max-lg:hidden">
        <LinkPreview url="https://github.com/chandradeep-pra">
          <Pills
            title="GitHub"
            component={<GithubLogo size={24} color="white" />} // Replace with your actual GitHub logo component
            containerClasses="bg-transparent sm:border sm:border-white"
            textClasses="text-lg dark:text-white text-black"
          />
        </LinkPreview>
        <LinkPreview url="https://linkedin.com/in/chandradeepprasad">
          <Pills
            title="Linkedin"
            component={<LinkedinLogo size={24} color="white" />}
            containerClasses="bg-transparent sm:border sm:border-white "
            textClasses="text-lg dark:text-white text-black"
          />
        </LinkPreview>
        <LinkPreview url="https://drive.google.com/file/d/1mCfflSl8NVjqxzhF7XnbOQiP_e5RXAn2/view">
          <Pills
            title="Resume"
            component={<IoDocumentText size={24} color="white" />} // Replace with your actual GitHub logo component
            containerClasses="bg-transparent sm:border sm:border-white gap-1 "
            textClasses="text-lg dark:text-white text-black"
          />
        </LinkPreview>
      </div>
      <div className="sm:hidden flex mt-4  items-center justify-around rounded-full border border-2 border-blue-400 ml-6 py-2 w-[80%]">
        <Link href="https://github.com/chandradeep-pra">
          <GithubLogo size={24} color="white" />
        </Link>
        <Link href="https://linkedin.com/in/chandradeepprasad">
          <LinkedinLogo size={24} color="white" />
        </Link>
        <Link href="https://drive.google.com/file/d/1mCfflSl8NVjqxzhF7XnbOQiP_e5RXAn2/view">
          <IoDocumentText size={24} color="white" />
        </Link>
      </div>
      
    </div>
  );
};

export default Page;

// <div className="flex gap-4 items-center justify-between w-full">
//         <h1 className="text-7xl font-bold">Full-stack</h1>
//         <div className="ml-16 flex items-end justify-center mt-6 gap-2 ">
//           <h1 className="bg-white text-black italic text-xl  rounded-full font-sans py-1 px-16">
//             Projects
//           </h1>
//           <FaArrowCircleRight size={36} />
//         </div>
//       </div>
//       <div className="flex mt-8 justify-between gap-24">
//         <div className="max-w-md">
//           {" "}
//           {/* Set a max width for responsive behavior */}
//           <span className="font-sans text-lg">
//             <span className="text-gray">My goal is to</span>
//             <span className="italic"> write maintainable, clean </span>
//             <span className="text-gray">and</span>
//             <span className="italic"> understandable code. I aim to make</span>
//             <span className="italic"> development </span>
//             <span className="text-gray">a fun, rewarding experience.</span>
//           </span>
//         </div>

//         <h1 className="text-7xl font-bold">developer</h1>
