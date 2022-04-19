import React, { FC } from "react";
import { Box, Container, Typography } from "@mui/material";

import { BoxMain, BoxWrapper, TextError } from "./NotFound.styles";

export const NotFound: FC = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Box sx={BoxMain}>
        <Box sx={BoxWrapper}>
          <Typography variant="h5" component="h1" sx={TextError}>
            404
          </Typography>
          <Typography variant="body2" component="h2">
            This page could not be found.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};
