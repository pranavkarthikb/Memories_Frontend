import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{ fontFamily: "fantasy" }} variant="h2">
          MEMORIES APP
        </Typography>
        <Typography sx={{ fontFamily: "fantasy" }} variant="P">
          By MERN STACK
        </Typography>
      </Box>
    </div>
  );
};

export default About;
