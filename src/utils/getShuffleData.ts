import shuffle from './shuffle';
import words from '../data.json';

const data = shuffle(words);

const shortData = data.slice(0, 10);

export default shortData;
