import React from "react";
import NavLinks from "./NavLinks/NavLinks";
import { LinkItem } from "./types";

interface MainMenuProps {
  links: LinkItem[];
  onLinkClick: (link: LinkItem) => void;
}

const MainMenu: React.FC<MainMenuProps> = ({ links, onLinkClick }) => {
  return (
    <>
      {links.map((link) => (
        <div key={link.name} onClick={() => onLinkClick(link)}>
          <NavLinks item={link} />
        </div>
      ))}
    </>
  );
};

export default MainMenu;
