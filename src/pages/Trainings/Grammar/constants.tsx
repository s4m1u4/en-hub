import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import CompareIcon from "@mui/icons-material/Compare";
import { brown, green, orange, purple, red } from "@mui/material/colors";

import { IGrammarRules } from "./types";

export const GRAMMAR_RULES: IGrammarRules[] = [
  {
    path: "/trainings/grammar/english-tenses",
    title: "English Tenses",
    icon: <AccessTimeIcon sx={{ color: green[500], fontSize: "35px" }} />,
  },
  {
    path: "/trainings/grammar/irregular-verbs",
    title: "Irregular Verbs",
    icon: <BookmarksIcon sx={{ color: purple[500], fontSize: "35px" }} />,
  },
  {
    path: "/trainings/grammar/conditional-sentences",
    title: "Conditional Sentences",
    icon: <AccountTreeIcon sx={{ color: red[500], fontSize: "35px" }} />,
  },
  {
    path: "/trainings/grammar/passive-voice",
    title: "Passive Voice",
    icon: <MeetingRoomIcon sx={{ color: orange[500], fontSize: "35px" }} />,
  },
  {
    path: "/trainings/grammar/adjectives-degrees-of-comparison",
    title: "Adjectives Degrees Of Comparison",
    icon: <CompareIcon sx={{ color: brown[500], fontSize: "35px" }} />,
  },
];
