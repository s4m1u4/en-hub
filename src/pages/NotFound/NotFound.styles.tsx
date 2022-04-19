import { SxProps } from "@mui/material";

export const BoxMain: SxProps = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

export const BoxWrapper: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const TextError: SxProps = {
  mr: 2,
  py: 1,
  pr: 2,
  borderRight: "1px solid rgba(0, 0, 0,.3)",
};
