import { ReactChild, ReactNode } from "react";

export interface IGrammarRules {
  path: string;
  title: string;
  icon: ReactNode | ReactChild;
}
