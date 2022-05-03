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
import { useAppDispatch, useAppSelector } from "hooks";
import { setIsAuth } from "store/reducers/userSlice";

export const HeaderMenu: FC = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
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
    <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <Typography variant="body1">
        {user.firstName} {user.lastName}
      </Typography>
      <IconButton sx={{ p: 0 }} onClick={handleOpenUserMenu}>
        <Avatar src="/" alt={`${user.firstName} ${user.lastName}`} />
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
