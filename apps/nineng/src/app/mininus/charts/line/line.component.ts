import { Component, OnInit, OnDestroy, ɵbypassSanitizationTrustResourceUrl } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MockServerService } from './mock-server.service';
import { TestService } from '../../test/test.service';
import { SubSink } from 'subsink';
import { ChartService } from '../chart.service';
import { interval } from 'rxjs';


@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit, OnDestroy {

  options = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      label: {
          show:true,
          position: 'top'
      }
    }]
  };

  mergeOption: any;
  loading = false;

   data: any[];
   updateOptions: any;
   option: any;
   now: Date ;
   value :number;
   timer: any;
   oneDay = 24 * 3600 * 1000;

  private subs = new SubSink();
  constructor(
    private api: MockServerService,
    private http: HttpClient,
    private service: ChartService
  ) { }

  ngOnInit() {

    this.data = [];
    this.now = new Date(2020, 1, 1);
    this.value = Math.random() * 1000;

    for (let i = 0; i < 1000; i++) {
      this.data.push(this.randomData());
    }

    this.option = {
      tooltip: {
        trigger: 'axis',
        formatter: (params) => {
          params = params[0];
          const date = new Date(params.name);
          return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
        },
        axisPointer: {
          animation: false
        }
      },
      xAxis: {
        type: 'time',
        splitLine: {
          show: true
        },

      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
          show: false,
        }
      },
      series: [{
        name: 'RealTime Graph',
        type: 'line',
        showSymbol: false,
        hoverAnimation: false,
        data: this.data,
        label: {
            show: true,
            position: 'top'
        }
      }]
    };

    this.subs.sink= interval(1000)
    .subscribe(() => {
      for( let i = 0; i < 10; i++) {
        this.data.shift();
        this.data.push(this.randomData());
      }
      this.updateOptions = {
        series: [{
           data: this.data
        }]
      }
    });

  }


  ngOnDestroy() {
        this.subs.unsubscribe();

  }


  getData() {
    this.loading = true;
    this.api.getData()
      .then(data => {
        this.mergeOption = { series: [{ data }] };
      })
      .catch(e => {   })
      .then(() => { this.loading = false; });
  }

  getDate() {
    for( let i =0; i < 1000; i++){
      this.data.push(this.randomData());
    }
  }

  randomData() {
    this.now = new Date(this.now.getTime() + this.oneDay);
    const value = this.value + Math.random() * 21 -10;
   // console.log('[][][randomData]', this.now)
    return {
       name: this.now.toString(),
       value: [
        [this.now.getFullYear(), this.now.getMonth() + 1, this.now.getDate()].join('/'),
        Math.round(value)
       ]
    }
  }

}
