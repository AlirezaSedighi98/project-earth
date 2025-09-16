import Image from "next/image";

const HeroImg = () => {
  return (
    <>
      <Image
        fill
        src={"/images/hero-img.jpg"}
        alt="hero-image"
        className="hidden sm:block"
      />
      <Image
        fill
        src={"/images/mobile-hero-img.jpg"}
        alt="hero-image"
        className="sm:hidden"
      />
    </>
  );
};

export default HeroImg;
