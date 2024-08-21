import React from "react";
import dale from "../assets/img/airport.png";

const ContactImg = () => {
  return (
    <div className="w-[200px] h-[200px] rounded-full overflow-hidden shadow-md hover:animate-ring ">
      <img
        src={dale}
        alt="Dale Evan Rufila"
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
};

export default ContactImg;
