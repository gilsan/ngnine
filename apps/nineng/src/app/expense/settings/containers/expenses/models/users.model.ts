import { MatTableDataSource } from '@angular/material/table';

export interface User {
    name: string;
    email: string;
    phone: string;
    addresses?: Address[] |  MatTableDataSource<Address> ;
  }
  
  export interface Address {
    street: string;
    zipCode: string;
    city: string;
  }
  
  export interface UserDataSource {
    name: string;
    email: string;
    phone: string;
    addresses?: MatTableDataSource<Address>;
  }