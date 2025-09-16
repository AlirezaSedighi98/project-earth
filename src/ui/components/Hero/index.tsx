import Image from "next/image";
import Link from "next/link";
import HeroImg from "./HeroImg";

const Hero = () => {
  return (
    <div className="hero-container">
      <HeroImg />
      <h1>{"DISCOVER\nEVERY CITY\nIN THE WORLD."}</h1>
      <p>
        {
          "Search any city and uncove\nits history, culture, and must-know details."
        }
      </p>
      <Link href={"/explore"}>EXPLORE</Link>
    </div>
  );
};

export default Hero;
