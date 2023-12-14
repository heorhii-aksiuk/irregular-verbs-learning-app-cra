// import { Word } from '../types';
import { WrongAnswerWordsList, WrongAnswersList } from '../types';
import words from './getShuffleData';

export interface AttemptStatistic {
  date: Date;
  time: Date;
  wordsToLearnCount: number;
  totalWordsToLearnCount: number;
  wrongAnswersWordsCount: number;
  score: number;
  totalWrongAnswersWordsCount: number;
  totalScore: number;
  resultWrongAnswersList: WrongAnswerWordsList;
}

// const timestamp = Date.now();
export function getFormattedDate(timestamp: number): string {
  const date = new Date(timestamp);

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  const formattedDateTime = `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;

  return formattedDateTime;
}

export function getAttemptStartTime() {
  return;
}

export function getAttemptFinishTime() {
  return;
}

export default function getAttemptStatistic(
  wrongAnswersList: WrongAnswersList,
  attemptStartTime: Date,
  attemptFinishTime: Date,
) {
  return;
}
