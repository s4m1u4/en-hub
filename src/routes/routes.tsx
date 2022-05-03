import { Navigate } from "react-router-dom";

import { Dashboard, Dictionary, Login, NotFound, SignUp, Words } from "pages";
import { IRoutes } from "routes/types";
import { PrivateRoute } from "routes/PrivateRoute";
import { ProtectedRoute } from "routes/ProtectedRoute";

export const ROUTES: IRoutes[] = [
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Navigate to="/login" />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <ProtectedRoute>
        <Login />
      </ProtectedRoute>
    ),
  },
  {
    path: "/signup",
    element: (
      <ProtectedRoute>
        <SignUp />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
  {
    path: "/dictionary",
    element: (
      <PrivateRoute>
        <Dictionary />
      </PrivateRoute>
    ),
  },
  {
    path: "/dictionary/sets/:setId",
    element: (
      <PrivateRoute>
        <Words />
      </PrivateRoute>
    ),
  },
  { path: "*", element: <NotFound /> },
];
