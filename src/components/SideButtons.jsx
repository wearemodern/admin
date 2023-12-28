import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import StayPrimaryPortraitIcon from "@mui/icons-material/StayPrimaryPortrait";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import { TbArrowBigUpLinesFilled } from "react-icons/tb";
import Tooltip from "@mui/material/Tooltip";
import "../../css/sideButtons.css";
export default function SideButtons() {
  const buttons = [
    <Tooltip title="دریافت اپلیکیشن" placement="right-start" style={{height:'37px'}}>
      <Button key="one" className="bg-black side-btn w-100 border-bottom border-white">
        <StayPrimaryPortraitIcon />
      </Button>
    </Tooltip>,
    <Tooltip title="نمایشگاه مجازی" placement="right-start" style={{height:'37px'}}>
      <Button key="two" className="bg-black side-btn w-100 border-bottom border-white border-top" >
        VR
      </Button>
      
    </Tooltip>,
    <Tooltip title="پیام به پشتیبانی" placement="right-start" style={{height:'37px'}}>
      <Button key="three" className="bg-black side-btn w-100  border-bottom border-white border-top ">
        <QuestionAnswerOutlinedIcon />
      </Button>
      
    </Tooltip>,
    <Tooltip title="انتقال به ابتدای صفحه" placement="right-start" style={{height:'37px'}}>
      <Button key="four" className="bg-black side-btn w-100 border-top border-white" onClick={()=>window.scrollTo(0,0)}>
        <TbArrowBigUpLinesFilled style={{ fontSize: "22px" }} />
      </Button>
      
    </Tooltip>,
  ];

  const [hasScrolledFirst100vh, setHasScrolledFirst100vh] = useState(false);
  const [showSideButtons, setShowSideButtons] = useState(false);

  const handleScroll = () => {
    const first100vh = window.innerHeight / 2;
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
        zIndex: "5",
      }}
    >
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="contained"
      >
        {buttons}
      </ButtonGroup>
    </div>
  );
}
