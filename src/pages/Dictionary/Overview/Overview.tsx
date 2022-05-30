import React, { FC } from "react";
import { Link } from "react-router-dom";
import { grey, green, orange, blue } from "@mui/material/colors";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import EmojiObjectsRoundedIcon from "@mui/icons-material/EmojiObjectsRounded";
import {
  Box,
  Card,
  Grid,
  Typography,
  CardContent,
  CircularProgress,
} from "@mui/material";

import { getWordCountByState } from "helpers";
import { IWord } from "types";

import { TextTitle } from "./Overview.styles";

interface IOverviewProps {
  words: IWord[] | undefined;
  isLoading: boolean;
}

export const Overview: FC<IOverviewProps> = ({ words, isLoading }) => {
  const wordCount = words?.length;
  const newWordCount = getWordCountByState(words, "new");
  const learningWordCount = getWordCountByState(words, "learning");
  const learnedWordCount = getWordCountByState(words, "learned");

  return (
    <Box sx={{ gap: "1rem", display: "flex", flexDirection: "column" }}>
      <TextTitle>My dictionary</TextTitle>
      {isLoading ? (
        <Box sx={{ py: 4, display: "flex", justifyContent: "center" }}>
          <CircularProgress sx={{ color: green[500] }} />
        </Box>
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Card
              component={Link}
              to={"/dictionary/sets/my"}
              sx={{ height: "100%", display: "flex", alignItems: "center" }}
            >
              <CardContent
                sx={{
                  gap: "1rem",
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <MenuBookRoundedIcon
                  sx={{ color: green[500], fontSize: "65px" }}
                />
                <Box>
                  <Typography variant="subtitle2">
                    Word count: {wordCount}
                  </Typography>
                  <Typography sx={{ color: blue[500] }} variant="body2">
                    View
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={8}>
            <Card
              sx={{ height: "100%", display: "flex", alignItems: "center" }}
            >
              <CardContent
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{ gap: "0.5rem", display: "flex", alignItems: "center" }}
                >
                  <EmojiObjectsRoundedIcon
                    sx={{ color: grey[500], fontSize: "35px" }}
                  />
                  <Box>
                    <Typography variant="body2">New words</Typography>
                    <Typography variant="subtitle2">
                      Word count: {newWordCount}
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{ gap: "0.5rem", display: "flex", alignItems: "center" }}
                >
                  <EmojiObjectsRoundedIcon
                    sx={{ color: orange[500], fontSize: "35px" }}
                  />
                  <Box>
                    <Typography variant="body2">Learning</Typography>
                    <Typography variant="subtitle2">
                      Word count: {learningWordCount}
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{ gap: "0.5rem", display: "flex", alignItems: "center" }}
                >
                  <EmojiObjectsRoundedIcon
                    sx={{ color: green[500], fontSize: "35px" }}
                  />
                  <Box>
                    <Typography variant="body2">Learned</Typography>
                    <Typography variant="subtitle2">
                      Word count: {learnedWordCount}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};
