import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function SideButtons() {
  const buttons = [
    <Button key="one">One</Button>,
    <Button key="two">Two</Button>,
    <Button key="three">Three</Button>,
  ];

  const [hasScrolledFirst100vh, setHasScrolledFirst100vh] = useState(false);
  const [showSideButtons, setShowSideButtons] = useState(false);

  const handleScroll = () => {
    const first100vh = window.innerHeight;
    const scrollPosition = window.scrollY;
    setShowSideButtons(scrollPosition >= first100vh);
    if (!hasScrolledFirst100vh && scrollPosition >= first100vh) {
      setHasScrolledFirst100vh(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: showSideButtons ? 100 : -150,
        left: 0,
        transition: "bottom 0.3s ease-in-out",
      }}
    >
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical outlined button group"
      >
        {buttons}
      </ButtonGroup>
    </div>
  );
}
