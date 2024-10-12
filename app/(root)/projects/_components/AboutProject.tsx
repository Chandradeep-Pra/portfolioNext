"use client";
import React from "react";
import clsx from "clsx";
import GithubLogo from "@/public/assests/icons/Github";
import Link from "next/link";
import { LuMoveUpRight } from "react-icons/lu";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const technologies = [
  {
    name: "Next.js",
    accentColor: "bg-black",
    textColor: "text-white",
  },
  {
    name: "TypeScript",
    accentColor: "bg-blue-600",
    textColor: "text-white",
  },
  {
    name: "Tailwind CSS",
    accentColor: "bg-teal-500",
    textColor: "text-white",
  },
];

const AboutProject = () => {
  const tooltipItems = [
    {
      id: 1,
      name: "GitHub",
      icon: <GithubLogo size={42} color="white" />,
      url: "https://github.com/Chandradeep-Pra/xoraModernUISaas",
    },
    {
      id: 2,
      name: "Deployed",
      icon: <LuMoveUpRight size={44} color="white" className="bg-black rounded-full border-2 border-white" />,
      url: "https://stalwart-marshmallow-3ed087.netlify.app/",
    },
  ];

  return (
    <div className="p-2">
      <h1 className="text-3xl max-lg:text-xl">Xora</h1>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tag, index) => (
          <div
            key={index}
            className={clsx(
              tag.accentColor,
              tag.textColor,
              "py-1 px-2 rounded-full mt-2",
              "text-xs"
            )}
          >
            {tag.name}
          </div>
        ))}
      </div>
      <div className="mt-6">
        <span className="font-sans max-lg:text-sm text-base">
          <span className="text-gray">Xora is a</span>
          <span className="italic"> beautiful frontend project</span>
          <span className="text-gray"> that focuses on</span>
          <span className="italic"> stunning design</span>
          <span className="text-gray"> and</span>
          <span className="italic"> smooth animations.</span>
          <span className="text-gray"> It aims to create</span>
          <span className="italic"> an amazing user experience</span>
          <span className="text-gray"> and inspire</span>
          <span className="italic"> other developers.</span>
        </span>
      </div>
      <div className="mt-8 flex">
        {tooltipItems.map((item) => (
          <div className="relative" key={item.id}>
            <Link href={item.url} className="flex items-center z-10">
              <AnimatedTooltip
                items={[{id:item.id, name: item.name, icon: item.icon }]}
              ></AnimatedTooltip>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutProject;
