import Image from "next/image";
import { FC } from "react";

interface IProps {
  title: string;
  country: string;
  imageUrl: string;
}

const Card: FC<IProps> = ({ title, country, imageUrl }) => {
  console.log(imageUrl);
  return (
    <div className="h-[500px] rounded-s p-2rem bg-solid-white flex flex-col relative">
      <div className="breadcrumb">POPULAR</div>
      <div className="w-full h-full relative">
        <Image
          src={imageUrl}
          className="object-cover object-center"
          alt="preview"
          fill
          loading="lazy"
        />
      </div>

      <h4 className="text-large mt-auto">{title}</h4>
      <h5 className="text-larger opacity-30">{country}</h5>
    </div>
  );
};

export default Card;
