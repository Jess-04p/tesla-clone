import React from "react";

const HoverShop = () => {
  return (
    <div className="overflow-x-auto">
      <div className="py-6 bg-white shadow-lg rounded">
        {/* First row of images */}
        <div className="flex justify-center">
          {" "}
          {/* Center align the row */}
          <div className="flex p-4 space-x-4">
            <div className="text-center"><a>
              <img
                src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Shop-Charging.png"
                alt="Model S"
                className="h-24"
              />
              <p>Charging</p></a>
              
            </div>
            <div className="text-center"><a>
              <img
                src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Shop-Vehicle-Accessories.png"
                alt="Model 3"
                className="h-24"
              />
              <p>Vehicle Accessories</p></a>
              
            </div>
            <div className="text-center"><a>
              <img
                src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Shop-Apparel.png"
                alt="Model X"
                className="h-24"
              />
              <p>Apparel</p></a>
             
            </div>
            <div className="text-center"><a>
              <img
                src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Shop-Lifestyle.png"
                alt="Model Y"
                className="h-24"
              />
              <p>Lifestyle</p></a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverShop;
