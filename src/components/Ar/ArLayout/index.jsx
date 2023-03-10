import React from "react";
import { Outlet } from "react-router";
import ArNavBar from "./ArNavBar";

const ArLayout = () => {
  return (
    <div className="rtl">
      <ArNavBar />
      <Outlet />
    </div>
  );
};

export default ArLayout;
