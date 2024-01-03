import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import "./../../../css/singleProduct/singleProduct.css";
export default function CustomSeparator() {
  const breadcrumbs = [
    <Link
      style={{ textDecoration: "none" }}
      key="1"
      className="breadcrumb-text"
      to="/"
    >
      دسته‌بندی
    </Link>,
    <Link
      key="2"
      to="/material-ui/getting-started/installation/"
      style={{ textDecoration: "none" }}
      className="breadcrumb-text"
    >
      زیر  دسته‌بندی
    </Link>,
    <span key="3" color="text.primary">
      زیر زیر دسته‌بندی
    </span>,
  ];
  return (
    <Breadcrumbs separator="›" aria-label="breadcrumb">
      {breadcrumbs}
    </Breadcrumbs>
  );
}
