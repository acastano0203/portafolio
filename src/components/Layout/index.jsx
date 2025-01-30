import React from "react";
import "./styles.css";

const Layout = ({ children }) => {
  return (
    <div className="circular-gradient text-white">
      <main>{children}</main>
    </div>
  );
};

export default Layout;
