import { ReactNode } from "react";

export interface IRoutes {
  path: string;
  element: ReactNode;
}

export interface IPrivateRoute {
  children: ReactNode;
}

export interface IProtectedRoute {
  children: ReactNode;
}
