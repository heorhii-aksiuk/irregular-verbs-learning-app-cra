import { VerbsList, WrongAnswersList } from '../types';

export default function getResultWrongAnswersList(
  words: VerbsList,
  wrongAnswersList: WrongAnswersList,
) {
  const result: any = [];

  wrongAnswersList.forEach((wrongAnswer) => {
    const wrongAnswerId = wrongAnswer.id;

    const wrongFormKey = `${wrongAnswer.verbForm}Wrong`;
    //Magic

    const wordInResult = result.findIndex(
      (word: any) => word.id === wrongAnswerId,
    );
    const wordNotInResult = words.findIndex(
      (word) => word.id === wrongAnswerId,
    );

    if (wordInResult === -1) {
      result.push({
        ...words[wordNotInResult],
        [wrongFormKey]: wrongAnswer.value,
      });
    } else {
      const obj = result[wordInResult];
      obj[wrongFormKey] = wrongAnswer.value;
    }
  });

  return result;
}
