import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const Menu = () => {
  return (
    <>
      <div className="md:hidden">
        <MobileMenu />
      </div>
      <div className="hidden md:block">
        <DesktopMenu />
      </div>
    </>
  );
};

export default Menu;
