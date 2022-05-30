import React, { ChangeEvent, FC, useState } from "react";
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
  TextField,
  Typography,
} from "@mui/material";

import { IRREGULAR_VERBS } from "./constants";

import { SectionTitle } from "./IrregularVerbs.styles";

export const IrregularVerbs: FC = () => {
  const [irregularVerbs, setIrregularVerbs] = useState(IRREGULAR_VERBS);

  const handleSearchVerbs = (event: ChangeEvent<HTMLInputElement>) => {
    setIrregularVerbs(
      IRREGULAR_VERBS.filter(
        (verb) =>
          verb.infinitive
            .toLowerCase()
            .includes(event.target.value.toLowerCase()) ||
          verb.pastSimple
            .toLowerCase()
            .includes(event.target.value.toLowerCase()) ||
          verb.pastParticiple
            .toLowerCase()
            .includes(event.target.value.toLowerCase()) ||
          verb.translate
            .toLowerCase()
            .includes(event.target.value.toLowerCase())
      )
    );
  };

  return (
    <Container sx={{ py: 2 }}>
      <Box sx={{ gap: "0.5rem", display: "flex", flexDirection: "column" }}>
        <SectionTitle>Irregular Verbs</SectionTitle>
        <TextField
          sx={{ width: 210 }}
          type="text"
          size="small"
          label="Search"
          onChange={handleSearchVerbs}
        />
        {irregularVerbs?.length ? (
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
                {irregularVerbs?.map((verb) => (
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
        ) : (
          <Typography variant="subtitle1">Verb list is empty ☹️</Typography>
        )}
      </Box>
    </Container>
  );
};
