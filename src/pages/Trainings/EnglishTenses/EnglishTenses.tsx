import React, { FC } from "react";
import { Box, Grid, Card, Container, CardContent } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { green, grey, orange, red } from "@mui/material/colors";

import { TENSES } from "./constants";

import { SectionTitle, TensesText, TensesTitle } from "./EnglishTenses.styles";

export const EnglishTenses: FC = () => {
  return (
    <Container sx={{ py: 2 }}>
      <Box sx={{ gap: "0.5rem", display: "flex", flexDirection: "column" }}>
        <SectionTitle>English tenses</SectionTitle>
        <Grid container spacing={2}>
          {TENSES?.map((tense) => (
            <Grid item xs={12} sm={6} md={3} key={tense?.title}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <CardContent>
                  <TensesTitle>{tense?.title}</TensesTitle>
                </CardContent>
                <CardContent sx={{ bgcolor: grey[200] }}>
                  <TensesText>{tense?.description}</TensesText>
                </CardContent>
                <CardContent sx={{ textAlign: "center" }}>
                  <TensesText>Ключевые слова</TensesText>
                  <TensesText>{tense?.keyWords}</TensesText>
                </CardContent>
                <CardContent>
                  <Box textAlign="center">
                    <AddIcon sx={{ color: green[500] }} />
                    <TensesText>{tense?.affirmation}</TensesText>
                  </Box>
                  <Box textAlign="center">
                    <RemoveIcon sx={{ color: red[500] }} />
                    <TensesText>{tense?.negation}</TensesText>
                  </Box>
                  <Box textAlign="center">
                    <QuestionMarkIcon sx={{ color: orange[500] }} />
                    <TensesText>{tense?.question}</TensesText>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};
