import { Word } from '../types';

const shuffle = (array: Word[]) => {
  const resultArray: Word[] = [];
  do {
    const randomIndex = Math.floor(Math.random() * array.length);
    const element = array.splice(randomIndex, 1);
    resultArray.push(...element);
  } while (array.length > 0);
  return resultArray;
};

export default shuffle;
