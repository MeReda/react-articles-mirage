import React from "react";
import { Outlet } from "react-router";
import FrNavBar from "./FrNavBar";

const FrLayout = () => {
  return (
    <>
      <FrNavBar />
      <Outlet />
    </>
  );
};

export default FrLayout;
