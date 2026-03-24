import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo/icon.png";

const navList = [
  {
    label: "Home",
    to: "/home",
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

const NavLinks = () => {
  return (
    <ul className="flex gap-4">
      {navList.map((nav) => (
        <li key={nav.label}>
          <NavLink  className="text-sm" to={nav.to}>
            {nav.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

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
const LocationSelector = () => {
    const [value, setValue] =  useState("")
    return <select className="px-2 py-1 border-2 border-solid border-border rounded-xl"
     value={value} onChange={(e) => {
        setValue(e.target.value)
    }}>
        <option value="" >Please Select Location</option>
        {locations.map(location => (<option key={location.id} value={location.id}>{location.label}</option>))}
    </select>
}

export default function Navbar() {
  return (
    <nav aria-label="main navigation">
        <div  className="flex items-center justify-between">
         <Link className="flex gap-x-0.5 items-center justify-center" to="/">
        <img className="h-6" src={Logo} alt="" />
        <span className="font-semibold text-xl">Bikelelo</span>
      </Link>
      
      <NavLinks />
      

       
       <div className="flex gap-4 justify-center items-center">
        <LocationSelector />
       <NavLink className="text-sm"  to="/list-bikes">List Bikes</NavLink>
       <button className="text-sm px-4 py-2 bg-blue-600 text-amber-50 rounded-full">
            Login
       </button>

       </div>

        </div>
     
       
    </nav>
   
  );
}
