import React, { FC } from "react";
import { useFormik } from "formik";
import { Button, TextField } from "@mui/material";
import { LoginFormSchema } from "./LoginFormSchema";

interface IUserAuthenticationData {
  email: string;
  password: string;
}

export const LoginForm: FC = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginFormSchema,
    onSubmit: async (values: IUserAuthenticationData, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        required
        fullWidth
        margin="normal"
        id="email"
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
      <TextField
        required
        fullWidth
        margin="normal"
        id="password"
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
      <Button sx={{ mt: 2, mb: 3 }} fullWidth variant="contained" type="submit">
        Sign in
      </Button>
    </form>
  );
};
