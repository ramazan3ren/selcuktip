import React, { useEffect } from "react";
import "bulma/css/bulma.css";
import "../../assets/css/navbar.css";
import Body from "./input";
import MainLayout from "../../Layout/MainLayout";
function Home() {
  return (
    <>
      <MainLayout />
      <div className="body">
        <Body />
      </div>
    </>
  );
}

export default Home;
