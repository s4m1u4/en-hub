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

import { InfoText, SectionTitle } from "./DegreesOfComparison.styles";
import { EXCLUSIONS } from "pages/Trainings/DegreesOfComparison/constants";

export const DegreesOfComparison: FC = () => {
  return (
    <Container sx={{ py: 2 }}>
      <Box sx={{ gap: "0.5rem", display: "flex", flexDirection: "column" }}>
        <SectionTitle>Adjectives Degrees Of Comparison</SectionTitle>
        <Box>
          <InfoText>
            Изменяться по степени сравнения могут только качественные
            прилагательные, которые обозначают какие-либо качества предмета и
            чье значение может быть выражено в большей или меньшей степени.
          </InfoText>
        </Box>
        <Box>
          <InfoText>
            Сравнительная степень: adjective <span>-er</span>
          </InfoText>
        </Box>
        <Box>
          <InfoText>
            Превосходная степень: <span>the</span> adjective <span>-est</span>
          </InfoText>
        </Box>
        <Box>
          <InfoText>
            При прибавлении суффиксов <span>-er</span> и <span>-est</span> нужно
            помнить о следующих правилах орфографии:
          </InfoText>
          <InfoText>
            - немое <span>-e</span> в конце слов опускается
          </InfoText>
          <InfoText>
            - если прилагательное оканчивается на краткую гласную и согласную,
            то в сравнительной и превосходной степени конечная согласная
            удваивается
          </InfoText>
          <InfoText>
            - если прилагательное оканчивается на согласную и букву{" "}
            <span>-y</span>, то в сравнительной и превосходной степени конечная{" "}
            <span>-y</span> заменяется на <span>-i</span>
          </InfoText>
        </Box>
        <Box>
          <InfoText>
            Сравнительная степень: <span>more</span> adjective
          </InfoText>
        </Box>
        <Box>
          <InfoText>
            Превосходная степень: <span>the most</span> adjective
          </InfoText>
        </Box>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell align="center">Exclusions</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {EXCLUSIONS?.map((rule) => (
                <TableRow
                  key={rule?.firstForm}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{rule?.firstForm}</TableCell>
                  <TableCell>{rule?.secondForm}</TableCell>
                  <TableCell>{rule?.thirdForm}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};
