import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Menu,
  Avatar,
  MenuItem,
  Typography,
  IconButton,
} from "@mui/material";

import { removeToken, removeUserId } from "helpers";
import { useAppDispatch } from "hooks";
import { setIsAuth } from "store/reducers/userSlice";

export const HeaderMenu: FC = () => {
  const dispatch = useAppDispatch();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setIsUserMenuOpen(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setIsUserMenuOpen(null);
  };

  const handleSignOut = () => {
    removeToken();
    removeUserId();
    dispatch(setIsAuth());
    setIsUserMenuOpen(null);
  };

  return (
    <Box>
      <IconButton sx={{ p: 0 }} onClick={handleOpenUserMenu}>
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
        <MenuItem component={Link} to="/login" onClick={handleSignOut}>
          <Typography>Sign out</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};
