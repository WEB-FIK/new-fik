export interface SubLink {
    name: string;
    path: string;
  }
  
  export interface LinkItem {
    name: string;
    path: string;
    subLinks?: SubLink[];
  }
  
  export interface LinksProps {
    closeMenu: () => void;
  }
  
  export interface Item {
    name: string;
    path: string;
    subLinks?: SubLink[];
  }
  