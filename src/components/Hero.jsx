import React from "react";
import thank_you from "/thank_you.png";
const Hero = () => {
  return (
    <div className="md:mx-16 mx-3">
      <div className="flex flex-col md:flex-row justify-center items-center bg-[#e6ddd6]">
        <img src={thank_you} alt="heroImage" className="w-full max-w-80" />
      </div>
    </div>
  );
};

export default Hero;
