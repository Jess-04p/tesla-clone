import React from "react";

const HoverVehicles = () => {
  return (
    <div className="overflow-x-auto">
      <div className="py-6 bg-white shadow-lg rounded">
        {/* First row of images */}
        <div className="flex justify-center"> {/* Center align the row */}
          <div className="flex p-4 space-x-4">
            <div className="text-center">
              <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-S.png" alt="Model S" className="h-24" />
              <p>Model S</p>
              <div className="flex justify-center space-x-2">
                <a href="#" className="text-blue-500">Learn</a>
                <a href="#" className="text-blue-500">Order</a>
              </div>
            </div>
            <div className="text-center">
              <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-3-Performance-LHD.png" alt="Model 3" className="h-24" />
              <p>Model 3</p>
              <div className="flex justify-center space-x-2">
                <a href="#" className="text-blue-500">Learn</a>
                <a href="#" className="text-blue-500">Order</a>
              </div>
            </div>
            <div className="text-center">
              <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-X.png" alt="Model X" className="h-24" />
              <p>Model X</p>
              <div className="flex justify-center space-x-2">
                <a href="#" className="text-blue-500">Learn</a>
                <a href="#" className="text-blue-500">Order</a>
              </div>
            </div>
            <div className="text-center">
              <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-Y.png" alt="Model Y" className="h-24" />
              <p>Model Y</p>
              <div className="flex justify-center space-x-2">
                <a href="#" className="text-blue-500">Learn</a>
                <a href="#" className="text-blue-500">Order</a>
              </div>
            </div>
          </div>
        </div>
        {/* Second row of images */}
        <div className="flex justify-center"> {/* Center align the row */}
          <div className="flex p-4 space-x-4">
            <div className="text-center">
              <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Cybertruck-1x.png" alt="Cybertruck" className="h-24" />
              <p>Cybertruck</p>
              <div className="flex justify-center space-x-2">
                <a href="#" className="text-blue-500">Learn</a>
                <a href="#" className="text-blue-500">Order</a>
              </div>
            </div>
            <div className="text-center">
              <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-HMC-RedBlue-LHD.png" alt="Help Me Choose" className="h-24" />
              <p>Help Me Choose</p>
              <div className="flex justify-center space-x-2">
                <a href="#" className="text-blue-500">Learn</a>
                <a href="#" className="text-blue-500">Order</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverVehicles;
