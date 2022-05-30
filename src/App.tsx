import React from "react";
import { BrowserRouter } from "react-router-dom";

import { useAppSelector } from "hooks";
import { Header, Theme } from "components";
import { RoutesList } from "routes";

export const App = () => {
  const { isAuth } = useAppSelector((state) => state.user);

  return (
    <Theme>
      <BrowserRouter>
        {isAuth && <Header />}
        <RoutesList />
      </BrowserRouter>
    </Theme>
  );
};
