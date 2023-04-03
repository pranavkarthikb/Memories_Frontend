import { Button, Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Button
          LinkComponent={Link}
          to="/memories"
          sx={{ marginTop: 50, background: "BLACK" }}
          variant="contained"
        >
          <Typography variant="h3">View All MEMORIES</Typography>
        </Button>
      </Box>
    </div>
  );
};

export default Home;
