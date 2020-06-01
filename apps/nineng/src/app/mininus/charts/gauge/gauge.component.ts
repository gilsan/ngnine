/**********
 * 
 *  출처: https://github.com/recogizer/angular-gauge-chart
 *        https://www.npmjs.com/package/ngx-gauge-fix
 * 
 */

import { Component, OnInit, OnDestroy } from '@angular/core';
import { SubSink } from 'subsink';
import { ChartService } from '../chart.service';
import { LineCordi } from '../../test/test.model';
import { map, switchMap } from 'rxjs/operators';
import { interval } from 'rxjs';

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.scss'],
})
export class GaugeComponent implements OnInit , OnDestroy{

   option: any;
   gaugeData: number = 50;

  constructor(
    private service: ChartService
  ) { }

    gaugeType = "semi";
    gaugeValue = 28.3;
    gaugeLabel = "속도";
    gaugeAppendText = "km/hr";
    backgroundColor= "#906dd1";
    size = 200;
    gaugeThick = "10";
    gaugeArialable= "song"

    public canvasWidth = 200
    public needleValue = 65
    public centralLabel = ''
    public name = 'Gauge chart'
    public bottomLabel = '65'
    public options = {
        hasNeedle: true,
        needleColor: 'gray',
        needleUpdateSpeed: 1000,
        arcColors: ['rgb(44, 151, 222)', 'lightgray'],
        arcDelimiters: [30],
        rangeLabel: ['0', '100'],
        needleStartValue: 50,
    }

    private subs = new SubSink();  
    /********** */
    x: number = 10;
    y: number = 10;
    w= 100;
    h= 30; // 높이
    d= 5; // 내부 좌표;

    line_e2e:  LineCordi[] =[];
    line_sdnc: LineCordi[] =[];
    lines: LineCordi[] =[];

    color       = '#1c8482';
    was1_cpu    = 0;
    was1_memory = 0;
    was1_disk   = 0;
    was1_nic    = 0;
    was1_process= 0;

    was2_cpu    = 0;
    was2_memory = 0;
    was2_disk   = 0;
    was2_nic    = 0;
    was2_process= 0;

    col1_cpu    = 0;
    col1_memory = 0;
    col1_disk   = 0;
    col1_nic    = 0;
    col1_process= 0;

    col2_cpu    = 0;
    col2_memory = 0;
    col2_disk   = 0;
    col2_nic    = 0;
    col2_process= 0;

    web1_cpu    = 0;
    web1_memory = 0;
    web1_disk   = 0;
    web1_nic    = 0;
    web1_process= 0;

    web2_cpu    = 0;
    web2_memory = 0;
    web2_disk   = 0;
    web2_nic    = 0;
    web2_process= 0;

    db1_cpu     = 0;
    db1_memory  = 0;
    db1_disk    = 0;
    db1_nic     = 0;
    db1_process = 0;

