export interface Receive {
  id?: string;
  starttime: string;
  endtime: string;
  phone: string;
  create_date?: string;
}

export interface Send {
  id?: string;
  number: string;
}

export interface Record {
  id: string;
  rec_date: string;
  caller: string;
  callee: string;

}
