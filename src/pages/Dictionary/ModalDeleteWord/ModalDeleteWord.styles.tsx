import styled from "@emotion/styled";
import { blue } from "@mui/material/colors";

export const ModalTitle = styled.h3({
  fontWeight: 700,
  fontSize: "1.25rem",
  marginBottom: "1rem",
});

export const TextWord = styled.p({
  fontSize: "1rem",
  marginBottom: "1rem",
  "& > span": {
    color: blue[500],
    fontWeight: 700,
  },
});
