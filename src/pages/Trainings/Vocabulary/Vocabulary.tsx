import React, { FC } from "react";
import { Box, Card, CardContent, Grid } from "@mui/material";
import { Link } from "react-router-dom";

import { VOCABULARY } from "./constants";

import { InfoTitle, SectionTitle } from "./Vocabulary.styles";

export const Vocabulary: FC = () => {
  return (
    <Box sx={{ gap: "1rem", display: "flex", flexDirection: "column" }}>
      <SectionTitle>Vocabulary</SectionTitle>
      <Grid container spacing={2}>
        {VOCABULARY?.map((item) => (
          <Grid item xs={12} key={item?.title}>
            <Card
              component={Link}
              to={item?.path}
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
                {item?.icon}
                <InfoTitle>{item?.title}</InfoTitle>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
