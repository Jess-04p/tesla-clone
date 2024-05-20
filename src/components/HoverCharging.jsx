import React from "react";

const HoverCharging = () => {
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
                src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Charging-Charging.png"
                alt="Model S"
                className="h-24"
              />
              <p>Charging</p>
              <div className="flex justify-center space-x-2">
                <a href="#" className="text-blue-500">
                  Learn
                </a>
              </div>
            </div>
            <div className="text-center">
              <img
                src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Charging-Home-Charging.png"
                alt="Model 3"
                className="h-24"
              />
              <p>Home Charging</p>
              <div className="flex justify-center space-x-2">
                <a href="#" className="text-blue-500">
                  Learn
                </a>
                <a href="#" className="text-blue-500">
                  Shop
                </a>
              </div>
            </div>
            <div className="text-center">
              <img
                src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Charging-Supercharging-NA.png"
                alt="Model X"
                className="h-24"
              />
              <p>Supercharging</p>
              <div className="flex justify-center space-x-2">
                <a href="#" className="text-blue-500">
                  Learn
                </a>
                <a href="#" className="text-blue-500">
                  Find
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverCharging;
