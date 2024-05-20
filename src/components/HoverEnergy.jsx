import React from "react";

const HoverEnergy = () => {
  return (
    <div className="overflow-x-auto">
      <div className="py-6 bg-white shadow-lg rounded">
        {/* First row of images */}
        <div className="flex justify-center">
          {" "}
          {/* Center align the row */}
          <div className="flex p-4 space-x-4">
            <div className="text-center">
              <img
                src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Solar-Panels.png"
                alt="Model S"
                className="h-24"
              />
              <p>Solar Panels</p>
              <div className="flex justify-center space-x-2">
                <a href="#" className="text-blue-500">
                  Learn
                </a>
                <a href="#" className="text-blue-500">
                  Order
                </a>
              </div>
            </div>
            <div className="text-center">
              <img
                src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Solar-Roof.png"
                alt="Model 3"
                className="h-24"
              />
              <p>Solar Roof</p>
              <div className="flex justify-center space-x-2">
                <a href="#" className="text-blue-500">
                  Learn
                </a>
                <a href="#" className="text-blue-500">
                  Order
                </a>
              </div>
            </div>
            <div className="text-center">
              <img
                src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Powerwall-US.png"
                alt="Model X"
                className="h-24"
              />
              <p>Powerwall</p>
              <div className="flex justify-center space-x-2">
                <a href="#" className="text-blue-500">
                  Learn
                </a>
                <a href="#" className="text-blue-500">
                  Order
                </a>
              </div>
            </div>
            <div className="text-center">
              <img
                src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Megapack.png"
                alt="Model Y"
                className="h-24"
              />
              <p>Megapack</p>
              <div className="flex justify-center space-x-2">
                <a href="#" className="text-blue-500">
                  Learn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverEnergy;
