import { getShuffledVerbsList } from '.';
import words from '../data.json';

// const shuffledWordsList = shuffle(words).slice(0, 10);
export const shuffledVerbsList = getShuffledVerbsList(words);
