import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import CottageRoundedIcon from '@mui/icons-material/CottageRounded';

import { NavLink } from "react-router-dom";
const Header = () => {
  const [value, setValue] = useState();
  return (
    <div>
      <AppBar sx={{ backgroundColor: "#232F3D" }} position="sticky">
        <Toolbar>
          <NavLink to="/" style={{ color: "white" }}>
            <Typography>
              <CottageRoundedIcon />
            </Typography>
          </NavLink>
          <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit"
            indicatorColor="primary"
            value={value}
            onChange={(e, val) => setValue(val)}
          > 

            <Tab LinkComponent={NavLink} to="/add" label="Add MEMORIES" />
            <Tab LinkComponent={NavLink} to="/memories" label="MEMORIES" />
            <Tab LinkComponent={NavLink} to="/about" label="About" />

          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
