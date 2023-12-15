import {
  WordsList,
  WrongAnswer,
  WrongAnswerWordsList,
  WrongAnswersList,
} from '../types';

export default function getResultWrongAnswersList(
  words: WordsList,
  wrongAnswersList: WrongAnswersList,
) {
  console.log(words);
  console.log(wrongAnswersList);

  const result: any = [];

  wrongAnswersList.forEach((wrongAnswer) => {
    const wrongAnswerId = wrongAnswer.wordId;
    const objField = `${wrongAnswer.wordForm}WrongAnswer`;

    const wordInResult = result.findIndex(
      (word: any) => word.id === wrongAnswerId,
    );
    const wordNotInResult = words.findIndex(
      (word) => word.id === wrongAnswerId,
    );

    if (wordInResult === -1) {
      result.push({ ...words[wordNotInResult], [objField]: wrongAnswer.value });
    } else {
      const obj = result[wordInResult];
      obj[objField] = wrongAnswer.value;
    }

    // result.push()
  });

  console.log(result);

  return result;
}
