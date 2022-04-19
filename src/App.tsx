import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

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

  return (
    <BrowserRouter>
      {isAuth && <Header />}
      <RoutesList />
    </BrowserRouter>
  );
};
