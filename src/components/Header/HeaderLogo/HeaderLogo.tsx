import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Box, SxProps } from "@mui/material";

import logoEnHub from "assets/images/LogoEnHub.png";

interface HeaderLogoProps {
  sx: SxProps;
}

export const HeaderLogo: FC<HeaderLogoProps> = ({ sx }) => {
  return (
    <Box sx={sx} component={Link} to="/">
      <img src={logoEnHub} alt="HeaderLogo EnHub" />
    </Box>
  );
};
