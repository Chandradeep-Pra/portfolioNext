"use server";

import React from "react";
import ProjectCard from "./_components/ProjectCard";
import AboutProject from "./_components/AboutProject";

const Page = () => {
  return (
    <div className="  rounded-lg flex max-lg:flex-col max-lg:justify-start max-lg:h-screen w-full gap-4">
      <div className="sm:w-1/3">
        <AboutProject />
      </div>
      <div className="w-full">
        <ProjectCard />
      </div>
    </div>
  );
};

export default Page;
