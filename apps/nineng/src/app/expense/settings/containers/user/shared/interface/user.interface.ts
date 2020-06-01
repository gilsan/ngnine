export interface Relative {
    ['Relative ID']: string;
    ['Patient ID']: string;
    ['Is alive']: boolean;
    ['Frequency of visits']: number;
}

export interface Phone {
    ['Phone ID']: string;
    ['ID of the relative']: string;
}

export interface KidRecord {
    data?: Phone;
    kids?: KidRecord;
}

export interface UserRecord {
    data?: Relative;
    kids?: {
        has_phone?: {
            records: KidRecord;
        }
    }
}

export interface UserData {
  ['Identification number']: number;
  Name: string;
  Gender: string;
  Risk: string;
  ['Hair length']: number;
  IQ: number;
  ['Admission date']: Date;
  ['Last breakdown']: Date;
  ['Yearly fee']: number;
  ['Knows the Joker?']: boolean;
}

export interface User {
    data: UserData;
    kids: {
        has_relatives?: {
            records: UserRecord[];
        }
    }
}