import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Avatar, Box, Container, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { LoginForm } from "pages/Login";

export const Login: FC = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <LoginForm />
        <Typography
          variant="body2"
          component={Link}
          to="/login"
          sx={{ color: "primary.main" }}
        >
          Don't have an account? Sign Up
        </Typography>
      </Box>
    </Container>
  );
};
