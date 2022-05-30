import React, { FC } from "react";
import { useFormik } from "formik";
import { Button, Grid, MenuItem, TextField } from "@mui/material";

import { useChangeWordMutation } from "store/reducers/word/wordApi";
import { ModalChangeWordSchema } from "./ModalChangeWordSchema";
import { ModalComponent } from "components/shared";
import { ISet, IWord } from "types";

import { ModalTitle } from "./ModalChangeWord.styles";

interface IModalChangeWordProps {
  word: IWord | undefined;
  sets: ISet[] | undefined;
  open: boolean;
  handleClose: () => void;
}

export const ModalChangeWord: FC<IModalChangeWordProps> = ({
  word,
  sets,
  open,
  handleClose,
}) => {
  const [changeWord] = useChangeWordMutation();

  const handleSubmit = async (values: {
    wordId: string | number | undefined;
    originalWord: string;
    translationWord: string;
  }) => {
    await changeWord(values);
    formik.resetForm();
    handleClose();
  };

  const formik = useFormik({
    initialValues: {
      wordId: word?.id || "",
      set: word?.set || "",
      originalWord: word?.originalWord || "",
      translationWord: word?.translationWord || "",
    },
    enableReinitialize: true,
    validationSchema: ModalChangeWordSchema,
    onSubmit: handleSubmit,
  });

  return (
    <ModalComponent open={open} onClose={handleClose}>
      <ModalTitle>Change word</ModalTitle>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="originalWord"
              type="text"
              size="small"
              label="Original word"
              value={formik.values.originalWord}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              error={
                formik.touched.originalWord && !!formik.errors.originalWord
              }
              helperText={
                formik.touched.originalWord && formik.errors.originalWord
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="translationWord"
              type="text"
              size="small"
              label="Translation word"
              value={formik.values.translationWord}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              error={
                formik.touched.translationWord &&
                !!formik.errors.translationWord
              }
              helperText={
                formik.touched.translationWord && formik.errors.translationWord
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              fullWidth
              type="text"
              name="set"
              size="small"
              label="Set"
              value={formik.values.set}
              onChange={formik.handleChange}
              error={formik.touched.set && !!formik.errors.set}
              helperText={formik.touched.set && formik.errors.set}
            >
              {sets?.map((set) => (
                <MenuItem key={set?.id} value={set?.id}>
                  {set?.title}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <Button
              fullWidth
              color="success"
              type="submit"
              variant="contained"
              disabled={!formik.dirty}
            >
              Change word
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
      </form>
    </ModalComponent>
  );
};
