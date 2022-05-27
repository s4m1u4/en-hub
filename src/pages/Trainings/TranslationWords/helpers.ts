import { IAnswers, IFetchDictionaryWords } from "store/types";

export const getRandomWords = (
  words: IFetchDictionaryWords[],
  currentWord: number
) => {
  const uniqueWords = words
    .filter(
      (word) => word.translationWord !== words[currentWord].translationWord
    )
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  const randomWords = [words?.[currentWord], ...uniqueWords].sort(
    () => Math.random() - 0.5
  );

  return randomWords;
};

export const getAnswersData = (answers: IAnswers[]) => {
  const numberCorrectAnswers = answers.filter(
    (answer) => answer.isCorrect
  ).length;

  const numberWrongAnswers = answers.filter(
    (answer) => !answer.isCorrect
  ).length;

  return [
    { name: "correct answers", value: numberCorrectAnswers },
    { name: "wrong answers", value: numberWrongAnswers },
  ];
};
