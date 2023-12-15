import { WordsList } from '../types';

export default function getShuffledWordsList(array: WordsList): WordsList {
  const resultArray: WordsList = [];
  do {
    const randomIndex = Math.floor(Math.random() * array.length);
    const element = array.splice(randomIndex, 1);
    resultArray.push(...element);
  } while (array.length > 0);
  return resultArray;
}
