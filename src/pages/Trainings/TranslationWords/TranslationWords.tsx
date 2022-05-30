import React, { FC, useState } from "react";
import {
  Box,
  Card,
  Grid,
  Stack,
  Alert,
  Button,
  Container,
  CircularProgress,
} from "@mui/material";
import { green } from "@mui/material/colors";
import { v4 as uuidv4 } from "uuid";

import { useGetDictionaryWordsQuery } from "store/reducers/word/wordApi";
import { IAnswers, IFetchDictionaryWords } from "store/types";
import { getAnswersData, getRandomWords } from "./helpers";
import { ChartPie } from "pages";

import { CountWords, MainWord } from "./TranslationWords.styles";

export const TranslationWords: FC = () => {
  const { data: dictionaryWords, isLoading: isLoadingDictionaryWords } =
    useGetDictionaryWordsQuery({ limit: 5 });

  const [currentWord, setCurrentWord] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [answers, setAnswers] = useState<IAnswers[] | []>([]);
  const [showAnswers, setShowAnswers] = useState<boolean>(false);

  const handleClickWord = (word: IFetchDictionaryWords) => {
    if (dictionaryWords !== undefined) {
      if (currentPage < dictionaryWords?.length) {
        setCurrentWord((prevState) => prevState + 1);
        setCurrentPage((prevState) => prevState + 1);
      } else {
        setShowAnswers(true);
      }

      if (dictionaryWords?.[currentWord]?.originalWord === word.originalWord) {
        setAnswers((prevState) => [
          {
            originalWord: word.originalWord,
            translationWord: dictionaryWords[currentWord]?.translationWord,
            isCorrect: true,
          },
          ...prevState,
        ]);
      } else {
        setAnswers((prevState) => [
          {
            originalWord: dictionaryWords[currentWord]?.originalWord,
            translationWord: dictionaryWords[currentWord]?.translationWord,
            isCorrect: false,
          },
          ...prevState,
        ]);
      }
    }
  };

  const randomWords = getRandomWords(dictionaryWords || [], currentWord);
  const answersData = getAnswersData(answers || []);

  return (
    <Container sx={{ py: 2 }}>
      {isLoadingDictionaryWords ? (
        <Box
          sx={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <CircularProgress sx={{ color: green[500] }} />
        </Box>
      ) : (
        <Box
          sx={{
            margin: "0 auto",
            maxWidth: "800px",
            gap: "0.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {showAnswers ? (
            <ChartPie data={answersData} />
          ) : (
            <>
              <CountWords>
                {currentPage} / {dictionaryWords?.length}
              </CountWords>
              <Card sx={{ width: "100%" }}>
                <Grid container>
                  <Grid
                    item
                    xs={6}
                    sx={{
                      p: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <MainWord>
                      {dictionaryWords?.[currentWord]?.translationWord}
                    </MainWord>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    sx={{
                      p: 2,
                      gap: "1rem",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {randomWords?.map((word) => (
                      <Button
                        key={uuidv4()}
                        color="info"
                        variant="outlined"
                        onClick={() => handleClickWord(word)}
                      >
                        {word?.originalWord}
                      </Button>
                    ))}
                  </Grid>
                </Grid>
              </Card>
            </>
          )}
          {answers.length ? (
            <Stack sx={{ width: "100%" }} spacing={1}>
              {answers.map((word) => (
                <Alert
                  key={uuidv4()}
                  severity={word.isCorrect ? "success" : "error"}
                >
                  {word.originalWord} - {word.translationWord}
                </Alert>
              ))}
            </Stack>
          ) : (
            <p>List with answers📚</p>
          )}
        </Box>
      )}
    </Container>
  );
};
