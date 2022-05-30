import React, { FC } from "react";
import { Box, Card, CardContent, Container, Grid } from "@mui/material";
import { grey } from "@mui/material/colors";

import { CONDITIONAL_SENTENCES } from "./constants";

import {
  ConditionalText,
  ConditionalTitle,
  SectionTitle,
} from "./ConditionalSentences.styles";

export const ConditionalSentences: FC = () => {
  return (
    <Container sx={{ py: 2 }}>
      <Box sx={{ gap: "0.5rem", display: "flex", flexDirection: "column" }}>
        <SectionTitle>Conditional Sentences</SectionTitle>
        <Grid container spacing={2}>
          {CONDITIONAL_SENTENCES?.map((rule) => (
            <Grid item xs={12} sm={6} md={3} key={rule?.title}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <CardContent>
                  <ConditionalTitle>{rule?.title}</ConditionalTitle>
                </CardContent>
                <CardContent sx={{ bgcolor: grey[200] }}>
                  <ConditionalText>{rule?.description}</ConditionalText>
                </CardContent>
                <CardContent sx={{ textAlign: "center" }}>
                  <ConditionalText>{rule?.form}</ConditionalText>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};
