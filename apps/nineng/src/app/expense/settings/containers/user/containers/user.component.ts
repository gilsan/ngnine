import { Component, OnInit } from '@angular/core';
import { User } from '../shared/interface/user.interface';
import { UserService } from '../shared/services/user.service';


@Component({
     selector: 'app-user',
     templateUrl: './user.component.html'
 })
export class UserComponent implements OnInit{

    title = 'Test';
    users: User[];
    
    displayedColumns: string[] = [
        'expandIcon',
        'Identification number',
        'Name',
        'Gender',
        'Risk',
        'Hair length',
        'IQ',
        'Admission date',
        'Last breakdown',
        'Yearly fee',
        'Knows the Joker?',
        'deleteIcon',
    ];

    constructor(
        private service: UserService,
    ) {}

    ngOnInit() {
        this.service.getUsers().subscribe( (data) => {
            this.users = data;
           // console.log('[][][users]', this.users)
        });
    }

    deleteUser(id) {
   
       this.users.splice(id, 1);
       this.users = [...this.users];
    }
}