    db2_cpu     = 0;
    db2_memory  = 0;
    db2_disk    = 0;
    db2_nic     = 0;
    db2_process = 0; 
   /************* */
  ngOnInit() {
   /********* */
   this.line_e2e.push({x1:205, y1:73,   x2:205, y2:100});
   this.line_e2e.push({x1:135, y1:100,  x2:275, y2:100});
   this.line_e2e.push({x1:135, y1:100,  x2:135, y2:120});
   this.line_e2e.push({x1:275, y1:100,  x2:275, y2:120});

   this.line_sdnc.push({x1:465, y1:80,  x2:465, y2:100});
   this.line_sdnc.push({x1:400, y1:100, x2:530, y2:100});
   this.line_sdnc.push({x1:400, y1:100, x2:400, y2:120});
   this.line_sdnc.push({x1:530, y1:100, x2:530, y2:120});
  
   this.lines.push({x1:140, y1:300, x2:140, y2:390});
   this.lines.push({x1:270, y1:300, x2:270, y2:390});
   this.lines.push({x1:400, y1:300, x2:400, y2:390});
   this.lines.push({x1:530, y1:300, x2:530, y2:390});
   this.lines.push({x1:140, y1:340, x2:530, y2:340});   
     
    interval(2000)
    .pipe(
      switchMap(() => {
        return this.service.getHw();
      }),
      map( (hw:any) => hw.data)
    ).subscribe(data => {
      data.forEach(el => {
          if (el.system_name === 'WAS#1') {
            this.was1_cpu    = parseInt(el.cpu_status);
            this.was1_memory = parseInt(el.mem_status);
            this.was1_disk   = parseInt(el.disk_status);
            this.was1_nic    = parseInt(el.nic_status);
            this.was1_process= parseInt(el.process_status);
          } else if(el.system_name === 'WAS#2') {
            this.was2_cpu    = parseInt(el.cpu_status);
            this.was2_memory = parseInt(el.mem_status);
            this.was2_disk   = parseInt(el.disk_status);
            this.was2_nic    = parseInt(el.nic_status);
            this.was2_process= parseInt(el.process_status);
          } else if(el.system_name === 'Collector#1') {
            this.col1_cpu    = parseInt(el.cpu_status);
            this.col1_memory = parseInt(el.mem_status);
            this.col1_disk   = parseInt(el.disk_status);
            this.col1_nic    = parseInt(el.nic_status);
            this.col1_process= parseInt(el.process_status);
          } else if(el.system_name === 'Collector#2') {
            this.col2_cpu    = parseInt(el.cpu_status);
            this.col2_memory = parseInt(el.mem_status);
            this.col2_disk   = parseInt(el.disk_status);
            this.col2_nic    = parseInt(el.nic_status);
            this.col2_process= parseInt(el.process_status);
          } else if(el.system_name === 'WEB#1') {
            this.web1_cpu    = parseInt(el.cpu_status);
            this.web1_memory = parseInt(el.mem_status);
            this.web1_disk   = parseInt(el.disk_status);
            this.web1_nic    = parseInt(el.nic_status);
            this.web1_process= parseInt(el.process_status);
          } else if(el.system_name === 'WEB#2') {
            this.web2_cpu    = parseInt(el.cpu_status);
            this.web2_memory = parseInt(el.mem_status);
            this.web2_disk   = parseInt(el.disk_status);
            this.web2_nic    = parseInt(el.nic_status);
            this.web2_process= parseInt(el.process_status);
          } else if(el.system_name === 'DB#1') {
            this.db1_cpu     = parseInt(el.cpu_status);
            this.db1_memory  = parseInt(el.mem_status);
            this.db1_disk    = parseInt(el.disk_status);
            this.db1_nic     = parseInt(el.nic_status);
            this.db1_process = parseInt(el.process_status);
          } else if(el.system_name === 'DB#2') {
            this.db2_cpu     = parseInt(el.cpu_status);
            this.db2_memory  = parseInt(el.mem_status);
            this.db2_disk    = parseInt(el.disk_status);
            this.db2_nic     = parseInt(el.nic_status);
            this.db2_process = parseInt(el.process_status); 
          }  
      });
    });
 
   /********** */
     setInterval( ()=> {
      this.needleValue =  Math.random() * 100;
      this.bottomLabel = this.needleValue.toFixed(0);
      this.gaugeValue =  parseInt(this.needleValue.toFixed(0));
      this.gaugeData = parseInt(this.needleValue.toFixed(0));    
      this.setGauge();
    }, 3000);

  }

  setGauge() {
       
       this.option = {
        tooltip: {
            formatter: '{a} <br/>{b} : {c}%'
        },
        toolbox: {
            feature: {
                restore: {},
                saveAsImage: { title: '이미지로 저장'},
                dataView: { 
                  show: true,
                  title:'데이터보기',
                  lang: ['보기','OFF','Refresh']
                 },
                dataZoom: {
                  show: true,
                  title: {
                      zoom:'zoom',
                      back: 'back'
                  }
                },
                magicType: {type:'bar', title: {bar: '바챠트'}}
            }
        },
        series: [
            {
                name: '속도계',
                type: 'gauge',
                detail: {formatter: '{value}%'},
                data: [{value: this.gaugeData, name: '완성율'}],
                axisLine: {
                    show: true,
                    lineStyle: {
                      color: [
                        [0.2, 'lightgreen'],
                        [0.4, 'orange'], 
                        [0.8, '#ff4500'],
                        [1, '#00FFFF']
                     ],
                     width: 20
                    }                   
                },
                axisLabel: {
                  show: true,
                  formatter: (v)=> {
                     switch (v + '') {
                       case '10' : return 'A';
                       case '30' : return 'B';
                       case '60' : return 'C';
                       case '90' : return 'D';
                       default: return '';
                     }
                  },
                  detail: {  
                       show: true,                 
                       color: 'auto',
                       fontSize: 10                 
                  }

                },
               
            }
        ]
       };

  }

