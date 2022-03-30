import { IPages, ISettings } from "./types";

export const PAGES: IPages[] = [
  { name: "Home", path: "/home" },
  { name: "About", path: "/about" },
  { name: "Dictionary", path: "/dictionary" },
];

export const SETTINGS: ISettings[] = [
  { name: "Profile", path: "/" },
  { name: "Sign out", path: "/" },
];
