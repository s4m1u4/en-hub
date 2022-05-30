import React, { FC } from "react";
import { Navigate } from "react-router-dom";

import { IProtectedRoute } from "routes/types";
import { useAppSelector } from "hooks";

export const ProtectedRoute: FC<IProtectedRoute> = ({ children }) => {
  const { isAuth } = useAppSelector((state) => state.user);

  return <>{isAuth ? <Navigate to="/dictionary" /> : children}</>;
};
