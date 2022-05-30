import React, { FC } from "react";
import { Box, Container, Grid } from "@mui/material";

import { Vocabulary, Grammar } from "pages/Trainings";

export const Trainings: FC = () => {
  return (
    <Container sx={{ py: 2 }}>
      <Box sx={{ gap: "1rem", display: "flex", flexDirection: "column" }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Vocabulary />
          </Grid>
          <Grid item xs={6}>
            <Grammar />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
