import { ReactChild, ReactNode } from "react";

export interface IVocabulary {
  path: string;
  title: string;
  icon: ReactNode | ReactChild;
}
