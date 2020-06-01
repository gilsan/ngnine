import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';

import { SubSink } from 'subsink';
import { TestService } from '../../test/test.service';
import { interval } from 'rxjs';
// import { MAT_RIPPLE_GLOBAL_OPTIONS } from '@angular/material';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit, OnDestroy {

  optionWas1Cpu: any;
  optionWas1Mem: any;
  optionHyehwa: any;
  optionGuro: any;
  daeJonGuro: any;
  optionWas2: any;
  optionController: any;

  was1: {cpu: number, mem: number};
  was2:{cpu:number, mem: number};
  pie: {name: string, value: number}[] = [];
  // controller:{cpu:number, mem:number}[] =[];

  private subs = new SubSink();

  constructor(
    private service: TestService,
  ) { }

  ngOnInit() {
      this.service.testHttps().subscribe(data => {
          console.log('[mininus/charts/pie/pie component]Https Test.....', data);
      });
      this.subs.sink =  interval(3000).pipe(
          switchMap( result => this.service.getSystem()),
          map( (sys:any) => sys.data)
      ).subscribe(datas => {
         // console.log('[pie] ', datas);
          this.was1 = {cpu:parseInt(datas[0].cpu_usage), mem: parseInt(datas[0].mem_usage) };   
        //   this.pie = { 
        //       cpu: parseInt(datas[1].cpu_usage), 
        //       mem: parseInt(datas[1].mem_usage), 
        //       nic: Math.random() * 10 };
          const cpu = {name: "cpu", value: parseInt(datas[1].cpu_usage)};
          const mem = {name: "mem", value: parseInt(datas[1].mem_usage)};
          this.pie.push(cpu);
          this.pie.push(mem);
         // console.log(this.was1.cpu);
          this.setWas1Cpu(this.was1.cpu);
          this.setWas1Mem(this.was1.mem);
          this.pieChart(this.pie);
          this.pie = [];
          this.hyeHwaMap(this.was1.mem);
          this.guRoMap(this.was1.cpu);
          this.daeJonMap(this.was1.mem);
      });
       
  }

  ngOnDestroy() {
     this.subs.unsubscribe();
  }

  setWas1Cpu(cpu) {
    this.optionWas1Cpu = {
        title: {
            text: 'WAS1 CPU',
            left: 'center',
            top: 'center'
          },  
      tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      legend: {
          orient: 'vertical',
          left: 10,
          data: ['사용량','잔량']
      },
      series: [
          {
              name: 'WAS1 CPU',
              type: 'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
                  normal: {
                      show: true,
                      position: 'inside',
                      formatter: '{b}:{d}%'
                  },
                  emphasis: {
                      show: true,
                      textStyle: {
                          fontSize: '30',
                          fontWeight: 'bold'
                      }
                  }
              },
               
              labelLine: {
                  normal: {
                      show: false
                  }
              },
              data: [
                  {value: cpu, name: '사용량'},
                  {value: 100 -cpu, name: '잔량'}
                  
              ]
          }
      ]
  };
  } // End of was-cpu

  setWas1Mem(mem) {
    //  console.log('[][setWas1Mem][]', mem)
    this.optionWas1Mem = {
      title: {
        text: 'WAS1 MEM',
        left: 'center',
        top: 'center'
      },
      tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      legend: {
          orient: 'vertical',
          left: 10,
          data: ['사용량','잔량']
      },
      series: [
          {
              name: 'WAS1 MEM',
              type: 'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
                  normal: {
                      show: true,
                      position: 'inside',
                      formatter: '{b}:{d}%'
                  },
                  emphasis: {
                      show: true,
                      textStyle: {
                          fontSize: '30',
                          fontWeight: 'bold'
                      }
                  }
              },
               
              labelLine: {
                  normal: {
                      show: false
                  }
              },
              data: [
                  {value: mem, name: '사용량'},
                  {value: 100 -mem, name: '잔량'}
                  
              ]
          }
      ]
  };
  } // End of was-mem

  pieChart(data) {
    this.optionController = {
        title: [{
            text: '시스템상태'
        }   ],
        tooltip: {
            trigger: 'item',
            formatter: '{b}: {c}'
        },
        series: [{
            type: 'pie',
            radius: '50%',
            center: ['50%', '50%'],
            data: data,
            animation: false,
            emphasis: {
                itemStyle: {
                  shadowBlur: 20,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0,0,0,0.5)'
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: '{b} :{c}'
                },
            } 
        },   ]
    }
  }

  hyeHwaMap(mem) {
   
    this.optionHyehwa = {
      title: {
        text: '혜화',
        left: 'center',
        top: 'center',
        textStyle: {
            fontSize: '10'
        }
        
      },
      series: [
          {
              name: 'MEM',
              type: 'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
                  normal: {
                      show: true,
                      position: 'inside',
                      formatter: '{b}:{d}%'
                  },
                  emphasis: {
                      show: true,
                      textStyle: {
                          fontSize: '30',
                          fontWeight: 'bold'
                      }
                  }
              },
               
              labelLine: {
                  normal: {
                      show: false
                  }
              },
              data: [
                  {
                     value: mem,
                     name: '사용량', 
                     label: {
                         fontSize: 8
                      }
                    },
                  {  
                      value: 100 -mem,
                       name: '잔량',
                       label: {
                           fontSize: 8
                       }
                    }
                  
              ]
          }
      ]
  };
  } // End of was-mem

  guRoMap(mem) {   
    this.optionGuro = {
      title: {
        text: '구로',
        left: 'center',
        top: 'center',
        textStyle: {
            fontSize: '10'
        }
        
      },
      series: [
          {
              name: 'MEM',
              type: 'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
                  normal: {
                      show: true,
                      position: 'inside',
                      formatter: '{b}:{d}%'
                  },
                  emphasis: {
                      show: true,
                      textStyle: {
                          fontSize: '30',
                          fontWeight: 'bold'
                      }
                  }
              },
               
              labelLine: {
                  normal: {
                      show: false
                  }
              },
              data: [
                  {
                     value: mem,
                     name: '사용량', 
                     label: {
                         fontSize: 8
                      }
                    },
                  {  
                      value: 100 -mem,
                       name: '잔량',
                       label: {
                           fontSize: 8
                       }
                    }
                  
              ]
          }
      ]
  };
  } // End of was-mem

  daeJonMap(mem) {   
    this.daeJonGuro = {
      title: {
        text: '대전',
        left: 'center',
        top: 'center',
        textStyle: {
            fontSize: '10'
        }
        
      },
      series: [
          {
              name: 'MEM',
              type: 'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
                  normal: {
                      show: true,
                      position: 'inside',
                      formatter: '{b}:{d}%'
                  },
                  emphasis: {
                      show: true,
                      textStyle: {
                          fontSize: '30',
                          fontWeight: 'bold'
                      }
                  }
              },
               
              labelLine: {
                  normal: {
                      show: false
                  }
              },
              data: [
                  {
                     value: mem,
                     name: '사용량', 
                     label: {
                         fontSize: 8
                      }
                    },
                  {  
                      value: 100 -mem,
                       name: '잔량',
                       label: {
                           fontSize: 8
                       }
                    }
                  
              ]
          }
      ]
  };
  } // End of was-daejon

}
