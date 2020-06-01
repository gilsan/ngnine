import { Component, OnInit, OnDestroy } from '@angular/core';
import { ColoringService } from '../../admin/services/coloring.service';
import { SubSink } from 'subsink';
import { interval } from 'rxjs';

@Component({
  selector: 'coloring-call-static',
  templateUrl: './call-static.component.html',
  styleUrls: ['./call-static.component.scss'],
})
export class CallStaticComponent implements OnInit , OnDestroy{

    gaugeLabel = '서버 상태';
    gaugeType = 'full';
    gaugeSize = 130;
    gaugeCpuValue = 30;
    gaugeMemValue = 40;
    gaugeDiskValue = 70;
   // gaugeLabel = "CPU";

    gaugeAppendText = '%';

    callValue = 10;
    callsumValue = 0;
    callfailValue = 0;
    callText = '호';
    gaugeThick = 8;
    thresholdConfig = {
      0: {color: 'blue'},
      40: {color: 'orange'},
      70: {color: 'red'},
     };
     gaugeBc = 'rgba(60, 133, 19,0.9)';
     gaugeFc = 'rgba(0, 230, 230, 0.9)';

     private subs = new SubSink();
  constructor(
    private service: ColoringService,
  ) { }

  ngOnInit() {
   // this.service.getSystemStatus().subscribe( (data) => {
   //     console.log( data);
   // });
    this.setCallValue();
    this.setCallFailValue();
    this.setSystem();
  }

  ngOnDestroy() {
     this.subs.unsubscribe();
  }

 setCallValue() {
  this.subs.sink = interval(3000).subscribe(() => {
      this.callValue = this.getRndInteger(2, 10);
      this.callsumValue += this.callValue;
      if (this.callsumValue > 500) {
        this.callsumValue = 0;
      }
    //  console.log('[][setCallValue][callValue]', this.callValue);
  });
 }

 setCallFailValue() {
  this.subs.sink = interval(100000).subscribe(() => {
      this.callfailValue = this.getRndInteger(1, 3);
  });
 }

 setSystem() {
  this.subs.sink = interval(3000).subscribe(() => {
    this.gaugeCpuValue = this.getRndInteger(5, 30);
    this.gaugeMemValue = this.getRndInteger(10, 40);
    this.gaugeDiskValue = this.getRndInteger(1, 60);
   });
 }

  getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

}
