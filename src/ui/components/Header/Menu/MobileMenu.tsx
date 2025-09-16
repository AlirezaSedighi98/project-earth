"use client";
import { useEffect, useRef, useState } from "react";
import MenuIcon from "./MenuIcon";
import Drawer from "../Drawer";

const MobileMenu = () => {
  const drawerRef = useRef<HTMLDivElement>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDocumentClick = (event: PointerEvent) => {
    if (drawerRef && !drawerRef.current?.contains(event.target as Node)) {
      setIsDrawerOpen(false);
    }
  };

  useEffect(() => {
    if (isDrawerOpen) {
      document.addEventListener("click", handleDocumentClick);
    } else {
      document.removeEventListener("click", handleDocumentClick);
    }
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [isDrawerOpen]);

  return (
    <>
      <button onClick={() => setIsDrawerOpen((prev) => !prev)}>
        <h5>MENU</h5>
        <MenuIcon />
      </button>
      <Drawer ref={drawerRef} open={isDrawerOpen} />
    </>
  );
};

export default MobileMenu;
