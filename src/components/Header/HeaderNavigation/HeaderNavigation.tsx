import React, { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { green, grey } from "@mui/material/colors";
import { IconButton, Menu, MenuItem, Stack, Typography } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

import { HeaderLogo } from "components/Header";
import { PAGES_NAVIGATION } from "components/Header/constants";

export const HeaderNavigation: FC = () => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setIsNavMenuOpen(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setIsNavMenuOpen(null);
  };

  const handleLinkStyles: object = ({ isActive }: { isActive: boolean }) => ({
    color: isActive ? green[500] : grey[500],
  });

  return (
    <>
      <Stack
        spacing={2}
        direction="row"
        alignItems="center"
        display={{ xs: "none", md: "flex" }}
      >
        <HeaderLogo />
        <Stack spacing={2} direction="row" alignItems="center">
          {PAGES_NAVIGATION.map(({ name, path }) => (
            <Typography
              key={uuidv4()}
              variant="button"
              component={NavLink}
              to={path}
              style={handleLinkStyles}
            >
              {name}
            </Typography>
          ))}
        </Stack>
      </Stack>

      <Stack
        spacing={1}
        direction="row"
        alignItems="center"
        display={{ xs: "flex", md: "none" }}
      >
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
          {PAGES_NAVIGATION.map(({ name, path }) => (
            <MenuItem
              key={uuidv4()}
              component={NavLink}
              to={path}
              onClick={handleCloseNavMenu}
            >
              <Typography textAlign="center">{name}</Typography>
            </MenuItem>
          ))}
        </Menu>
        <HeaderLogo />
      </Stack>
    </>
  );
};
