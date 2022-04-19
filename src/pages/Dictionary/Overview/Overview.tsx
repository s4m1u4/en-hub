import React, { FC } from "react";
import { Link } from "react-router-dom";
import { grey, green, orange, blue } from "@mui/material/colors";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import EmojiObjectsRoundedIcon from "@mui/icons-material/EmojiObjectsRounded";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";

import { getWordCountByState } from "helpers";
import { useAppSelector } from "hooks";

import { TextTitle } from "./Overview.styles";

export const Overview: FC = () => {
  const { words } = useAppSelector((state) => state.dictionary);

  const newWordCount = getWordCountByState(words, "new");
  const learningWordCount = getWordCountByState(words, "learning");
  const learnedWordCount = getWordCountByState(words, "learned");

  return (
    <Box>
      <TextTitle>My dictionary</TextTitle>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Card
            component={Link}
            to="/dictionary/words"
            sx={{ display: "flex", height: "100%" }}
          >
            <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                sx={{ height: "100%", display: "flex", alignItems: "center" }}
              >
                <MenuBookRoundedIcon
                  sx={{ mr: 1, color: grey[700] }}
                  fontSize="large"
                />
                <Box>
                  <Typography variant="subtitle2">
                    Word count: {words.length}
                  </Typography>
                  <Typography sx={{ color: blue[500] }} variant="body2">
                    View
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={8}>
          <Card sx={{ height: "100%" }}>
            <CardContent
              sx={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <EmojiObjectsRoundedIcon
                  sx={{ mr: 1, color: grey[500] }}
                  fontSize="large"
                />
                <Box>
                  <Typography variant="body2">New words</Typography>
                  <Typography variant="subtitle2">
                    Word count: {newWordCount}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <EmojiObjectsRoundedIcon
                  sx={{ mr: 1, color: orange[500] }}
                  fontSize="large"
                />
                <Box>
                  <Typography variant="body2">Learning</Typography>
                  <Typography variant="subtitle2">
                    Word count: {learningWordCount}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <EmojiObjectsRoundedIcon
                  sx={{ mr: 1, color: green[500] }}
                  fontSize="large"
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
    </Box>
  );
};
