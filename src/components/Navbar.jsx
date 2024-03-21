import React from "react";
import ReactDOM from "react-dom";

function Navbar() {
  return (
    <div className="fixed shadow-md top-0 w-full z-50 bg-custom-purple-700 text-white py-4">
      <nav className="container mx-auto flex justify-between px-4 md:px-0">
        <div>LeetStats</div>
        <div>{/* Navigation Links or Icons */}</div>
      </nav>
    </div>
  );
}

export default Navbar;
