import { Component, OnInit } from '@angular/core';
import { of, Observable, from } from 'rxjs';
import { delay, concatAll, share, count, scan, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-progrssbar',
  templateUrl: './progrssbar.component.html',
  styleUrls: ['./progrssbar.component.scss']
})
export class ProgrssbarComponent implements OnInit {

   requestOne = of('first').pipe(delay(500));
   requestTwo = of('second').pipe(delay(800));
   requestThree= of('third').pipe(delay(1100));
   requestFour = of('four').pipe(delay(1400));
   requestFive = of('five').pipe(delay(1700));

  constructor() { }
  width:number = 0;
  ngOnInit(): void {}

  loaddata() {
    const observables: Array<Observable<string>> = [
      this.requestOne,
      this.requestTwo,
      this.requestThree,
      this.requestFour,
      this.requestFive
    ];

    const array$ = from(observables);
    const requests$ = array$.pipe(concatAll());
    const progress$ = requests$.pipe(
      share()
    );
    
    const count$ = array$.pipe(
      count()
    );

    const ratio$ = progress$.pipe(
        scan(current => current + 1, 0),
        withLatestFrom(count$, (current, count)=> current / count)
    ).subscribe((data) => {
       this.width = data * 100;
    });


  }

}
