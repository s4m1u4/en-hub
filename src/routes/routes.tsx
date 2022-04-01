import { Login, SignUp } from "pages";
import { IRoutes } from "./types";

export const ROUTES: IRoutes[] = [
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
];
