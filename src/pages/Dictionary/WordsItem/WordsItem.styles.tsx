import styled from "@emotion/styled";
import { blue } from "@mui/material/colors";

export const TextWord = styled.p({
  fontSize: "1rem",
  "& > span": {
    color: blue[500],
    fontWeight: 700,
  },
});
