import Image from "next/image";

const HeroImg = () => {
  return (
    <>
      <Image
        priority
        fill
        sizes="100vw"
        src={
          "https://kuwswlhsvzkemdgc.public.blob.vercel-storage.com/pexels-maxime-francis-2246476.jpg"
        }
        alt="hero-image"
      />
    </>
  );
};

export default HeroImg;
