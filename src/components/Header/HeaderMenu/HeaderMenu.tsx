import React, { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Menu,
  Avatar,
  MenuItem,
  Typography,
  IconButton,
} from "@mui/material";

import { getUserId, removeToken, removeUserId } from "helpers";
import { useGetUserQuery } from "store/reducers/user/userApi";
import { useActions } from "hooks";

export const HeaderMenu: FC = () => {
  const userId = getUserId();
  const navigate = useNavigate();

  const { setIsAuth } = useActions();
  const { data: user } = useGetUserQuery(userId);

  const [isUserMenuOpen, setIsUserMenuOpen] = useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setIsUserMenuOpen(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setIsUserMenuOpen(null);
  };

  const handleSignOut = async () => {
    removeToken();
    removeUserId();
    setIsAuth();
    setIsUserMenuOpen(null);
    navigate("/login");
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <Typography variant="body1">
        {user?.firstName} {user?.lastName}
      </Typography>
      <IconButton sx={{ p: 0 }} onClick={handleOpenUserMenu}>
        <Avatar src="" alt={`${user?.firstName} ${user?.lastName}`} />
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
