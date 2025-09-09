import { navLinks } from "@/lib/staticData";
import Link from "next/link";
import React from "react";

const DesktopMenu = () => {
  return (
    <nav>
      <ul className="flex gap-20 text-white">
        {navLinks.map(({ href, title }) => (
          <li key={href}>
            <Link href={href}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopMenu;
