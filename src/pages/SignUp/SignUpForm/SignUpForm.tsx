import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { useFormik } from "formik";
import { LoadingButton } from "@mui/lab";
import { Alert, Grid, MenuItem, TextField } from "@mui/material";

import { SignUpFormSchema } from "./SignUpFormSchema";
import { useRegistrationUserMutation } from "store/reducers/user/userApi";
import { IRegistrationData } from "types";

export const SignUpForm: FC = () => {
  const [errorMessage, setErrorMessage] = useState<any>(null);
  const [
    registrationUser,
    { error: registrationError, isLoading: registrationIsLoading },
  ] = useRegistrationUserMutation();

  useEffect(() => {
    if (!!registrationError && "data" in registrationError) {
      setErrorMessage(registrationError?.data);
    }
  }, [registrationError]);

  const formikHandleChange = (event: ChangeEvent) => {
    formik.handleChange(event);
    setErrorMessage(null);
  };

  const handleSubmit = async (values: IRegistrationData) => {
    await registrationUser(values);
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      gender: "",
      age: "",
    },
    validationSchema: SignUpFormSchema,
    onSubmit: handleSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        {errorMessage && (
          <Grid item xs={12}>
            <Alert variant="filled" severity="error">
              {errorMessage}
            </Alert>
          </Grid>
        )}
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            name="firstName"
            type="text"
            size="small"
            label="First name"
            value={formik.values.firstName}
            onBlur={formik.handleBlur}
            onChange={formikHandleChange}
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
            onChange={formikHandleChange}
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
            onChange={formikHandleChange}
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
            onChange={formikHandleChange}
            error={formik.touched.password && !!formik.errors.password}
            helperText={formik.touched.password && formik.errors.password}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            select
            fullWidth
            name="gender"
            type="text"
            size="small"
            label="Gender"
            value={formik.values.gender}
            onBlur={formik.handleBlur}
            onChange={formikHandleChange}
            error={formik.touched.gender && !!formik.errors.gender}
            helperText={formik.touched.gender && formik.errors.gender}
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            name="age"
            type="number"
            size="small"
            label="Age"
            value={formik.values.age}
            onBlur={formik.handleBlur}
            onChange={formikHandleChange}
            error={formik.touched.age && !!formik.errors.age}
            helperText={formik.touched.age && formik.errors.age}
          />
        </Grid>
        <Grid item xs={12}>
          <LoadingButton
            fullWidth
            variant="contained"
            loading={registrationIsLoading}
            type="submit"
          >
            Sign up
          </LoadingButton>
        </Grid>
      </Grid>
    </form>
  );
};
