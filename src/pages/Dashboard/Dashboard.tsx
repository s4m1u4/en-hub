import React, { FC } from "react";
import { Box, Container, Typography } from "@mui/material";

export const Dashboard: FC = () => {
  return (
    <Container>
      <Box
        sx={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Typography variant="body1" component="h1">
          Dashboard page
        </Typography>
      </Box>
    </Container>
  );
};
