import React, { FC } from "react";

import { WordsItem } from "pages/Dictionary";
import { IWord } from "types";

interface IWordsList {
  words: IWord[];
}

export const WordsList: FC<IWordsList> = ({ words }) => {
  return (
    <>
      {words.map((word) => (
        <WordsItem key={word.id} word={word} />
      ))}
    </>
  );
};
