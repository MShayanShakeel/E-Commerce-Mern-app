import React from "react";
import { Link, Outlet } from "react-router-dom";

const PrivateComponent = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default PrivateComponent;
