// HoverMenu.js
import React from "react";
import { TfiClose } from "react-icons/tfi"; // Import the close icon

const HoverMenu = ({ onClose }) => { // Accept onClose as a prop
  return (
    <div className="bg-white shadow-lg pt-8 px-6 relative">
      <button onClick={onClose} className="absolute top-4 right-4">
        <TfiClose size={24} />
      </button>
      <ul>
        <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
          <a href="">Vehicles</a>
        </li>
        <li className="py-3 pl-3 hover:rounded hover:bg-black/5">Energy</li>
        <li className="py-3 pl-3 hover:rounded hover:bg-black/5">Charging</li>
        <li className="py-3 pl-3 hover:rounded hover:bg-black/5">Discover</li>
        <li className="py-3 pl-3 hover:rounded hover:bg-black/5">Shop</li>
        <li className="py-3 pl-3 hover:rounded hover:bg-black/5">Support</li>
        <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
          United States
        </li>
        <li className="py-3 pl-3 hover:rounded hover:bg-black/5">Account</li>
      </ul>
    </div>
  );
};

export default HoverMenu;
