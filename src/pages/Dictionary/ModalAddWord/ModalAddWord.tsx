import React, { FC } from "react";
import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import { Button, Grid, TextField } from "@mui/material";

import { useAddWordMutation } from "store/reducers/word/wordApi";
import { ModalAddWordSchema } from "./ModalAddWordSchema";
import { ModalComponent } from "components/shared";
import { getUserId } from "helpers";
import { IWord } from "types";

import { ModalTitle } from "./ModalAddWord.styles";

interface IModalAddWordProps {
  open: boolean;
  handleClose: () => void;
}

export const ModalAddWord: FC<IModalAddWordProps> = ({ open, handleClose }) => {
  const userId = getUserId();
  const { setId } = useParams();

  const [addWord] = useAddWordMutation();

  const handleSubmit = async (values: IWord) => {
    await addWord(values);
    formik.resetForm();
    handleClose();
  };

  const formik = useFormik({
    initialValues: {
      id: "",
      set: setId || "",
      user: userId,
      stateWord: "new",
      originalWord: "",
      translationWord: "",
    },
    enableReinitialize: true,
    validationSchema: ModalAddWordSchema,
    onSubmit: handleSubmit,
  });

  return (
    <ModalComponent open={open} onClose={handleClose}>
      <ModalTitle>Add new word</ModalTitle>
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
          <Grid item xs={6}>
            <Button fullWidth color="success" type="submit" variant="contained">
              Add word
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
