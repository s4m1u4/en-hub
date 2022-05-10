import React, { FC } from "react";
import { Grid } from "@mui/material";

import { SetsItem } from "pages/Dictionary";
import { ISet } from "types";

interface ISetsList {
  sets: ISet[] | undefined;
}

export const SetsList: FC<ISetsList> = ({ sets }) => {
  return (
    <Grid container spacing={2}>
      {sets?.map((set) => (
        <SetsItem key={set?.id} set={set} />
      ))}
    </Grid>
  );
};
