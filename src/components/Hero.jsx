import React, { useState } from "react";
import { Bike, Scooter, Zap, Search } from "lucide-react";
import HERO_IMG from "../assets/bikeheroimage.png";
import BIKE_LOTTIE from "../assets/lottie/oldrider.json";
import { Player } from "@lottiefiles/react-lottie-player";
import LocationSelector from "./LocationSelector";
const BIKE_TYPE = [
  {
    id: "Bike",
    type: "Bike",
    icon: Bike,
  },
  {
    id: "Scooty",
    type: "Scooty",
    icon: Scooter,
  },
  {
    id: "EV",
    type: "EV",
    icon: Zap,
  },
];
console.log("BIKE_LOTTIE", BIKE_LOTTIE);
function Hero() {
  const [selectedBikeTypes, setSelectedBikeTypes] = useState(
    BIKE_TYPE.map((x) => x.id),
  );
  console.log(selectedBikeTypes);
  return (
    <section className="flex flex-col items-center justify-center bg-light py-8">
      <h1 className="text-4xl font-semibold">
        Rent bikes from owner at lowest price
      </h1>

      <form className="mt-10 flex flex-col items-center ">
        <Player
          autoplay
          loop
          src={BIKE_LOTTIE}
          style={{ width: 100, height: 80, marginBottom: "-18px" }}
        />
        <fieldset className="h-14 p-2  bg-white flex justify-evenly items-center  rounded-full -mb-8 z-10">
          <legend className="sr-only">
            Select Type of Bikes you want to search:
          </legend>
          
          {BIKE_TYPE.map((b, index) => {
            const Icon = b.icon;
            const isSelected = selectedBikeTypes.includes(b.id);
            return (
              <label
                key={b.id}
                className={`flex gap-1 cursor-pointer text-gray-600 justify-center items-center m-1 px-2 py-1 pointer ${isSelected ? "bg-light text-primary border-b-1 border-b-primary/10" : "bg-none"}  rounded-full`}
              >
                <input
                  type="checkbox"
                  className="sr-only"
                  name="select-bike-type"
                  onChange={() => {
                    setSelectedBikeTypes((prev) =>
                      prev.includes(b.id)
                        ? prev.filter((x) => x !== b.id)
                        : [...prev, b.id],
                    );
                  }}
                  checked={isSelected}
                />
                <Icon aria-hidden="true" /> {b.type}
              </label>
            );
          })}
        </fieldset>

        <div className="bg-white shadow-md rounded-4xl">
          <ul className="flex flex-col md:flex-row flex m-8 gap-10 justify-around items-center">
            <li className="flex flex-col gap-1">
              <label htmlFor="location-selector">Pickup Location</label>
              <LocationSelector />
            </li>
            <li className="hidden lg:block h-10 w-0.5 bg-primary/20 "></li>
            <li className="flex flex-col gap-1">
              <label>Pickup Date</label>
              <input type="date" />
            </li>
             <li className="hidden lg:block h-10 w-0.5 bg-primary/20"></li>
            <li className="flex flex-col gap-1">
              <label>Drop Off Date</label>
              <input type="date" />
            </li>
            <li>
              <button className="p-4 primary-button">
                <Search />
              </button>
            </li>
          </ul>
        </div>
      </form>

      <img src={HERO_IMG} className="w-xl" alt="hero image"></img>
    </section>
  );
}

export default Hero;
