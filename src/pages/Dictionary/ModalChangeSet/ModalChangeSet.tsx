import React, { FC } from "react";
import { useFormik } from "formik";
import { Button, Grid, TextField } from "@mui/material";

import { useChangeSetMutation } from "store/reducers/set/setApi";
import { ModalChangeSetSchema } from "./ModalChangeSetSchema";
import { ModalComponent } from "components/shared";
import { ISet } from "types";

import { ModalTitle } from "./ModalChangeSet.styles";

interface IModalChangeSetProps {
  set: ISet | undefined;
  open: boolean;
  handleClose: () => void;
}

export const ModalChangeSet: FC<IModalChangeSetProps> = ({
  set,
  open,
  handleClose,
}) => {
  const [changeSet] = useChangeSetMutation();

  const handleSubmit = async (values: {
    setId: string | number | undefined;
    title: string;
  }) => {
    await changeSet(values);
    formik.resetForm();
    handleClose();
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      setId: set?.id || "",
      title: set?.title || "",
    },
    validationSchema: ModalChangeSetSchema,
    onSubmit: handleSubmit,
  });

  return (
    <ModalComponent open={open} onClose={handleClose}>
      <ModalTitle>Change set</ModalTitle>
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
            <Button
              fullWidth
              color="success"
              type="submit"
              variant="contained"
              disabled={!formik.dirty}
            >
              Change set
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
