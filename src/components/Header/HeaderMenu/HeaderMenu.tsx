import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import {
  Box,
  Menu,
  Avatar,
  MenuItem,
  Typography,
  IconButton,
} from "@mui/material";

import { PAGES_MENU } from "components/Header/constants";

export const HeaderMenu: FC = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setIsUserMenuOpen(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setIsUserMenuOpen(null);
  };

  return (
    <Box>
      <IconButton onClick={handleOpenUserMenu}>
        <Avatar src="" alt="" />
      </IconButton>
      <Menu
        sx={{ mt: "45px" }}
        anchorEl={isUserMenuOpen}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(isUserMenuOpen)}
        onClose={handleCloseUserMenu}
      >
        {PAGES_MENU.map(({ name, path }) => (
          <MenuItem
            key={uuidv4()}
            component={Link}
            to={path}
            onClick={handleCloseUserMenu}
          >
            <Typography>{name}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};
