import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface IProps {
  title: string;
  country: string;
  imageUrl: string;
}

const Card: FC<IProps> = ({ title, country, imageUrl }) => {
  return (
    <Link href={"/"} className="card">
      <div className="breadcrumb">POPULAR</div>
      <div>
        <Image
          src={imageUrl}
          sizes="100%"
          className="object-center object-cover"
          alt="preview"
          fill
        />
      </div>

      <h4>{title}</h4>
      <h5>{country}</h5>
    </Link>
  );
};

export default Card;
