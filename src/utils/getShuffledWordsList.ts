import { VerbsList } from '../types';

export default function getShuffledWordsList(array: VerbsList): VerbsList {
  const resultArray: VerbsList = [];
  do {
    const randomIndex = Math.floor(Math.random() * array.length);
    const element = array.splice(randomIndex, 1);
    resultArray.push(...element);
  } while (array.length > 0);
  return resultArray;
}
