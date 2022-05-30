import { ReactNode } from "react";

export interface IPassiveVoice {
  title: string;
  simple: ReactNode | string;
  continuous: ReactNode | string;
  perfect: ReactNode | string;
}
