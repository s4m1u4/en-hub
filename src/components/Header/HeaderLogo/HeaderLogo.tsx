import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

import { HeaderLogoProps } from "components/Header/types";

import logoEnHub from "assets/images/LogoEnHub.png";

export const HeaderLogo: FC<HeaderLogoProps> = ({ sx }) => {
  return (
    <Box sx={sx} component={Link} to="/">
      <img src={logoEnHub} alt="HeaderLogo EnHub" />
    </Box>
  );
};
