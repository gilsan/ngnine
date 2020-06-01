import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {

  errors = [];
  showMessages = false;
  errors$: Observable<string[]>;
  constructor(
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.errors$ = this.messageService.errors$.pipe(
         tap(() => this.showMessages = true ),
    );
  }

  onClose() {
     this.showMessages = false;
  }

}
