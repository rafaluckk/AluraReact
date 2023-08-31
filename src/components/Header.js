import React from "react";
import Logo from "../assets/Logo.svg";
import Lupa from "../assets/Vector.svg";

function Header() {
  return (
    <div className="mb-8">
      <header className="pt-4 px-36">
        <div className="container flex justify-between items-center">
          <div className="">
            <a href="/src/App.js">
            <img className="mr-4 cursor-pointer" src={Logo} alt="Logo" />
            </a>
          </div>
          <div className="relative">
            <input
              type="email"
              placeholder="O que deseja encontrar?"
              className="p-3 bg-gray-50  border border-gray-100 px-4 rounded-3xl w-96"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-5 ">
              <img className="h-5 w-5 text-gray-400" src={Lupa} alt="lupa" />
            </div>
          </div>
          <nav className="space-x-4">
            <a
              href="0"
              className="text-blue-500 px-14 py-3 border border-blue-500 font-normal text-base"
            >
              Login
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
