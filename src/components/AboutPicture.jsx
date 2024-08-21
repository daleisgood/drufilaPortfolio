import React from "react";
import rufilaBarong from "../assets/img/rufilaBarong.jpg";
import rufilaCorporate from "../assets/img/rufilaCorporate.jpg";

const AboutPicture = () => {
  return (
    <div
      className="h-[400px] relative w-full max-w-[700px] group
    md:h-[550px]  "
    >
      <div className="group-child transition-all duration-300 ease-in-out  w-[60%]  h-[60%] absolute top-0 left-0 rounded-xl overflow-hidden shadow-lg ">
        {" "}
        <img
          src={rufilaBarong}
          alt="Barong"
          className="object-cover object-top w-[100%] h-[100%]"
        />
      </div>
      <div className="group-child transition-all duration-300 ease-in-out  w-[60%] h-[60%] absolute bottom-0 right-0 rounded-xl overflow-hidden shadow-lg">
        {" "}
        <img
          src={rufilaCorporate}
          alt="Corparate"
          className="object-cover object-top w-[100%] h-[100%]"
        />
      </div>
    </div>
  );
};

export default AboutPicture;
