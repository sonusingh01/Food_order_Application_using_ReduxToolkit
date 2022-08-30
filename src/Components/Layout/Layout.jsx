import React from "react";
import Router from "../../routes/Router";
import Header from "../Header/Header";

function Layout() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Router />
      </div>
    </div>
  );
}

export default Layout;
