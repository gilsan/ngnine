export interface IColoringList {
  id: string;
  user?: string;
  ment_name: string;
  ment_code?: string;
  sdate: string;
  edate?: string;
  dtitle: string;
}

export interface IWeekday {
  idx?: string;
  id?: number;
  weekday: string;
  fileName: string;
  title: string;
  regDate?: string;
}

export interface IDepart {
  id?: number;
  department_name: string;
  tel: string;
  ment_title: string;
  ment_name: string;
}

export interface ILib {
  id?: number;
  gym_lib_name: string;
  extension: string;
  offday: string;
  ment_name: string;
  dtitle: string;
  weekname: string;
}

export interface IListColoring {
  idx: string;
  id: string;
  regDate: string;
  title: string;
}

export interface IDateTime {
  idx: string;
  id: string;
  edate: string;
  ment_code: string;
  ment_name: string;
  dtitle: string;
  sdate: string;
}
