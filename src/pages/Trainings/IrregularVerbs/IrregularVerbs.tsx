import React, { FC } from "react";
import {
  Box,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { IRREGULAR_VERBS } from "./constants";

import { SectionTitle } from "./IrregularVerbs.styles";

export const IrregularVerbs: FC = () => {
  return (
    <Container sx={{ py: 2 }}>
      <Box sx={{ gap: "0.5rem", display: "flex", flexDirection: "column" }}>
        <SectionTitle>Irregular Verbs</SectionTitle>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Infinitive / 1 form</TableCell>
                <TableCell>Past Simple / 2 form</TableCell>
                <TableCell>Past Participle / 3 form</TableCell>
                <TableCell>Перевод</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {IRREGULAR_VERBS?.map((verb) => (
                <TableRow
                  key={verb?.infinitive}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{verb?.infinitive}</TableCell>
                  <TableCell>{verb?.pastSimple}</TableCell>
                  <TableCell>{verb?.pastParticiple}</TableCell>
                  <TableCell>{verb?.translate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};
