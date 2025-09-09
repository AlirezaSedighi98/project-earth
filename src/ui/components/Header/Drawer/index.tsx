"use client";
import { navLinks } from "@/lib/staticData";
import clsx from "clsx";
import Link from "next/link";
import { FC, MouseEventHandler, RefObject } from "react";

interface IProps {
  open: boolean;
  ref: RefObject<HTMLDivElement | null>;
}

const Drawer: FC<IProps> = ({ open, ref }) => {
  const handleDrawerClick: MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation();
  };

  return (
    <div
      ref={ref}
      className={clsx("drawer", !open && "translate-x-full")}
      onClick={handleDrawerClick}
    >
      <nav>
        <ul>
          {navLinks.map(({ title, href }) => (
            <li key={href}>
              <Link href={href}>{title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Drawer;
