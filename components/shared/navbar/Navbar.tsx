import Link from "next/link";
import React from "react";

const tabs = [
  { title: "About", routeSrc: "./about" },
  { title: "Projects", routeSrc: "./projects" },
  // { title: 'DSA', routeSrc: './dsa' },
  { title: "Contact", routeSrc: "./contacts" },
];

const Navbar = () => {
  return (
    <div className="flex justify-between bg-dark items-center font-sans gap-5">
        {tabs.map((tab, index) => (
          <Link
            key={index}
            href={tab.routeSrc}
            className="font-semibold hover:text-lime-400 transition-all duration-500"
          >
            {tab.title}
          </Link>
        ))}

      
    </div>
  );
};

export default Navbar;
