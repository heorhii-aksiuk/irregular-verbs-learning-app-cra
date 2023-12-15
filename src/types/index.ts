export interface Word {
  id: number;
  translation: string;
  infinitive: string;
  pastSimple: string;
  pastParticle: string;
}
export type WordsList = Word[];

export interface WrongAnswerWord extends Word {
  infinitiveWrongAnswer: string;
  pastSimpleWrongAnswer: string;
  pastParticleWrongAnswer: string;
}
export type WrongAnswerWordsList = WrongAnswerWord[];

//

export type WrongAnswer = [
  wordId: number,
  wordForm: WordFrom,
  correctValue: string,
  answer: string,
];
export type WrongAnswersList = WrongAnswer[];

//

export interface AttemptStatistic {
  date: string;
  time: string;
  wordsToLearnCount: number;
  totalWordsToLearnCount: number;
  wrongAnswersWordsCount: number;
  score: number;
  totalWrongAnswersWordsCount: number;
  totalScore: number;
  resultWrongAnswersList: WrongAnswerWordsList;
}

// ****** Enums *****

export enum WordFrom {
  infinitive = 'infinitive',
  pastSimple = 'pastSimple',
  pastParticle = 'pastParticle',
}
