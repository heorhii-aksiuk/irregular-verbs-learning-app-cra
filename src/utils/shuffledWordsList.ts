import shuffle from './getShuffledWordsList';
import words from '../data.json';

// const shuffledWordsList = shuffle(words).slice(0, 10);
const shuffledWordsList = shuffle(words);

export default shuffledWordsList;
