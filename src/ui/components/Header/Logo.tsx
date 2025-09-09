import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} className="h-full">
      <Image
        src="/images/icon.png"
        width={736}
        height={736}
        alt="logo"
        className="h-full w-auto"
        priority
      />
    </Link>
  );
};

export default Logo;
