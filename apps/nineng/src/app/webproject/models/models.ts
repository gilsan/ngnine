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
