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

import { PASSIVE_VOIСE } from "./constants";

import { InfoText, PassiveText, SectionTitle } from "./PassiveVoice.styles";

export const PassiveVoice: FC = () => {
  return (
    <Container sx={{ py: 2 }}>
      <Box sx={{ gap: "0.5rem", display: "flex", flexDirection: "column" }}>
        <SectionTitle>Passive Voice</SectionTitle>
        <InfoText>
          Пассивный залог показывает, что лицо или предмет, выраженное
          подлежащим, испытывает действие на себе.
        </InfoText>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell align="center">Simple</TableCell>
                <TableCell align="center">Continuous</TableCell>
                <TableCell align="center">Perfect</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {PASSIVE_VOIСE?.map((rule) => (
                <TableRow
                  key={rule?.title}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell sx={{ fontWeight: 500 }}>{rule?.title}</TableCell>
                  <TableCell align="center">
                    <PassiveText>{rule?.simple}</PassiveText>
                  </TableCell>
                  <TableCell align="center">
                    <PassiveText>{rule?.continuous}</PassiveText>
                  </TableCell>
                  <TableCell align="center">
                    <PassiveText>{rule?.perfect}</PassiveText>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <InfoText>
          Пассивный залог не может быть использован во временах группы{" "}
          <span>Perfect Continuous</span> и времени{" "}
          <span>Future Continuous</span>.
        </InfoText>
      </Box>
    </Container>
  );
};
