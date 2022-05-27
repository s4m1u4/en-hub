import { IPassiveVoice } from "./types";

export const PASSIVE_VOIСE: IPassiveVoice[] = [
  {
    title: "Past",
    simple: (
      <>
        noun <span>was</span>, <u>were</u> (you, we, they) verb{" "}
        <span>-ed / 3 form</span>
      </>
    ),
    continuous: (
      <>
        noun <span>was</span>, <u>were</u> (you, we, they) <span>being</span>{" "}
        verb <span>-ed / 3 form</span>
      </>
    ),
    perfect: (
      <>
        noun <span>had been</span> verb <span>-ed / 3 form</span>
      </>
    ),
  },
  {
    title: "Present",
    simple: (
      <>
        noun [am, is, are] verb <span>-ed / 3 form</span>
      </>
    ),
    continuous: (
      <>
        noun [am, is, are] <span>being</span> verb <span>-ed / 3 form</span>
      </>
    ),
    perfect: (
      <>
        noun <span>have been</span>, <u>has been</u> (he, she, it) verb{" "}
        <span>-ed / 3 form</span>
      </>
    ),
  },
  {
    title: "Future",
    simple: (
      <>
        noun <span>will be</span> verb <span>-ed / 3 form</span>
      </>
    ),
    continuous: <span>---</span>,
    perfect: (
      <>
        noun <span>will have been</span> verb <span>-ed / 3 form</span>
      </>
    ),
  },
];
