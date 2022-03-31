import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";

import { SETTINGS } from "components/Header/constants";

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
        <Avatar
          src="https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg"
          alt=""
        />
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
        {SETTINGS.map(({ name, path }) => (
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
