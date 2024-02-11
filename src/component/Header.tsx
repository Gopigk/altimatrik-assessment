import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="h-14 bg-gray-400 flex flex-row items-center justify-between p-2">
        <NavLink to="/" className="font-bold">
          LOGO
        </NavLink>
        <nav>
          <div className="flex flex-row gap-2 mr-10">
            <NavLink to="/" className="font-semibold">
              Home
            </NavLink>
            <NavLink to="/service" className="font-semibold">
              Services
            </NavLink>
            <NavLink to="/" className="font-semibold">
              Gallery
            </NavLink>
            <NavLink to="/" className="font-semibold">
              Contact us
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
