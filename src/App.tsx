import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

import { Header } from "components";
import { RoutesList } from "routes";
import { useAppDispatch, useAppSelector } from "hooks";
import { getUserData } from "store/reducers/userSlice";

export const App = () => {
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (isAuth) {
      dispatch(getUserData());
    }
  }, [dispatch, isAuth]);

  const selectedTheme = createTheme({
    palette: {
      mode: "light",
      background: {
        default: "#fafafa",
        paper: "#ffffff",
      },
    },
  });

  return (
    <ThemeProvider theme={selectedTheme}>
      <CssBaseline />
      <BrowserRouter>
        {isAuth && <Header />}
        <RoutesList />
      </BrowserRouter>
    </ThemeProvider>
  );
};
