import React from "react";
import "../../../css/footer.css";
import FooterCol1 from "./FooterCol1";
import FooterCol2 from "./FooterCol2";
import FooterCol3 from "./FooterCol3";
import FooterCol4 from "./FooterCol4";
function Footer() {
  
  return (
    <div className="  footer-page w-100 p-5 d-flex justify-content-start align-items-start w-100 flex-column flex-sm-row footer-container col-12">
     <FooterCol1/>
      <FooterCol2/>
      <FooterCol3/>
     <FooterCol4/>
    </div>
  );
}
export default Footer;
