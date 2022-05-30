import { ReactNode } from "react";

export interface ITenses {
  title: string;
  description: string;
  keyWords: ReactNode | string;
  affirmation: ReactNode | string;
  negation: ReactNode | string;
  question: ReactNode | string;
}
