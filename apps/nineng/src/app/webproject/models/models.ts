export interface Irates {
  base: string;
  date: Date;
  time_last_updated: number;
  rates: { [key: string]: number };
}

export interface IUser {
  name: string;
  money: number;
}
export interface IExpense {
  id: number;
  text: string;
  amount: number;
}

export interface ICard {
  question: string;
  answer: string;
}

export interface IAlbum {
  artist: string;
  title: string;
}
