import React from 'react';
import { hero } from "../constant";
import { downArrow, download } from "../assets"; // Importing download SVG
import Button from "./Button";

const Hero = () => {
  return (
    <section>
      {hero.map(({ id, img, title, desc, sdesc, button }) => (
        <div
          key={id}
          className="relative flex flex-col items-center justify-center"
        >
          <img src={img} className="h-screen w-full object-cover" alt={title} />
          <div className="absolute top-6 flex flex-col h-screen w-full items-center justify-between">
            <div className="flex flex-col items-center">
              {(id === "cyberTruck" || id === "solarPanels") && ( // Conditionally render download SVG for Cybertruck and white text for solarPanel
                <img
                  alt="Download"
                  src={download}
                  className={id === "cyberTruck" ? "h-20 mb-4 cursor-pointer" : "hidden"} // Hide download SVG for solarPanels
                />
              )}
              {id !== "modelY" && ( // Display title only if it's not "Model Y"
                <h1 className={id === "solarPanels" ? "text-white text-4xl font-medium" : "text-black text-4xl font-bold"}>{title}</h1>
              )}
              {id === "modelY" && ( // Apply styling for Model Y title
                <h1 className="text-black text-4xl font-bold">
                  <a href="#" className="font-bold hover:no-underline hover:underline">
                    {title}
                  </a>
                </h1>
              )}
              <p className={id === "solarPanels" ? "text-white text-xl" : "text-black text-xl"}>
                {id === "modelY" ? (
                  <>
                    <a href="#" className="underline  hover:underline text-xl">
                      0.99% APR Financing{" "}
                    </a>
                  </>
                ) : (
                  desc
                )}
              </p>
              {id === "solarPanels" && (
                <p className="text-xl">
                  <a href="#" className="underline hover:no-underline hover:underline">
                    {desc}
                  </a>
                </p>
              )}
              <p className="text-sm">{sdesc}</p>
            </div>
            <div className="flex flex-col w-full gap-y-6 sm:flex">
              <Button button={button} />
              <img
                alt="downArrow"
                src={downArrow}
                className="mb-12 h-8 animate-bounce cursor-pointer"
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Hero;
