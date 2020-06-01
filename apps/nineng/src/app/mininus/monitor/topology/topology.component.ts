import { Component, OnInit, OnDestroy } from '@angular/core';
import { TestService } from '../../test/test.service';
import { interval } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-topology',
  templateUrl: './topology.component.html',
  styleUrls: ['./topology.component.scss']
})
export class TopologyComponent implements OnInit, OnDestroy {

  optionSeoul: any;
  optionSuwon: any;
  optionDaejon: any;
  optionDaegu: any;  
  optionBusan: any;
  optionKwangju: any;
  optionJeju: any;


  area: string;
  was1:        {cpu:number, mem:number};
  suwonWas:    {cpu:number, mem:number};
  daejonWas:   {cpu:number, mem:number};
  daeguWas:    {cpu:number, mem:number};
  busanWas:    {cpu:number, mem:number};
  kwangjuWas:  {cpu:number, mem:number};
  jejuWas:     {cpu:number, mem:number};
  

  pie:        { name:string, value:number}[] =[];
  suwonPie:   { name:string, value:number}[] =[];
  daejonPie:  { name:string, value:number}[] =[];
  daeguPie:   { name:string, value:number}[] =[];
  busanPie:   { name:string, value:number}[] =[];
  kwangjuPie: { name:string, value:number}[] =[];
  jejuPie:    { name:string, value:number}[] =[];

  private subs = new SubSink();

  constructor(
    private service: TestService,
  ) { }

  ngOnInit() {
    this.subs.sink =  interval(3000).pipe(
      switchMap( result => this.service.getSystem()),
      map( (sys:any) => sys.data)
     ).subscribe( datas => {
      this.was1 = {cpu:parseInt(datas[0].cpu_usage), mem: parseInt(datas[0].mem_usage) };
      const cpu = {name: "cpu", value: parseInt(datas[0].cpu_usage)};
      const mem = {name: "mem", value: parseInt(datas[0].mem_usage)};
      this.pie.push(cpu);
      this.pie.push(mem);
      this.seoulMap(this.was1.mem);


      this.suwonWas = {cpu:parseInt(datas[1].cpu_usage), mem: parseInt(datas[1].mem_usage) };
      const suwonCpu = {name: "cpu", value: parseInt(datas[1].cpu_usage)};
      const suwonMem = {name: "mem", value: parseInt(datas[1].mem_usage)};
      this.suwonPie.push(suwonCpu);
      this.suwonPie.push(suwonMem);
      this.suwonMap(this.suwonWas.mem);

      this.daejonWas = {cpu:parseInt(datas[2].cpu_usage), mem: parseInt(datas[2].mem_usage) };
      const daejonCpu = {name: "cpu", value: parseInt(datas[2].cpu_usage)};
      const daejonMem = {name: "mem", value: parseInt(datas[2].mem_usage)};
      this.daejonPie.push(daejonCpu);
      this.daejonPie.push(daejonMem);
      this.daejonMap(this.daejonWas.mem);      

      this.daeguWas = {cpu:parseInt(datas[3].cpu_usage), mem: parseInt(datas[3].mem_usage) };
      const daeguCpu = {name: "cpu", value: parseInt(datas[3].cpu_usage)};
      const daeguMem = {name: "mem", value: parseInt(datas[3].mem_usage)};
      this.daeguPie.push(daeguCpu);
      this.daeguPie.push(daeguMem);
      this.daeguMap(this.daeguWas.mem);      

      this.busanWas = {cpu:parseInt(datas[4].cpu_usage), mem: parseInt(datas[4].mem_usage) };
      const busanCpu = {name: "cpu", value: parseInt(datas[4].cpu_usage)};
      const busanMem = {name: "mem", value: parseInt(datas[4].mem_usage)};
      this.busanPie.push(busanCpu);
      this.busanPie.push(busanMem);
      this.busanMap(this.busanWas.mem);

      this.kwangjuWas = {cpu:parseInt(datas[5].cpu_usage), mem: parseInt(datas[5].mem_usage) };
      const kwangjuCpu = {name: "cpu", value: parseInt(datas[5].cpu_usage)};
      const kwangjuMem = {name: "mem", value: parseInt(datas[5].mem_usage)};
      this.kwangjuPie.push(kwangjuCpu);
      this.kwangjuPie.push(kwangjuMem);
      this.kwangjuMap(this.kwangjuWas.mem);
       
      this.jejuWas = {cpu:parseInt(datas[6].cpu_usage), mem: parseInt(datas[6].mem_usage) };
      const jejuCpu = {name: "cpu", value: parseInt(datas[6].cpu_usage)};
      const jejuMem = {name: "mem", value: parseInt(datas[6].mem_usage)};
      this.jejuPie.push(jejuCpu);
      this.jejuPie.push(jejuMem);
      this.jejuMap(this.jejuWas.mem);

     });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
 }

  areahw(name: string) {
    if (name === 'seoul') {
      this.area = '서울';
    } else if (name === 'suwon') {
      this.area = '수원';
    }else if (name === 'daejon') {
      this.area = '대전';
    }else if (name === 'daegu') {
      this.area = '데구';
    }else if (name === 'busan') {
      this.area = '부산';
    }else if (name === 'kwangju') {
      this.area = '광주';
    }else if (name === 'jeju') {
      this.area = '제주';
    }
     
  }

  seoulMap(mem) {   
    this.optionSeoul = {
      title: {
        text: '서울',
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

  daejonMap(mem) {   
    this.optionDaejon = {
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
  } // End of was-mem

  suwonMap(mem) {   
    this.optionSuwon = {
      title: {
        text: '수원',
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




  daeguMap(mem) {   
    this.optionDaegu = {
      title: {
        text: '대구',
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

  busanMap(mem) {   
    this.optionBusan = {
      title: {
        text: '부산',
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
  
  kwangjuMap(mem) {   
    this.optionKwangju = {
      title: {
        text: '광주',
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
  
  
  jejuMap(mem) {   
    this.optionJeju = {
      title: {
        text: '제주',
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



}
