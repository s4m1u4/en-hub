import React, { FC } from "react";
import { useFormik } from "formik";
import { Button, Grid, TextField } from "@mui/material";

import { useAddSetMutation } from "store/reducers/set/setApi";
import { ModalAddSetSchema } from "./ModalAddSetSchema";
import { ModalComponent } from "components/shared";
import { getUserId } from "helpers";
import { ISet } from "types";

import { ModalTitle } from "./ModalAddSet.styles";

interface IModalAddSetProps {
  open: boolean;
  handleClose: () => void;
}

export const ModalAddSet: FC<IModalAddSetProps> = ({ open, handleClose }) => {
  const userId = getUserId();

  const [addSet] = useAddSetMutation();

  const handleSubmit = async (values: ISet) => {
    await addSet(values);
    formik.resetForm();
    handleClose();
  };

  const formik = useFormik({
    initialValues: {
      id: "",
      title: "",
      user: userId,
      permanent: false,
    },
    validationSchema: ModalAddSetSchema,
    onSubmit: handleSubmit,
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
