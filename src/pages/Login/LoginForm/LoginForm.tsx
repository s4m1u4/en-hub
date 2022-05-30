import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { useFormik } from "formik";
import { LoadingButton } from "@mui/lab";
import { Alert, Grid, TextField } from "@mui/material";

import { LoginFormSchema } from "./LoginFormSchema";
import { useAuthenticationUserMutation } from "store/reducers/user/userApi";
import { IAuthenticationData } from "types";

export const LoginForm: FC = () => {
  const [errorMessage, setErrorMessage] = useState<any>(null);
  const [
    authenticationUser,
    { error: authenticationError, isLoading: authenticationIsLoading },
  ] = useAuthenticationUserMutation();

  useEffect(() => {
    if (!!authenticationError && "data" in authenticationError) {
      setErrorMessage(authenticationError?.data);
    }
  }, [authenticationError]);

  const formikHandleChange = (event: ChangeEvent) => {
    formik.handleChange(event);
    setErrorMessage(null);
  };

  const handleSubmit = async (values: IAuthenticationData) => {
    await authenticationUser(values);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginFormSchema,
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
        <Grid item xs={12}>
          <TextField
            fullWidth
            name="email"
            type="email"
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
          <LoadingButton
            fullWidth
            type="submit"
            variant="contained"
            loading={authenticationIsLoading}
          >
            Sign in
          </LoadingButton>
        </Grid>
      </Grid>
    </form>
  );
};
