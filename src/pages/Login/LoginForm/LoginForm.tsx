import React, { ChangeEvent, FC } from "react";
import { useFormik } from "formik";
import { LoadingButton } from "@mui/lab";
import { Alert, Grid, TextField } from "@mui/material";

import { LoginFormSchema } from "./LoginFormSchema";
import { removeError, userAuthentication } from "store/reducers/userSlice";
import { useAppDispatch, useAppSelector } from "hooks";
import { IUserAuthenticationData } from "types";

export const LoginForm: FC = () => {
  const dispatch = useAppDispatch();
  const { error, isLoading } = useAppSelector((state) => state.user);

  const formikHandleChange = (event: ChangeEvent) => {
    formik.handleChange(event);
    dispatch(removeError());
  };

  const handleSubmit = async (values: IUserAuthenticationData) => {
    await dispatch(userAuthentication(values));
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
        {error && (
          <Grid item xs={12}>
            <Alert variant="filled" severity="error">
              {error}
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
            loading={isLoading}
          >
            Sign in
          </LoadingButton>
        </Grid>
      </Grid>
    </form>
  );
};
