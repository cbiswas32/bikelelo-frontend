import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo/icon.png";
import { LocationEdit, Menu, X } from "lucide-react";
import LocationSelector from "./LocationSelector";

const navList = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Bikes",
    to: "/bikes",
  },
  {
    label: "About",
    to: "/about",
  },
];



const locations = [
  {
    id: "kolkata",
    label: "Kolkata",
  },
  {
    id: "siliguri",
    label: "Siliguri",
  },
  {
    id: "hydrabad",
    label: "Hydrabad",
  },
];
// const LocationSelector = () => {
//   const [value, setValue] = useState("");
//   return (
//     <>
//       <label htmlFor="location" className="sr-only">
//         Location
//       </label>
//       <div className="relative">
//         <LocationEdit className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-dull pointer-events-none" />
//         <select
//           id="location"
//           className="px-2 py-1 pl-8 border-2 border-solid border-primary-dull focus:outline-none focus:ring-1 focus:ring-primary/40 rounded-xl text-sm"
//           value={value}
//           onChange={(e) => {
//             setValue(e.target.value);
//           }}
//         >
//           <option value="">Select Location</option>
//           {locations.map((location) => (
//             <option key={location.id} value={location.id}>
//               {location.label}
//             </option>
//           ))}
//         </select>
//       </div>
//     </>
//   );
// };

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav
      aria-label="main navigation"
      className="relative bg-light flex items-center justify-center border-b-1 border-b-primary/50"
    >
      <div className="flex items-center justify-between w-5xl p-2">
        <Link className="flex gap-x-0.5 items-center justify-center" to="/">
          <img className="h-6" src={Logo} alt="" />
          <span className="font-semibold text-xl">Bikelelo</span>
        </Link>

        <ul className="hidden lg:flex lg:flex-row gap-4">
      {navList.map((nav) => (
        <li key={nav.label}>
          <NavLink className="text-sm" to={nav.to}>
            {nav.label}
          </NavLink>
        </li>
      ))}
    </ul>

        <div className="hidden lg:block flex gap-4 justify-center items-center">
         
          <div className="hidden lg:flex gap-4 items-center justify-center">
           <LocationSelector />
            <NavLink className="text-sm" to="/list-bikes">
            List Bikes
          </NavLink>
          <button className="text-sm px-4 py-2 primary-button">Login</button>
          </div>
        
        </div>

      <button className="lg:hidden" onClick={() => setMenuOpen(true)}> <Menu /></button>

       {menuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden absolute right-0 top-0 bg-white z-50 flex flex-col gap-4 px-4 pb-4 border-t border-primary/20"
        >
          <ul className="flex flex-col gap-3 pt-4">
            {navList.map((nav) => (
              <li key={nav.label}>
                <NavLink
                  className="text-sm"
                  to={nav.to}
                  onClick={() => setMenuOpen(false)} // close on navigate
                >
                  {nav.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <LocationSelector />

          <NavLink
            className="text-sm"
            to="/list-bikes"
            onClick={() => setMenuOpen(false)}
          >
            List Bikes
          </NavLink>

          <button className="text-sm px-4 py-2 primary-button w-full">
            Login
          </button>
        </div>
      )}
      </div>
    </nav>
  );
}
