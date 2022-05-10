import React, { FC } from "react";
import { Button, Grid } from "@mui/material";

import { ModalComponent } from "components/shared";
import { IWord } from "types";

import { ModalTitle, TextWord } from "./ModalDeleteWord.styles";

interface IModalDeleteWordProps {
  word: IWord | undefined;
  open: boolean;
  handleClose: () => void;
  handleDeleteWord: (wordId: string | number | undefined) => void;
}

export const ModalDeleteWord: FC<IModalDeleteWordProps> = ({
  open,
  handleClose,
  word,
  handleDeleteWord,
}) => {
  return (
    <ModalComponent open={open} onClose={handleClose}>
      <ModalTitle>Do you want to delete the word?</ModalTitle>
      <TextWord>
        <span>{word?.originalWord}</span> - {word?.translationWord}
      </TextWord>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Button
            fullWidth
            color="error"
            variant="contained"
            onClick={() => handleDeleteWord(word?.id)}
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
