import { Component, OnInit, OnDestroy } from '@angular/core';
import { TestService } from '../../test/test.service';
import { Observable, interval } from 'rxjs';
import { shareReplay, map, switchMap } from 'rxjs/operators';
import { AngularFireModule } from '@angular/fire';
import { SubSink } from 'subsink';
import { ChartService } from '../chart.service';

declare const require: any;

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit, OnDestroy {
  options: any;
  private critical =[];
  private major   = [];
  private minor   = [];
  private subs = new SubSink();
  constructor(
  //  private service: TestService,
    private service: ChartService
  ) { }

  ngOnInit() {
    const xAxisData = ['오늘', '어제', '일주일전']; 
     
    this.subs.sink = interval(2000).pipe(
      switchMap(()=> this.service.getAlarm()),
      map( (alarm:any) => alarm.data[0])
    ).subscribe( alarm => {
                   
            this.critical.push(alarm.today_alarm_critical) ;
            this.critical.push(alarm.yesterday_alarm_critical);
            this.critical.push(alarm.week_alarm_critical);
    
            this.major.push(alarm.today_alarm_major) ;
            this.major.push(alarm.yesterday_alarm_major);
            this.major.push(alarm.week_alarm_major);
    
            this.minor.push(alarm.today_alarm_minor) ;
            this.minor.push(alarm.yesterday_alarm_minor);
            this.minor.push(alarm.week_alarm_minor);
         
            this.setOption(xAxisData, this.critical, this.major, this.minor); 
            
            this.critical = [];
            this.major = [];
            this.minor = [];
         
    });
    
 }

  setOption(xAxisData, data1, data2, data3) {

    this.options = {
      title: {
        text: '미세먼지',
        left: 'center',
        bottom: '1%'
      },
      legend: {
        data: ['심각', '주의', '보통'],
        align: 'left'
      },
      tooltip: {
        formatter: '{a} <br/>{b} : {c}%'
      },
      xAxis: {
        data: xAxisData,
        silent: false,
        splitLine: {
          show: true
        },
        axisTick: { show: false },
        axisLine: { show: true}
      },
      yAxis: {
      },
      series: [{
        name: '심각',
        type: 'bar',
        data: data1,
        label: { show:true, position: 'inside'},
        animationDelay: function (idx) {
          return idx * 10;
        }
      }, {
        name: '주의',
        type: 'bar',
        data: data2,
        label: { show:true, position: 'inside'},
        animationDelay: function (idx) {
          return idx * 10 + 100;
        }, 
      }, {
         name: '보통',
         type: 'bar',
         data: data3,
         label: { show:true, position: 'inside'},
      } ],
      barWidth: 30,
      animationEasing: 'elasticOut',
      animationDelayUpdate: function (idx) {
        return idx * 5;
      }
    };   
  }


  ngOnDestroy() {
    this.subs.unsubscribe()
  }

}