  ngOnDestroy() {
    this.subs.unsubscribe()
  }

  queryImg(system: string, type: string) {
    if (system === 'was1') {
        return this.WasOneStatus(type);
    } else if (system === 'was2') {
        return this.WasTwoStatus(type);
    } else if (system === 'collector1') {
        return this.CollectorOneStatus(type);
    } else if (system === 'collector2') {
        return this.CollectorTwoStatus(type);
    } else if (system === 'web1') {
        return this.WebOneStatus(type);
    } else if (system === 'web2') {
        return this.WebTwoStatus(type);
    } else if (system === 'db1') {
        return this.DbOneStatus(type);
    } else if (system === 'db2') {
        return this.DbTwoStatus(type);
    }
 }

WasOneStatus(type:string) {
    if (type === 'cpu') {
        return this.findImg(this.was1_cpu);
    } else if (type === 'memory') {
        return this.findImg(this.was1_memory);
    } else if (type === 'disk') {
        return this.findImg(this.was1_disk);
    } else if (type === 'nic') {
        return this.findImg(this.was1_nic);
    } else if (type === 'process') {
        return this.findImg(this.was1_process);
    }
 }

WasTwoStatus(type:string) {
    if (type === 'cpu') {
        return this.findImg(this.was2_cpu);
    } else if (type === 'memory') {
        return this.findImg(this.was2_memory);
    } else if (type === 'disk') {
        return this.findImg(this.was2_disk);
    } else if (type === 'nic') {
        return this.findImg(this.was2_nic);
    } else if (type === 'process') {
        return this.findImg(this.was2_process);
    }
}

CollectorOneStatus(type:string) {
    if (type === 'cpu') {
        return this.findImg(this.col1_cpu);
    } else if (type === 'memory') {
        return this.findImg(this.col1_memory);
    } else if (type === 'disk') {
        return this.findImg(this.col1_disk);
    } else if (type === 'nic') {
        return this.findImg(this.col1_nic);
    } else if (type === 'process') {
        return this.findImg(this.col1_process);
    }
}

CollectorTwoStatus(type:string) {
   if (type === 'cpu') {
       return this.findImg(this.col2_cpu);
   } else if (type === 'memory') {
       return this.findImg(this.col2_memory);
   } else if (type === 'disk') {
       return this.findImg(this.col2_disk);
   } else if (type === 'nic') {
       return this.findImg(this.col2_nic);
   } else if (type === 'process') {
       return this.findImg(this.col2_process);
   }
}

WebOneStatus(type: string) {
   if (type === 'cpu') {
       return this.findImg(this.web1_cpu);
   } else if (type === 'memory') {
       return this.findImg(this.web1_memory);
   } else if (type === 'disk') {
       return this.findImg(this.web1_disk);
   } else if (type === 'nic') {
       return this.findImg(this.web1_nic);
   } else if (type === 'process') {
       return this.findImg(this.web1_process);
   }
}

WebTwoStatus(type: string) {
  if (type === 'cpu') {
      return this.findImg(this.web2_cpu);
  } else if (type === 'memory') {
      return this.findImg(this.web2_memory);
  } else if (type === 'disk') {
      return this.findImg(this.web2_disk);
  } else if (type === 'nic') {
      return this.findImg(this.web2_nic);
  } else if (type === 'process') {
      return this.findImg(this.web2_process);
  }
}

DbOneStatus(type: string) {
  if (type === 'cpu') {
      return this.findImg(this.db1_cpu);
  } else if (type === 'memory') {
      return this.findImg(this.db1_memory);
  } else if (type === 'disk') {
      return this.findImg(this.db1_disk);
  } else if (type === 'nic') {
      return this.findImg(this.db1_nic);
  } else if (type === 'process') {
      return this.findImg(this.db1_process);
  }
}

DbTwoStatus(type: string) {
  if (type === 'cpu') {
      return this.findImg(this.db2_cpu);
  } else if (type === 'memory') {
      return this.findImg(this.db2_memory);
  } else if (type === 'disk') {
      return this.findImg(this.db2_disk);
  } else if (type === 'nic') {
      return this.findImg(this.db2_nic);
  } else if (type === 'process') {
      return this.findImg(this.db2_process);
  }
}

findImg(imgNum) { 
  if (imgNum === 0) {
      return "../assets/imgs/icon_device.png";
  } else if (imgNum === 1) {
      return "../assets/imgs/icon_device1.png";
  } else if (imgNum === 2) {
      return "../assets/imgs/icon_device2.png";
  } else if (imgNum === 3) {
      return "../assets/imgs/icon_device3.png";
  }
}

getColor(name:string) {
     let color = '';
   if ( name === 'was1_cpu') {
      color = this.findColor(this.was1_cpu);
   } else if (name === 'was1_mem') {
    color = this.findColor(this.was1_memory);
   } else if (name === 'was1_disk') {
    color = this.findColor(this.was1_disk);
   } else if (name === 'was1_nic') {
    color = this.findColor(this.was1_nic);
   } else if (name === 'was1_pro') {
    color = this.findColor(this.was1_process);
   } else if ( name === 'was2_cpu') {
    color = this.findColor(this.was2_cpu);
   } else if (name === 'was2_mem') {
    color = this.findColor(this.was2_memory);
   } else if (name === 'was2_disk') {
    color = this.findColor(this.was2_disk);
   } else if (name === 'was2_nic') {
    color = this.findColor(this.was2_nic);
   } else if (name === 'was2_pro') {
    color = this.findColor(this.was2_process);
   } else if ( name === 'col1_cpu') {
    color = this.findColor(this.col1_cpu);
   } else if (name === 'col1_mem') {
    color = this.findColor(this.col1_memory);
   } else if (name === 'col1_disk') {
    color = this.findColor(this.col1_disk);
   } else if (name === 'col1_nic') {
    color = this.findColor(this.col1_nic);
   } else if (name === 'col1_pro') {
    color = this.findColor(this.col1_process);
   } else if ( name === 'col2_cpu') {
    color = this.findColor(this.col2_cpu);
   } else if (name === 'co21_mem') {
    color = this.findColor(this.col2_memory);
   } else if (name === 'col2_disk') {
    color = this.findColor(this.col2_disk);
   } else if (name === 'col2_nic') {
    color = this.findColor(this.col2_nic);
   } else if (name === 'col2_pro') {
    color = this.findColor(this.col2_process);
   } else if ( name === 'web1_cpu') {
    color = this.findColor(this.web1_cpu);
   } else if (name === 'web1_mem') {
    color = this.findColor(this.web1_memory);
   } else if (name === 'web1_disk') {
    color = this.findColor(this.web1_disk);
   } else if (name === 'web1_nic') {
    color = this.findColor(this.web1_nic);
   } else if (name === 'web1_pro') {
    color = this.findColor(this.web1_process);
   } else if ( name === 'web2_cpu') {
    color = this.findColor(this.web2_cpu);
   } else if (name === 'web2_mem') {
    color = this.findColor(this.web2_memory);
   } else if (name === 'web2_disk') {
    color = this.findColor(this.web2_disk);
   } else if (name === 'web2_nic') {
    color = this.findColor(this.web2_nic);
   } else if (name === 'web2_pro') {
    color = this.findColor(this.web2_process);
   } else if ( name === 'db1_cpu') {
    color = this.findColor(this.db1_cpu);
   } else if (name === 'db1_mem') {
    color = this.findColor(this.db1_memory);
   } else if (name === 'db1_disk') {
    color = this.findColor(this.db1_disk);
   } else if (name === 'db1_nic') {
    color = this.findColor(this.db1_nic);
   } else if (name === 'db1_pro') {
    color = this.findColor(this.db1_process);
   } else if ( name === 'db2_cpu') {
    color = this.findColor(this.db2_cpu);
   } else if (name === 'db2_mem') {
    color = this.findColor(this.db2_memory);
   } else if (name === 'db2_disk') {
    color = this.findColor(this.db2_disk);
   } else if (name === 'db2_nic') {
    color = this.findColor(this.db2_nic);
   } else if (name === 'db2_pro') {
    color = this.findColor(this.db2_process);
   }
   
  return {'font-weight':'bold', 'fill': color};
}

findColor(color) {
  if (color === 0) {
    return  'blue';
} else if (color === 1) {
    return  '#00ff40';
} else if (color === 2) {
    return  '#ff00ff';
} else if (color === 3) {
    return '#ff0040';
} 
}



}
