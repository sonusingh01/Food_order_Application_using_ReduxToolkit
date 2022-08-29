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
        <Box>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 4, md: 5 }}
          >
            <Grid xs={6 } style={{textAlign:"center", fontSize:'2rem'}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              consequuntur dolorum adipisci nulla, sapiente repellat
              consectetur, aperiam accusantium libero reiciendis dolore
              deserunt, animi fuga quis illo ullam commodi. Cumque, 
            </Grid>
            <Grid xs={6} style={{textAlign:"center", fontSize:'2rem'}}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              quidem illo excepturi eaque dicta id accusantium aliquid 
              autem nesciunt! Earum illum mollitia eum dicta quasi facili
              eius minus.{" "}
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}

export default Home;
