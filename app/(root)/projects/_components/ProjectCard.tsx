import Image from "next/image";
import React from "react";

const ProjectCard = () => {
  return (
    <div className="w-full h-full">
      <div className=" p-2 rounded-xl h-full">
        
        <Image
          src="/ProjectImage1.JPG" // Ensure this path is correct
          width={600} // Use the actual width of the image
          height={400} // Use the actual height of the image
          alt="project image"
          className="rounded-xl h-full w-full object-cover" // Use object-cover for better scaling
        />
      </div>
      <div className="bg-blue-300 absolute"></div>
    </div>
  );
};

export default ProjectCard;
