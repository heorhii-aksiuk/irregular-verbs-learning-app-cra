export interface Verb {
  id: number;
  translation: string;
  infinitive: string;
  pastSimple: string;
  pastParticle: string;
}
export type VerbsList = Verb[];

interface VerbWithWrongAnswer extends Verb {
  infinitiveWrong?: string;
  pastSimpleWrong?: string;
  pastParticleWrong?: string;
}
export type VerbsWithWrongAnswersList = VerbWithWrongAnswer[];

//

export interface WrongAnswer {
  id: number;
  verbForm: VerbForm;
  correctValue: string;
  value: string;
}
export type WrongAnswersList = WrongAnswer[];

//

export interface Statistic {
  date: string;
  time: string;
  verbsToLearnCount: number;
  wordsToLearnCount: number;
  wrongAnswersVerbsCount: number;
  verbsScore: number;
  wrongAnswersWordsCount: number;
  wordsScore: number;
  resultWrongAnswersList: VerbsWithWrongAnswersList;
}

// ****** Enums *****

export enum VerbForm {
  infinitive = 'infinitive',
  pastSimple = 'pastSimple',
  pastParticle = 'pastParticle',
}
