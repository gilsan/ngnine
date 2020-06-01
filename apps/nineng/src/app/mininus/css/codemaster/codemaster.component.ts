import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-codemaster',
  templateUrl: './codemaster.component.html',
  styleUrls: ['./codemaster.component.scss']
})
export class CodemasterComponent implements OnInit {

  isChange = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleClass() {
     this.isChange = !this.isChange;
  }

  changeBar() {
    return {"change": this.isChange,"transtime": this.isChange};
  }

  menuShow() {
    return {"navlinksShow": this.isChange};
  }

}
