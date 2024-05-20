import React from "react";

const HoverDiscover = () => {
  return (
    <div className="flex justify-center items-center bg-white p-6">
      <div className="flex justify-between space-x-16"> {/* Increased space-x to 16 */}
        <div className="flex flex-col">
          <ul className="list-none">
            <li className="px-1 py-1 text-gray-500">
              <a href="#" className="text-black hover:underline">Resources</a>
            </li>
            <li className="px-1 py-1">
              <a href="#" className="text-black hover:underline">Demo Drive</a>
            </li>
            <li className="px-1 py-1">
              <a href="#" className="text-black hover:underline">Insurance</a>
            </li>
            <li className="px-1 py-1">
              <a href="#" className="text-black hover:underline">Video Guides</a>
            </li>
            <li className="px-1 py-1">
              <a href="#" className="text-black hover:underline">Customer Stories</a>
            </li>
            <li className="px-1 py-1">
              <a href="#" className="text-black hover:underline">Events</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <ul className="list-none">
            <li className="px-1 py-1 text-gray-500">
              <a href="#" className="text-black hover:underline">Location Services</a>
            </li>
            <li className="px-1 py-1">
              <a href="#" className="text-black hover:underline">Find Us</a>
            </li>
            <li className="px-1 py-1">
              <a href="#" className="text-black hover:underline">Find a Collision Center</a>
            </li>
            <li className="px-1 py-1">
              <a href="#" className="text-black hover:underline">Find a Certified Installer</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <ul className="list-none">
            <li className="px-1 py-1 text-gray-500">
              <a href="#" className="text-black hover:underline">Company</a>
            </li>
            <li className="px-1 py-1">
              <a href="#" className="text-black hover:underline">About</a>
            </li>
            <li className="px-1 py-1">
              <a href="#" className="text-black hover:underline">Careers</a>
            </li>
            <li className="px-1 py-1">
              <a href="#" className="text-black hover:underline">Investor Relations</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HoverDiscover;
