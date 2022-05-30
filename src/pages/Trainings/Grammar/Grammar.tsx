import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Box, Card, CardContent, Grid } from "@mui/material";

import { GRAMMAR_RULES } from "pages/Trainings/Grammar/constants";

import { SectionTitle, InfoTitle } from "./Grammar.styles";

export const Grammar: FC = () => {
  return (
    <Box sx={{ gap: "1rem", display: "flex", flexDirection: "column" }}>
      <SectionTitle>Grammar</SectionTitle>
      <Grid container spacing={2}>
        {GRAMMAR_RULES?.map((rule) => (
          <Grid item xs={12} key={rule?.title}>
            <Card
              component={Link}
              to={rule?.path}
              sx={{ height: "100%", display: "flex", alignItems: "center" }}
            >
              <CardContent
                sx={{
                  gap: "1rem",
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  "&:last-child": {
                    p: 1,
                  },
                }}
              >
                {rule?.icon}
                <InfoTitle>{rule?.title}</InfoTitle>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
