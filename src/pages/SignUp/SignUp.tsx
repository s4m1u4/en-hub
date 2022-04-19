import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Box, Avatar, Container, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { useAppDispatch } from "hooks";
import { SignUpForm } from "pages/SignUp";
import { removeError } from "store/reducers/userSlice";

import {
  BoxMain,
  TextSignUp,
  TextTooltip,
  AvatarStyles,
} from "./SignUp.styles";

export const SignUp: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={BoxMain}>
        <Avatar sx={AvatarStyles}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" sx={TextSignUp}>
          Sign up
        </Typography>
        <SignUpForm />
        <Typography
          variant="body2"
          component={Link}
          to="/login"
          sx={TextTooltip}
          onClick={() => dispatch(removeError())}
        >
          Already have an account? Sign in
        </Typography>
      </Box>
    </Container>
  );
};
