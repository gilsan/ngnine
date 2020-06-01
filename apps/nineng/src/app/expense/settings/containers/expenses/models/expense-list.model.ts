import { List } from './itemlist.model';

// export class ExpenseList  {

//     constructor(
//         idx: string = '',
//         id: number = 0,
//         catetory: string = '',
//         date: Date = new Date(),
//         items: List[]=[]
//     ) {}
// }

export interface ExpenseList  {   
        idx: string;
        id: number ;
        catetory: string ;
        date: Date ;
        items: List[];
 
}