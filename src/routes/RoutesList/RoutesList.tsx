import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { ROUTES } from "routes";

export const RoutesList: FC = () => {
  return (
    <Routes>
      {ROUTES.map((route) => {
        return (
          <Route key={uuidv4()} path={route.path} element={route.element} />
        );
      })}
    </Routes>
  );
};
