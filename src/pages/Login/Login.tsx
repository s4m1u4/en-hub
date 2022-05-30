import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Box, Avatar, Container, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { LoginForm } from "pages/Login";

import { BoxMain, TextSignIn, TextTooltip, AvatarStyles } from "./Login.styles";

export const Login: FC = () => {
  return (
    <Container maxWidth="xs">
      <Box sx={BoxMain}>
        <Avatar sx={AvatarStyles}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" sx={TextSignIn}>
          Sign in
        </Typography>
        <LoginForm />
        <Typography
          variant="body2"
          component={Link}
          to="/signup"
          sx={TextTooltip}
        >
          Don't have an account? Sign Up
        </Typography>
      </Box>
    </Container>
  );
};
