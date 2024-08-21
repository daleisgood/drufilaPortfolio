import React from "react";

const AboutDetails = () => {
  return (
    <div className="w-full">
      <div
        className="text-black text-3xl font-semibold
        lg:text-4xl "
      >
        ABOUT ME
      </div>
      <div className="max-w-[300px] h-[1px] bg-tertiary"></div>
      <div
        className="text-black text-wrap my-4 text-lg
        lg:my-8 text-start"
      >
        A passionate Web and Application Developer with an IT background,
        skilled in HTML, CSS, JavaScript, PHP, and C#. Experienced in web
        development and technical assistance, I am now exploring React for
        dynamic, interactive web applications and C# (.NET, ASP) for application
        development. I am committed to delivering high-quality, visually
        appealing user interfaces.
      </div>
    </div>
  );
};

export default AboutDetails;
