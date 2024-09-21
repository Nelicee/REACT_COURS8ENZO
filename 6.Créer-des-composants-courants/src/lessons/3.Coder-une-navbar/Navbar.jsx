import { useState } from "react";
import hamburger from "./assets/hamburger.svg";
import close from "./assets/close.svg";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(true);
  
  return (
    <nav className="fixed top-0 w-full flex justify-center p-4 bg-slate-200">
      <ul
        className={`${
          showMenu ? "flex" : "hidden"
        } flex-col items-center  bg-slate-200 w-full absolute top-full pb-5 sm:flex sm:relative sm:flex-row sm:pb-0 sm:justify-center`}
      >
        <li className="inline-block py-2 mx-4 text-lg sm:py-0">
          <a href="#">Accueil</a>
        </li>

        <li className="inline-block py-2 mx-4 text-lg sm:py-0">
          <a href="#">Services</a>
        </li>

        <li className="inline-block py-2 mx-4 text-lg sm:py-0">
          <a href="#">Tarifs</a>
        </li>

        <li className="inline-block py-2 mx-4 text-lg sm:py-0">
          <a href="#">Contact</a>
        </li>
      </ul>
      <button
      onClick={() => setShowMenu(!showMenu)} 
      className="ml-auto sm:hidden"
      >
        <img 
        className="w-4" src={showMenu ? close : hamburger} alt={showMenu? "cacher le menu" : "Montrer le menu"} />
      </button>
    </nav>
  );
}
