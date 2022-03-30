import React, { FC } from "react";
import { Box, SxProps } from "@mui/material";
import { Link } from "react-router-dom";

import logoEnHub from "../../../assets/images/LogoEnHub.png";

interface LogoProps {
  sx: SxProps;
}

export const Logo: FC<LogoProps> = ({ sx }) => {
  return (
    <Box sx={sx} component={Link} to="/">
      <img src={logoEnHub} alt="Logo EnHub" />
    </Box>
  );
};
