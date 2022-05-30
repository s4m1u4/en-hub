import { IConditionalSentences } from "./types";

export const CONDITIONAL_SENTENCES: IConditionalSentences[] = [
  {
    title: "Zero Conditional",
    description:
      "Нулевой тип используется, чтобы говорить о чем-то, что всегда или вообще верно.",
    form: (
      <>
        <span>if</span> present simple, present simple
      </>
    ),
  },
  {
    title: "First Conditional",
    description:
      "Первый тип обозначает реальные, осуществимые условия, которые могут относиться к настоящему или будущему.",
    form: (
      <>
        <span>if</span> present simple, <span>will</span> verb
      </>
    ),
  },
  {
    title: "Second Conditional",
    description:
      "Второй тип охватывает малореальные, неосуществимые условия, относящиеся к настоящему или будущему.",
    form: (
      <>
        <span>if</span> past simple, <span>should / would</span> verb
      </>
    ),
  },
  {
    title: "Third Conditional",
    description: "Третий тип описывает невыполненные условия в прошлом.",
    form: (
      <>
        <span>if</span> past perfect, <span>should / would</span> present
        perfect
      </>
    ),
  },
];
