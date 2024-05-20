import React, { useState } from "react";
import { GoQuestion } from "react-icons/go";
import { TfiWorld } from "react-icons/tfi";
import { FaRegCircleUser } from "react-icons/fa6";
import HoverVehicles from "./HoverVehicles";
import HoverEnergy from "./HoverEnergy";
import HoverCharging from "./HoverCharging";
import HoverDiscover from "./HoverDiscover";
import HoverShop from "./HoverShop";
import HoverMenu from "./HoverMenu"; // Import the HoverMenu component

const Navbar = () => {
  const [hover, setHover] = useState(null);

  const handleMenuClose = () => {
    setHover(null);
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center px-12 p-4 text-sm font-bold">
        <div>
          <a href="https://tesla.com">
            <img
              className="h-3"
              src="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0idGRzLWljb24gdGRzLWljb24tbG9nby13b3JkbWFyayB0ZHMtc2l0ZS1sb2dvLWljb24iIHZpZXdCb3g9IjAgMCAzNDIgMzUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgLjFhOS43IDkuNyAwIDAgMCA3IDdoMTFsLjUuMXYyNy42aDYuOFY3LjNMMjYgN2gxMWE5LjggOS44IDAgMCAwIDctN0gwem0yMzguNiAwaC02Ljh2MzQuOEgyNjNhOS43IDkuNyAwIDAgMCA2LTYuOGgtMzAuM1Ywem0tNTIuMyA2LjhjMy42LTEgNi42LTMuOCA3LjQtNi45bC0zOC4xLjF2MjAuNmgzMS4xdjcuMmgtMjQuNGExMy42IDEzLjYgMCAwIDAtOC43IDdoMzkuOXYtMjFoLTMxLjJ2LTdoMjR6bTExNi4yIDI4aDYuN3YtMTRoMjQuNnYxNGg2Ljd2LTIxaC0zOHpNODUuMyA3aDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN3ptMCAxMy44aDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN3ptMCAxNC4xaDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN3pNMzA4LjUgN2gyNmE5LjYgOS42IDAgMCAwIDctN2gtNDBhOS42IDkuNiAwIDAgMCA3IDd6IiBmaWxsPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4="
              alt="Tesla logo"
            />
          </a>
        </div>
        <div className="hidden lg:inline">
          <ul className="flex justify-center hover:cursor-pointer">
            <li
              className="py-1 px-3 hover:rounded hover:bg-black/5"
              onMouseEnter={() => setHover("vehicles")}
              onMouseLeave={() => setHover(null)}
            >
              Vehicles
            </li>
            <li
              className="py-1 px-3 hover:rounded hover:bg-black/5"
              onMouseEnter={() => setHover("energy")}
              onMouseLeave={() => setHover(null)}
            >
              Energy
            </li>
            <li
              className="py-1 px-3 hover:rounded hover:bg-black/5"
              onMouseEnter={() => setHover("charging")}
              onMouseLeave={() => setHover(null)}
            >
              Charging
            </li>
            <li
              className="py-1 px-3 hover:rounded hover:bg-black/5"
              onMouseEnter={() => setHover("discover")}
              onMouseLeave={() => setHover(null)}
            >
              Discover
            </li>
            <li
              className="py-1 px-3 hover:rounded hover:bg-black/5"
              onMouseEnter={() => setHover("shop")}
              onMouseLeave={() => setHover(null)}
            >
              Shop
            </li>
          </ul>
        </div>
        <div className="hidden lg:inline">
          <ul className="flex justify-center hover:cursor-pointer">
            <li className="py-1 px-3 hover:rounded hover:bg-black/5">
              <GoQuestion size={23} />
            </li>
            <li className="py-1 px-3 hover:rounded hover:bg-black/5">
              <TfiWorld size={21} />
            </li>
            <li className="py-1 px-3 hover:rounded hover:bg-black/5">
              <FaRegCircleUser size={23} />
            </li>
          </ul>
        </div>
        <div className="lg:hidden justify-end">
          <button
            onClick={() => setHover(hover === "menu" ? null : "menu")}
            className="justify-end inline-flex gap-10px rounded-md py-2 px-4 text-sm font-medium bg-black/5 hover:bg-black/10"
          >
            Menu
          </button>
        </div>
      </div>
      <div className="absolute top-16 left-0 right-0 z-10">
        {hover === "vehicles" && <HoverVehicles />}
        {hover === "energy" && <HoverEnergy />}
        {hover === "charging" && <HoverCharging />}
        {hover === "discover" && <HoverDiscover />}
        {hover === "shop" && <HoverShop />}
        {hover === "menu" && <HoverMenu onClose={handleMenuClose} />} {/* Pass the handleMenuClose function to HoverMenu */}
      </div>
    </div>
  );
};

export default Navbar;
