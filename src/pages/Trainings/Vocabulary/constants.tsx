import { blue } from "@mui/material/colors";
import GTranslateIcon from "@mui/icons-material/GTranslate";

import { IVocabulary } from "./types";

export const VOCABULARY: IVocabulary[] = [
  {
    path: "/trainings/vocabulary/translation-of-words",
    title: "Translation Of Words",
    icon: <GTranslateIcon sx={{ color: blue[500], fontSize: "35px" }} />,
  },
];
