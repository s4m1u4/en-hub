import { green, grey, orange } from "@mui/material/colors";

export const handleIconStyles = (stateWord: string | undefined) => ({
  color:
    stateWord === "new"
      ? grey[500]
      : stateWord === "learning"
      ? orange[500]
      : stateWord === "learned"
      ? green[500]
      : grey[500],
});
