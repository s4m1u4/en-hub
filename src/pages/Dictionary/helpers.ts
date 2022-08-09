import { IWord } from "types";

export const getWordCountByState = (
  words: IWord[] | undefined,
  stateWord: "new" | "learning" | "learned"
) => {
  return words?.filter((word) => word.stateWord === stateWord).length;
};
