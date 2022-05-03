import React, { FC } from "react";
import { Button, Grid } from "@mui/material";

import { ModalComponent } from "components/shared";
import { ISet } from "types";

import { ModalTitle } from "./ModalDeleteSet.styles";

interface IModalDeleteSetProps {
  set: ISet;
  open: boolean;
  handleClose: () => void;
  handleDeleteSet: (setId: string | number) => void;
}

export const ModalDeleteSet: FC<IModalDeleteSetProps> = ({
  set,
  open,
  handleClose,
  handleDeleteSet,
}) => {
  return (
    <ModalComponent open={open} onClose={handleClose}>
      <ModalTitle>Do you want to delete the set?</ModalTitle>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Button
            fullWidth
            color="error"
            variant="contained"
            onClick={() => handleDeleteSet(set.id)}
          >
            Delete
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            fullWidth
            color="primary"
            variant="contained"
            onClick={handleClose}
          >
            Close
          </Button>
        </Grid>
      </Grid>
    </ModalComponent>
  );
};
