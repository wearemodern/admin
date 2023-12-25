import React, { useState, useEffect, useRef } from "react";
import Menu from "./Menu";
import MenuIcon from "@mui/icons-material/Menu";
export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div ref={menuRef}>
      <div onClick={handleMenuClick}>
        <MenuIcon className="text-white" />
      </div>
      {isOpen && <Menu onClick={handleMenuClick}/>}
    </div>
  );
}
