export interface Word {
  id: number;
  translation: string;
  infinitive: string;
  pastSimple: string;
  pastParticle: string;
}

export type WrongAnswer = [
  wordId: number,
  wordForm: WordFrom,
  correctValue: string,
  answer: string,
];

export enum WordFrom {
  infinitive = 'infinitive',
  pastSimple = 'pastSimple',
  pastParticle = 'pastParticle',
}
