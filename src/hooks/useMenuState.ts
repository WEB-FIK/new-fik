import { useState } from "react";
import { LinkItem, SubLink } from "../components/ui/Navbar/Links/types";

const useMenuState = () => {
  const [currentMenu, setCurrentMenu] = useState<string>("main");
  const [subLinks, setSubLinks] = useState<SubLink[]>([]);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean>(false);

  const openSubMenu = (links: SubLink[], menuName: string) => {
    setSubLinks(links);
    setCurrentMenu(menuName);
    setIsSubMenuOpen(true);
  };

  const closeSubMenu = () => {
    setIsSubMenuOpen(false);
    setTimeout(() => {
      setCurrentMenu("main");
      setSubLinks([]);
    }, 500);
  };

  return {
    currentMenu,
    subLinks,
    isSubMenuOpen,
    openSubMenu,
    closeSubMenu,
  };
};

export default useMenuState;
