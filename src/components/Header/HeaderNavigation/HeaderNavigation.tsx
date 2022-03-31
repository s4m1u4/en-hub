import React, { FC, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { v4 as uuidv4 } from "uuid";
import { HeaderLogo } from "components/Header";

import { PAGES } from "components/Header/constants";

export const HeaderNavigation: FC = () => {
  const { pathname } = useLocation();
  const [isNavMenuOpen, setIsNavMenuOpen] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setIsNavMenuOpen(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setIsNavMenuOpen(null);
  };

  return (
    <>
      <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
        <HeaderLogo sx={{ mr: 2, maxWidth: "105px" }} />
        <Box>
          {PAGES.map(({ name, path }) => (
            <Typography
              variant="body1"
              component={Link}
              key={uuidv4()}
              to={path}
              sx={{
                px: 2,
                py: 0.5,
                borderRadius: 2,
                color: pathname === path ? "#fff" : "#37383c",
                backgroundColor: pathname === path ? "#28c38a" : "none",
              }}
            >
              {name}
            </Typography>
          ))}
        </Box>
      </Box>

      <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}>
        <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
          <MenuIcon />
        </IconButton>
        <Menu
          sx={{ display: { xs: "block", md: "none" } }}
          anchorEl={isNavMenuOpen}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(isNavMenuOpen)}
          onClose={handleCloseNavMenu}
        >
          {PAGES.map(({ name, path }) => (
            <MenuItem
              key={uuidv4()}
              component={Link}
              to={path}
              onClick={handleCloseNavMenu}
            >
              <Typography textAlign="center">{name}</Typography>
            </MenuItem>
          ))}
        </Menu>
        <HeaderLogo sx={{ ml: 2, maxWidth: "105px" }} />
      </Box>
    </>
  );
};
