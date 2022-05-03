import React, { FC } from "react";
import { useFormik } from "formik";
import { Button, Grid, TextField } from "@mui/material";

import { ModalComponent } from "components/shared";
import { ModalAddSetSchema } from "./ModalAddSetSchema";
import { addSet, getSets } from "store/reducers/dictionarySlice";
import { useAppDispatch } from "hooks";
import { getUserId } from "helpers";
import { ISet } from "types";

import { ModalTitle } from "./ModalAddSet.styles";

interface IModalAddSetProps {
  open: boolean;
  handleClose: () => void;
}

export const ModalAddSet: FC<IModalAddSetProps> = ({ open, handleClose }) => {
  const userId = getUserId();
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      id: "",
      title: "",
      user: userId,
      permanent: false,
    },
    validationSchema: ModalAddSetSchema,
    onSubmit: async (values: ISet) => {
      await dispatch(addSet(values));
      await dispatch(getSets({}));
      formik.resetForm();
      handleClose();
    },
  });

  return (
    <ModalComponent open={open} onClose={handleClose}>
      <ModalTitle>Add new set</ModalTitle>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="title"
              type="text"
              size="small"
              label="Title"
              value={formik.values.title}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              error={formik.touched.title && !!formik.errors.title}
              helperText={formik.touched.title && formik.errors.title}
            />
          </Grid>
          <Grid item xs={6}>
            <Button fullWidth color="success" type="submit" variant="contained">
              Add set
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
