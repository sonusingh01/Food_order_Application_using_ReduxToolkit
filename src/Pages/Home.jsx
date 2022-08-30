import { Box, Grid } from "@mui/material";
import React from "react";
import Swipper from "../Components/Swiper/Swipper";

function Home() {
  return (
    <div>
      <h1>
        <Swipper />
      </h1>
      <div className="container text-center mt-4">
        <h1>Welcome to tasty Treat</h1>
       
      </div>
    </div>
  );
}

export default Home;
