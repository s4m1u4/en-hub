import React, { FC } from "react";
import { Navigate } from "react-router-dom";

import { IPrivateRoute } from "routes/types";
import { useAppSelector } from "hooks";

export const PrivateRoute: FC<IPrivateRoute> = ({ children }) => {
  const { isAuth } = useAppSelector((state) => state.user);

  return <>{isAuth ? children : <Navigate to="/login" />}</>;
};
