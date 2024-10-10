import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="text-center flex flex-col items-center">
      <h1>
        Please, check my github for now for projects , feature will be added
        soon
      </h1>
      <Link href="https://github.com/chandradeep-pra" className="px-6 py-2 border-2 rounded-lg mt-4 hover:text-black hover:bg-white transition-all duration-300">
        Link to Github
      </Link>
    </div>
  );
};

export default Page;
