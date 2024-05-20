import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white text-center py-6 text-lg">
      <p>
        ¹ Excludes taxes and fees with price subject to change. Available in
        select states and requires credit <br />
        approval.{" "}
        <a href="#" className="text-white underline">
          Est. gas savings is $100/month.
        </a>
      </p>
      <p>
        ² Price before estimated savings is $38,990, excluding taxes and fees.
        Subject to change.{" "}
        <a href="#" className="text-white underline">
          Learn about est. gas savings.
        </a>
      </p>
      <p>
        ³ Price before estimated savings is $77,990, excluding taxes and fees.
        Subject to change.{" "}
        <a href="#" className="text-white underline">
          Learn about est. gas savings.
        </a>
      </p>
      <p>
        ⁴ Price before estimated savings is $72,990, excluding taxes and fees.
        Subject to change.{" "}
        <a href="#" className="text-white underline">
          Learn about est. gas savings.
        </a>
      </p>
      <ul className="list-none flex flex-row flex-wrap justify-center">
        <li className="px-3 py-3 hover:rounded hover:bg-white/10">
          <a href="#" className="text-white">Tesla &#169; 2024</a>
        </li>
        <li className="px-3 py-3 hover:rounded hover:bg-white/10">
          <a href="#" className="text-white">Privacy & Legal</a>
        </li>
        <li className="px-3 py-3 hover:rounded hover:bg-white/10">
          <a href="#" className="text-white">Vehicle Recalls</a>
        </li>
        <li className="px-3 py-3 hover:rounded hover:bg-white/10">
          <a href="#" className="text-white">Contact</a>
        </li>
        <li className="px-3 py-3 hover:rounded hover:bg-white/10">
          <a href="#" className="text-white">Shop</a>
        </li>
        <li className="px-3 py-3 hover:rounded hover:bg-white/10">
          <a href="#" className="text-white">News</a>
        </li>
        <li className="px-3 py-3 hover:rounded hover:bg-white/10">
          <a href="#" className="text-white">Get Updates</a>
        </li>
        <li className="px-3 py-3 hover:rounded hover:bg-white/10">
          <a href="#" className="text-white">Locations</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
