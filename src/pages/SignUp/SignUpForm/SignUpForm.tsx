import React, { FC } from "react";
import { useFormik } from "formik";
import { Button, Grid, TextField } from "@mui/material";

import { IUserRegistrationData } from "types";
import { SignUpFormSchema } from "./SignUpFormSchema";

export const SignUpForm: FC = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: SignUpFormSchema,
    onSubmit: async (values: IUserRegistrationData, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            name="firstName"
            type="text"
            size="small"
            label="First name"
            value={formik.values.firstName}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={formik.touched.firstName && !!formik.errors.firstName}
            helperText={formik.touched.firstName && formik.errors.firstName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            name="lastName"
            type="text"
            size="small"
            label="Last name"
            value={formik.values.lastName}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={formik.touched.lastName && !!formik.errors.lastName}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            name="email"
            type="text"
            size="small"
            label="Email"
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={formik.touched.email && !!formik.errors.email}
            helperText={formik.touched.email && formik.errors.email}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            name="password"
            type="password"
            size="small"
            label="Password"
            value={formik.values.password}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={formik.touched.password && !!formik.errors.password}
            helperText={formik.touched.password && formik.errors.password}
          />
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth variant="contained" type="submit">
            Sign up
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
