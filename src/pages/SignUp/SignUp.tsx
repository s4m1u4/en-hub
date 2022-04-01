import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Avatar, Box, Container, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { SignUpForm } from "pages/SignUp";

export const SignUp: FC = () => {
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
        <Typography component="h1" variant="h5" mb={2}>
          Sign up
        </Typography>
        <SignUpForm />
        <Typography
          mt={2}
          variant="body2"
          component={Link}
          to="/login"
          sx={{ color: "primary.main" }}
        >
          Already have an account? Sign in
        </Typography>
      </Box>
    </Container>
  );
};
