import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class ChartService {
    
    url="http://221.141.251.58/opensys";
    constructor(
        private http: HttpClient
    ) {}

    test() {
        return this.http.get(`${this.url}/alarm.php`);
    }

    getAlarm() {
      const data = {
          resultCode : "SUCCESS",
          data: [
              {
                  dc_id: 'dc0',
                  dc_name: '우면',
                  today_alarm_cirtical: this.getRndInteger(80,100),
                  today_alarm_major: this.getRndInteger(40,70),
                  today_alarm_minor: this.getRndInteger(1,39),
                  top_no: 1,
                  yesterday_alarm_cirtical: this.getRndInteger(80,100),
                  yesterday_alarm_major: this.getRndInteger(40,70),
                  yesterday_alarm_minor: this.getRndInteger(1,39),
                  week_alarm_cirtical: this.getRndInteger(80,100),
                  week_alarm_major: this.getRndInteger(40,70),
                  week_alarm_minor: this.getRndInteger(1,39),
              }
          ]
      };

      return of(data);

      //  return this.http.get(`${this.url}/alarm.php`);
     }

     getSystem() {
       //  return this.http.get(`${this.url}/rm.php`);
         /******* */
       const data =  
       {
        resultCode: "SUCCESS",
        resultMessage: "처리 성공",
        totalCount: "8",
        data: [
        {
        system_id: "1",
        system_name: "WAS#1",
        cpu_usage: this.getRndInteger(20,90),
        mem_usage: this.getRndInteger(10,100),
        num_directory: this.getRndInteger(1,3),
        directory_info: [
        {
        directory_name: "/etc/directory3",
        directory_usage: this.getRndInteger(10,80)
        },
        {
        directory_name: "/etc/directory1",
        directory_usage: this.getRndInteger(10,80)
        },
        {
        directory_name: "/etc/directory2",
        directory_usage: this.getRndInteger(10,80)
        }
        ],
        num_nic: "1",
        nic_info: [
        {
        nic_name: "nic1",
        nic_status: this.getRndInteger(0,1)
        }
        ],
        num_process: this.getRndInteger(1,4),
        process_info: [
        {
        process_name: "process3",
        process_status: this.getRndInteger(0,1)
        }
        ]
        },
        {
        system_id: "2",
        system_name: "WAS#2",
        cpu_usage: this.getRndInteger(20,90),
        mem_usage: this.getRndInteger(10,100),
        num_directory: this.getRndInteger(1,3),
        directory_info: [
        {
        directory_name: "/etc/directory3",
        directory_usage: this.getRndInteger(10,80)
        },
        {
        directory_name: "/etc/directory1",
        directory_usage: this.getRndInteger(10,80)
        },
        {
        directory_name: "/etc/directory2",
        directory_usage: this.getRndInteger(10,80)
        },
        {
        directory_name: "/etc/directory2",
        directory_usage: this.getRndInteger(10,80)
        }
        ],
        num_nic: "2",
        nic_info: [
        {
        nic_name: "nic1",
        nic_status: this.getRndInteger(0,1)
        },
        {
        nic_name: "nic2",
        nic_status: this.getRndInteger(0,1)
        },
        {
        nic_name: "nic3",
        nic_status: this.getRndInteger(0,1)
        }
        ],
        num_process: this.getRndInteger(1,3),
        process_info: [
        {
        process_name: "process3",
        process_status: this.getRndInteger(0,1)
        },
        {
        process_name: "process3",
        process_status: this.getRndInteger(0,1)
        },
        {
        process_name: "process4",
        process_status: this.getRndInteger(0,1)
        },
        {
        process_name: "process4",
        process_status: this.getRndInteger(0,1)
        }
        ]
        },
        {
        system_id: "3",
        system_name: "Collector#1",
        cpu_usage: this.getRndInteger(20,90),
        mem_usage: this.getRndInteger(10,100),
        num_directory: this.getRndInteger(1,3),
        directory_info: [
        {
        directory_name: "/etc/directory3",
        directory_usage: this.getRndInteger(10,80)
        },
        {
        directory_name: "/etc/directory1",
        directory_usage: this.getRndInteger(10,80)
        },
        {
        directory_name: "/etc/directory2",
        directory_usage: this.getRndInteger(10,80)
        },
        {
        directory_name: "/etc/directory2",
        directory_usage: this.getRndInteger(10,80)
        },
        {
        directory_name: "/etc/directory3",
        directory_usage: this.getRndInteger(10,80)
        },
        {
        directory_name: "/etc/directory2",
        directory_usage: this.getRndInteger(10,80)
        },
        {
        directory_name: "/etc/directory1",
        directory_usage: this.getRndInteger(10,80)
        }
        ],
        num_nic: "1",
        nic_info: [
        {
        nic_name: "nic1",
        nic_status: this.getRndInteger(0,1)
        },
        {
        nic_name: "nic2",
        nic_status: this.getRndInteger(0,1)
        },
        {
        nic_name: "nic3",
        nic_status: this.getRndInteger(0,1)
        },
        {
        nic_name: "nic2",
        nic_status: this.getRndInteger(0,1)
        }
        ],
        num_process: "1",
        process_info: [
        {
        process_name: "process3",
        process_status: this.getRndInteger(0,1)
        },
        {
        process_name: "process3",
        process_status: this.getRndInteger(0,1)
        },
        {
        process_name: "process4",
        process_status: this.getRndInteger(0,1)
        },
        {
        process_name: "process4",
        process_status: this.getRndInteger(0,1)
        },
        {
        process_name: "process3",
        process_status: this.getRndInteger(0,1)
        }
        ]
        },
        {
        system_id: "4",
        system_name: "Collector#2",
        cpu_usage: this.getRndInteger(20,90),
        mem_usage: this.getRndInteger(10,100),
        num_directory: this.getRndInteger(1,3),
        directory_info: [
        {
        directory_name: "/etc/directory3",
        directory_usage: this.getRndInteger(10,80)
        },
        {
        directory_name: "/etc/directory1",
        directory_usage: this.getRndInteger(10,80)
        },
        {
        directory_name: "/etc/directory2",
        directory_usage: this.getRndInteger(10,80)
        },
        {
        directory_name: "/etc/directory2",
        directory_usage: this.getRndInteger(10,80)
        },
        {
        directory_name: "/etc/directory3",
        directory_usage: this.getRndInteger(10,80)
        },
        {
        directory_name: "/etc/directory2",
        directory_usage: this.getRndInteger(10,80)
        },
        {
        directory_name: "/etc/directory1",
        directory_usage: this.getRndInteger(10,80)
        },
        {
        directory_name: "/etc/directory1",
        directory_usage: this.getRndInteger(10,80)
        },
        {
        directory_name: "/etc/directory2",
        directory_usage: this.getRndInteger(10,80)
        }
        ],
        num_nic: "2",
        nic_info: [
        {
        nic_name: "nic1",
        nic_status: this.getRndInteger(0,1)
        },
        {
        nic_name: "nic2",
        nic_status: this.getRndInteger(0,1)
        },
        {
        nic_name: "nic3",
        nic_status: this.getRndInteger(0,1)
        },
        {
        nic_name: "nic2",
        nic_status: this.getRndInteger(0,1)
        },
        {
        nic_name: "nic2",
        nic_status: this.getRndInteger(0,1)
        },
        {
        nic_name: "nic4",
        nic_status: this.getRndInteger(0,1)
        }
        ],
        num_process: "1",
        process_info: [
        {
        process_name: "process3",
        process_status: this.getRndInteger(0,1)
        },
        {
        process_name: "process3",
        process_status: this.getRndInteger(0,1)
        },
        {
        process_name: "process4",
        process_status: this.getRndInteger(0,1)
        },
        {
        process_name: "process4",
        process_status: this.getRndInteger(0,1)
        },
        {
        process_name: "process3",
        process_status: this.getRndInteger(0,1)
        },
        {
        process_name: "process1",
        process_status: this.getRndInteger(0,1)
        }
        ]
        },
        {
        system_id: "5",
        system_name: "WEB#1",
        cpu_usage: this.getRndInteger(20,90),
        mem_usage: this.getRndInteger(10,100),
        num_directory: this.getRndInteger(1,3),
        directory_info: [
        {
        directory_name: "/etc/directory3",
        directory_usage: this.getRndInteger(10,80)
        },
        {
        directory_name: "/etc/directory1",
        directory_usage: this.getRndInteger(10,80)
        },
        {
        directory_name: "/etc/directory2",
        directory_usage: this.getRndInteger(10,80)
        },
        {
        directory_name: "/etc/directory2",
        directory_usage: this.getRndInteger(10,80)
        },
        {
        directory_name: "/etc/directory3",
        directory_usage: this.getRndInteger(10,80)
        },
        {
        directory_name: "/etc/directory2",
        directory_usage: this.getRndInteger(10,80)
        },
        {
        directory_name: "/etc/directory1",
        directory_usage: this.getRndInteger(10,80)
        },
        {
        directory_name: "/etc/directory1",
        directory_usage: this.getRndInteger(10,80)
        },
        {
        directory_name: "/etc/directory2",
        directory_usage: this.getRndInteger(10,80)
        },
        {
        directory_name: "/etc/directory2",
        directory_usage: this.getRndInteger(10,80)
        },
        {
        directory_name: "/etc/directory2",
        directory_usage: this.getRndInteger(10,80)
        },
        {
        directory_name: "/etc/directory1",
        directory_usage: this.getRndInteger(10,80)
        }
        ],
        num_nic: "2",
        nic_info: [
        {
        nic_name: "nic1",
        nic_status: this.getRndInteger(0,1)
        },
        {
        nic_name: "nic2",
        nic_status: this.getRndInteger(0,1)
        },
        {
        nic_name: "nic3",
        nic_status: this.getRndInteger(0,1)
        },
        {
        nic_name: "nic2",
        nic_status: this.getRndInteger(0,1)
        },
        {
        nic_name: "nic2",
        nic_status: this.getRndInteger(0,1)
        },
        {
        nic_name: "nic4",
        nic_status: this.getRndInteger(0,1)
        },
        {
        nic_name: "nic2",
        nic_status: this.getRndInteger(0,1)
        },
        {
        nic_name: "nic3",
        nic_status: this.getRndInteger(0,1)
        }
        ],
        num_process: this.getRndInteger(1,3),
        process_info: [
        {
        process_name: "process3",
        process_status: this.getRndInteger(0,1)
        },
        {
        process_name: "process3",
        process_status: this.getRndInteger(0,1)
        },
        {
        process_name: "process4",
        process_status: this.getRndInteger(0,1)
        },
        {
        process_name: "process4",
        process_status: this.getRndInteger(0,1)
        },
        {
        process_name: "process3",
        process_status: this.getRndInteger(0,1)
        },
        {
        process_name: "process1",
        process_status: "0"
        },
        {
        process_name: "process3",
        process_status: this.getRndInteger(0,1)
        }
        ]
        },
        {
        system_id: "6",
        system_name: "WEB#2",
        cpu_usage: this.getRndInteger(20,90),
        mem_usage: this.getRndInteger(10,100),
        num_directory: this.getRndInteger(1,3),
        directory_info: [
        {
        directory_name: "/etc/directory3",
        directory_usage: this.getRndInteger(10,80)
        },
        {
        directory_name: "/etc/directory1",
        directory_usage: this.getRndInteger(10,80)
        },
        {
        directory_name: "/etc/directory2",
        directory_usage: this.getRndInteger(10,80)
        },
        {
        directory_name: "/etc/directory2",
        directory_usage: this.getRndInteger(10,80)
        },
        {
        directory_name: "/etc/directory3",
        directory_usage: this.getRndInteger(10,80)
        },
        {
        directory_name: "/etc/directory2",
        directory_usage: this.getRndInteger(10,80)
        },
        {
        directory_name: "/etc/directory1",
        directory_usage: this.getRndInteger(10,80)
        },
        {
        directory_name: "/etc/directory1",
        directory_usage: this.getRndInteger(10,80)
        },
        {
        directory_name: "/etc/directory2",
        directory_usage: this.getRndInteger(10,80)
        },
        {
        directory_name: "/etc/directory2",
        directory_usage: this.getRndInteger(10,80)
        },
        {
        directory_name: "/etc/directory2",
        directory_usage: this.getRndInteger(10,80)
        },
        {
        directory_name: "/etc/directory1",
        directory_usage: this.getRndInteger(10,80)
        },
        {
        directory_name: "/etc/directory2",
        directory_usage: this.getRndInteger(10,80)
        },
        {
        directory_name: "/etc/directory1",
        directory_usage: this.getRndInteger(10,80)
        }
        ],
        num_nic: this.getRndInteger(1,3),
        nic_info: [
        {
        nic_name: "nic1",
        nic_status: this.getRndInteger(0,1)
        },
        {
        nic_name: "nic2",
        nic_status: this.getRndInteger(0,1)
        },
        {
        nic_name: "nic3",
        nic_status: this.getRndInteger(0,1)
        },
        {
        nic_name: "nic2",
        nic_status: this.getRndInteger(0,1)
        },
        {
        nic_name: "nic2",
        nic_status: this.getRndInteger(0,1)
        },
        {
        nic_name: "nic4",
        nic_status: this.getRndInteger(0,1)
        },
        {
        nic_name: "nic2",
        nic_status: this.getRndInteger(0,1)
        },
        {
        nic_name: "nic3",
        nic_status: this.getRndInteger(0,1)
        },
        {
        nic_name: "nic4",
        nic_status: this.getRndInteger(0,1)
        },
        {
        nic_name: "nic4",
        nic_status: this.getRndInteger(0,1)
        },
        {
        nic_name: "nic1",
        nic_status: this.getRndInteger(0,1)
        }
        ],
        num_process: this.getRndInteger(1,3),
        process_info: [
        {
        process_name: "process3",
        process_status: this.getRndInteger(0,1)
        },
        {
        process_name: "process3",
        process_status: this.getRndInteger(0,1)
        },
        {
        process_name: "process4",
        process_status: this.getRndInteger(0,1)
        },
        {
        process_name: "process4",
        process_status: this.getRndInteger(0,1)
        },
        {
        process_name: "process3",
        process_status: this.getRndInteger(0,1)
        },
        {
        process_name: "process1",
        process_status: this.getRndInteger(0,1)
        },
        {
        process_name: "process3",
        process_status: this.getRndInteger(0,1)
        },
        {
        process_name: "process3",
        process_status: this.getRndInteger(0,1)
        },
        {
        process_name: "process4",
        process_status: this.getRndInteger(0,1)
        },
        {
        process_name: "process2",
        process_status: this.getRndInteger(0,1)
        }
        ]
        },
        {
        system_id: "7",
        system_name: "DB#1",
        cpu_usage: this.getRndInteger(20,90),
        mem_usage: this.getRndInteger(10,100),
        num_directory: this.getRndInteger(1,3),
        directory_info: [
        {
        directory_name: "/etc/directory3",
        directory_usage: this.getRndInteger(0,1)
        },
        {
        directory_name: "/etc/directory1",
        directory_usage: this.getRndInteger(0,1)
        },
        {
        directory_name: "/etc/directory2",
        directory_usage: this.getRndInteger(0,1)
        },
        {
        directory_name: "/etc/directory2",
        directory_usage: this.getRndInteger(0,1)
        },
        {
        directory_name: "/etc/directory3",
        directory_usage: this.getRndInteger(0,1)
        },
        {
        directory_name: "/etc/directory2",
        directory_usage: this.getRndInteger(0,1)
        },
        {
        directory_name: "/etc/directory1",
        directory_usage: this.getRndInteger(0,1)
        },
        {
        directory_name: "/etc/directory1",
        directory_usage: this.getRndInteger(0,1)
        },
        {
        directory_name: "/etc/directory2",
        directory_usage: this.getRndInteger(0,1)
        },
        {
        directory_name: "/etc/directory2",
        directory_usage: this.getRndInteger(0,1)
        },
        {
        directory_name: "/etc/directory2",
        directory_usage: this.getRndInteger(0,1)
        },
        {
        directory_name: "/etc/directory1",
        directory_usage: this.getRndInteger(0,1)
        },
        {
        directory_name: "/etc/directory2",
        directory_usage: this.getRndInteger(0,1)
        },
        {
        directory_name: "/etc/directory1",
        directory_usage: this.getRndInteger(0,1)
        },
        {
        directory_name: "/etc/directory1",
        directory_usage: this.getRndInteger(0,1)
        },
        {
        directory_name: "/etc/directory4",
        directory_usage: this.getRndInteger(0,1)
        }
        ],
        num_nic: this.getRndInteger(1,3),
        nic_info: [
        {
        nic_name: "nic1",
        nic_status: this.getRndInteger(0,1)
        },
        {
        nic_name: "nic2",
        nic_status: this.getRndInteger(0,1)
        },
        {
        nic_name: "nic3",
        nic_status: this.getRndInteger(0,1)
        },
        {
        nic_name: "nic2",
        nic_status: this.getRndInteger(0,1)
        },
        {
        nic_name: "nic2",
        nic_status: this.getRndInteger(0,1)
        },
        {
        nic_name: "nic4",
        nic_status: this.getRndInteger(0,1)
        },
        {
        nic_name: "nic2",
        nic_status: this.getRndInteger(0,1)
        },
        {
        nic_name: "nic3",
        nic_status: this.getRndInteger(0,1)
        },
        {
        nic_name: "nic4",
        nic_status: this.getRndInteger(0,1)
        },
        {
        nic_name: "nic4",
        nic_status: this.getRndInteger(0,1)
        },
        {
        nic_name: "nic1",
        nic_status: this.getRndInteger(0,1)
        },
        {
        nic_name: "nic1",
        nic_status: this.getRndInteger(0,1)
        }
        ],
        num_process: this.getRndInteger(1,3),
        process_info: [
        {
        process_name: "process3",
        process_status: this.getRndInteger(0,1)
        },
        {
        process_name: "process3",
        process_status: this.getRndInteger(0,1)
        },
        {
        process_name: "process4",
        process_status: this.getRndInteger(0,1)
        },
        {
        process_name: "process4",
        process_status: this.getRndInteger(0,1)
        },
        {
        process_name: "process3",
        process_status: this.getRndInteger(0,1)
        },
        {
        process_name: "process1",
        process_status: this.getRndInteger(0,1)
        },
        {
        process_name: "process3",
        process_status: this.getRndInteger(0,1)
        },
        {
        process_name: "process3",
        process_status: this.getRndInteger(0,1)
        },
        {
        process_name: "process4",
        process_status: this.getRndInteger(0,1)
        },
        {
        process_name: "process2",
        process_status: this.getRndInteger(0,1)
        },
        {
        process_name: "process4",
        process_status: this.getRndInteger(0,1)
        },
        {
        process_name: "process4",
        process_status: this.getRndInteger(0,1)
        }
        ]
        },
        {
        system_id: "8",
        system_name: "DB#2",
        cpu_usage: this.getRndInteger(20,90),
        mem_usage: this.getRndInteger(10,100),
        num_directory: this.getRndInteger(1,3),
        directory_info: [
        {
        directory_name: "/etc/directory3",
        directory_usage: this.getRndInteger(10,80)
        },
        {
        directory_name: "/etc/directory1",
        directory_usage: this.getRndInteger(10,80)
        },
        {
        directory_name: "/etc/directory2",
        directory_usage: this.getRndInteger(10,80)
        },
        {
        directory_name: "/etc/directory2",
        directory_usage: this.getRndInteger(10,80)
        },
        {
        directory_name: "/etc/directory3",
        directory_usage: this.getRndInteger(10,80)
        },
        {
        directory_name: "/etc/directory2",
        directory_usage: this.getRndInteger(10,80)
        },
        {
        directory_name: "/etc/directory1",
        directory_usage: this.getRndInteger(10,80)
        },
        {
        directory_name: "/etc/directory1",
        directory_usage: this.getRndInteger(10,80)
        },
        {
        directory_name: "/etc/directory2",
        directory_usage: this.getRndInteger(10,80)
        },
        {
        directory_name: "/etc/directory2",
        directory_usage: this.getRndInteger(10,80)
        },
        {
        directory_name: "/etc/directory2",
        directory_usage: this.getRndInteger(10,80)
        },
        {
        directory_name: "/etc/directory1",
        directory_usage: this.getRndInteger(10,80)
        },
        {
        directory_name: "/etc/directory2",
        directory_usage: this.getRndInteger(10,80)
        },
        {
        directory_name: "/etc/directory1",
        directory_usage: this.getRndInteger(10,80)
        },
        {
        directory_name: "/etc/directory1",
        directory_usage: this.getRndInteger(10,80)
        },
        {
        directory_name: "/etc/directory4",
        directory_usage: this.getRndInteger(10,80)
        },
        {
        directory_name: "/etc/directory4",
        directory_usage: this.getRndInteger(10,80)
        }
        ],
        num_nic: this.getRndInteger(1,3),
        nic_info: [
        {
        nic_name: "nic1",
        nic_status: this.getRndInteger(0,1)
        },
        {
        nic_name: "nic2",
        nic_status: this.getRndInteger(0,1)
        },
        {
        nic_name: "nic3",
        nic_status: this.getRndInteger(0,1)
        },
        {
        nic_name: "nic2",
        nic_status: this.getRndInteger(0,1)
        },
        {
        nic_name: "nic2",
        nic_status: this.getRndInteger(0,1)
        },
        {
        nic_name: "nic4",
        nic_status: this.getRndInteger(0,1)
        },
        {
        nic_name: "nic2",
        nic_status: this.getRndInteger(0,1)
        },
        {
        nic_name: "nic3",
        nic_status: this.getRndInteger(0,1)
        },
        {
        nic_name: "nic4",
        nic_status: this.getRndInteger(0,1)
        },
        {
        nic_name: "nic4",
        nic_status: this.getRndInteger(0,1)
        },
        {
        nic_name: "nic1",
        nic_status: this.getRndInteger(0,1)
        },
        {
        nic_name: "nic1",
        nic_status: this.getRndInteger(0,1)
        },
        {
        nic_name: "nic1",
        nic_status: this.getRndInteger(0,1)
        }
        ],
        num_process: this.getRndInteger(1,3),
        process_info: [
        {
        process_name: "process3",
        process_status: this.getRndInteger(0,1)
        },
        {
        process_name: "process3",
        process_status: this.getRndInteger(0,1)
        },
        {
        process_name: "process4",
        process_status: this.getRndInteger(0,1)
        },
        {
        process_name: "process4",
        process_status: this.getRndInteger(0,1)
        },
        {
        process_name: "process3",
        process_status: "0"
        },
        {
        process_name: "process1",
        process_status: this.getRndInteger(0,1)
        },
        {
        process_name: "process3",
        process_status: this.getRndInteger(0,1)
        },
        {
        process_name: "process3",
        process_status: this.getRndInteger(0,1)
        },
        {
        process_name: "process4",
        process_status: this.getRndInteger(0,1)
        },
        {
        process_name: "process2",
        process_status: this.getRndInteger(0,1)
        },
        {
        process_name: "process4",
        process_status: this.getRndInteger(0,1)
        },
        {
        process_name: "process4",
        process_status: this.getRndInteger(0,1)
        },
        {
        process_name: "process1",
        process_status: this.getRndInteger(0,1)
        },
        {
        process_name: "process2",
        process_status: this.getRndInteger(0,1)
        },
        {
        process_name: "process2",
        process_status: this.getRndInteger(0,1)
        }
        ]
        }
        ]
        }

        return of(data);

         /******** */
     }

     getHw() {
        const data = {
            resultCode: "SUCCESS",
            resultMessage: "처리 성공",
            totalCount: "8",
            data: [
                {
                    system_id: '1',
                    system_name: "WAS#1",
                    cpu_status: this.getRndInteger(1,3),
                    process_status: this.getRndInteger(1,3),
                    disk_status: this.getRndInteger(1,3),
                    nic_status: this.getRndInteger(1,3),
                    mem_status: this.getRndInteger(1,3),
                    conn_system_info: [
                         {                           
                            conn_system_name: "WAS#2",
                            conn_system_status: this.getRndInteger(0,1)
                         },
                         {
                            conn_system_name: "Collector#1",
                            conn_system_status: this.getRndInteger(0,1)
                         },
                         {
                            conn_system_name: "Collector#2",
                            conn_system_status: this.getRndInteger(0,1)
                         },
                         {
                             conn_system_name: "WEB#1",
                             conn_system_status: this.getRndInteger(0,1)
                         },
                         {
                             conn_system_name: "WEB#2",
                             conn_system_status: this.getRndInteger(0,1)
                         },
                         {
                             conn_system_name: "DB#1",
                             conn_system_status: this.getRndInteger(0,1)
                         },
                         {
                             conn_system_name: "DB#2",
                             conn_system_status: this.getRndInteger(0,1)
                         },
                         {
                             conn_system_name: "E2E",
                             conn_system_status: this.getRndInteger(0,1)
                         },
                         {
                             conn_system_name: "SDNC",
                             conn_system_status: this.getRndInteger(0,1)
                         } 
                         
                    ]
                },
                {
                    system_id: '2',
                    system_name: "WAS#2",
                    cpu_status: this.getRndInteger(1,3),
                    process_status: this.getRndInteger(1,3),
                    disk_status: this.getRndInteger(1,3),
                    nic_status: this.getRndInteger(1,3),
                    mem_status: this.getRndInteger(1,3),
                    conn_system_info: [
                         {                           
                            conn_system_name: "WAS#1",
                            conn_system_status: this.getRndInteger(0,1)
                         },
                         {
                            conn_system_name: "Collector#1",
                            conn_system_status: this.getRndInteger(0,1)
                         },
                         {
                            conn_system_name: "Collector#2",
                            conn_system_status: this.getRndInteger(0,1)
                         },
                         {
                             conn_system_name: "WEB#1",
                             conn_system_status: this.getRndInteger(0,1)
                         },
                         {
                             conn_system_name: "WEB#2",
                             conn_system_status: this.getRndInteger(0,1)
                         },
                         {
                             conn_system_name: "DB#1",
                             conn_system_status: this.getRndInteger(0,1)
                         },
                         {
                             conn_system_name: "DB#2",
                             conn_system_status: this.getRndInteger(0,1)
                         },
                         {
                             conn_system_name: "E2E",
                             conn_system_status: this.getRndInteger(0,1)
                         },
                         {
                             conn_system_name: "SDNC",
                             conn_system_status: this.getRndInteger(0,1)
                         } 
                         
                    ]
                },
                {
                    system_id: "3",
                    system_name: "Collector#1",
                    cpu_status: this.getRndInteger(1,3),
                    process_status: this.getRndInteger(1,3),
                    disk_status: this.getRndInteger(1,3),
                    nic_status: this.getRndInteger(1,3),
                    mem_status: this.getRndInteger(1,3),
                    conn_system_info: [
                    {
                       conn_system_name: "WAS#1",
                       conn_system_status: this.getRndInteger(0,1)
                    },
                    {
                       conn_system_name: "WAS#2",
                       conn_system_status: this.getRndInteger(0,1)
                    },
                    {
                       conn_system_name: "Collector#2",
                       conn_system_status: this.getRndInteger(0,1)
                    },
                    {
                       conn_system_name: "WEB#1",
                       conn_system_status: this.getRndInteger(0,1)
                    },
                    {
                       conn_system_name: "WEB#2",
                       conn_system_status: this.getRndInteger(0,1)
                    },
                    {
                       conn_system_name: "DB#1",
                       conn_system_status: this.getRndInteger(0,1)
                    },
                    {
                       conn_system_name: "DB#2",
                       conn_system_status: this.getRndInteger(0,1)
                    },
                    {
                       conn_system_name: "E2E",
                       conn_system_status: this.getRndInteger(0,1)
                    },
                    {
                       conn_system_name: "SDNC",
                       conn_system_status: this.getRndInteger(0,1)
                    }
                    ]
                },
                {
                    system_id: "4",
                    system_name: "Collector#2",
                    cpu_status: this.getRndInteger(1,3),
                    process_status: this.getRndInteger(1,3),
                    disk_status: this.getRndInteger(1,3),
                    nic_status: this.getRndInteger(1,3),
                    mem_status:this.getRndInteger(1,3),
                    conn_system_info: [
                    {
                    conn_system_name: "WAS#1",
                    conn_system_status: this.getRndInteger(0,1)
                    },
                    {
                    conn_system_name: "WAS#2",
                    conn_system_status: this.getRndInteger(0,1)
                    },
                    {
                    conn_system_name: "Collector#1",
                    conn_system_status: this.getRndInteger(0,1)
                    },
                    {
                    conn_system_name: "WEB#1",
                    conn_system_status: this.getRndInteger(0,1)
                    },
                    {
                    conn_system_name: "WEB#2",
                    conn_system_status: this.getRndInteger(0,1)
                    },
                    {
                    conn_system_name: "DB#1",
                    conn_system_status: this.getRndInteger(0,1)
                    },
                    {
                    conn_system_name: "DB#2",
                    conn_system_status: this.getRndInteger(0,1)
                    },
                    {
                    conn_system_name: "E2E",
                    conn_system_status: this.getRndInteger(0,1)
                    },
                    {
                    conn_system_name: "SDNC",
                    conn_system_status: this.getRndInteger(0,1)
                    }
                    ]
                },
                {
                    system_id: "5",
                    system_name: "WEB#1",
                    cpu_status: this.getRndInteger(1,3),
                    process_status: this.getRndInteger(1,3),
                    disk_status: this.getRndInteger(1,3),
                    nic_status: this.getRndInteger(1,3),
                    mem_status: this.getRndInteger(1,3),
                    conn_system_info: [
                    {
                    conn_system_name: "WAS#1",
                    conn_system_status: this.getRndInteger(0,1)
                    },
                    {
                    conn_system_name: "WAS#2",
                    conn_system_status: this.getRndInteger(0,1)
                    },
                    {
                    conn_system_name: "Collector#1",
                    conn_system_status: this.getRndInteger(0,1)
                    },
                    {
                    conn_system_name: "Collector#2",
                    conn_system_status: this.getRndInteger(0,1)
                    },
                    {
                    conn_system_name: "WEB#2",
                    conn_system_status: this.getRndInteger(0,1)
                    },
                    {
                    conn_system_name: "DB#1",
                    conn_system_status: this.getRndInteger(0,1)
                    },
                    {
                    conn_system_name: "DB#2",
                    conn_system_status: this.getRndInteger(0,1)
                    },
                    {
                    conn_system_name: "E2E",
                    conn_system_status: this.getRndInteger(0,1)
                    },
                    {
                    conn_system_name: "SDNC",
                    conn_system_status: this.getRndInteger(0,1)
                    }
                    ]
                },
                {
                    system_id: "6",
                    system_name: "WEB#2",
                    cpu_status: this.getRndInteger(1,3),
                    process_status: this.getRndInteger(1,3),
                    disk_status: this.getRndInteger(1,3),
                    nic_status: this.getRndInteger(1,3),
                    mem_status: this.getRndInteger(1,3),
                    conn_system_info: [
                    {
                    conn_system_name: "WAS#1",
                    conn_system_status: this.getRndInteger(0,1)
                    },
                    {
                    conn_system_name: "WAS#2",
                    conn_system_status: this.getRndInteger(0,1)
                    },
                    {
                    conn_system_name: "Collector#1",
                    conn_system_status: this.getRndInteger(0,1)
                    },
                    {
                    conn_system_name: "Collector#2",
                    conn_system_status: this.getRndInteger(0,1)
                    },
                    {
                    conn_system_name: "WEB#1",
                    conn_system_status: this.getRndInteger(0,1)
                    },
                    {
                    conn_system_name: "DB#1",
                    conn_system_status: this.getRndInteger(0,1)
                    },
                    {
                    conn_system_name: "DB#2",
                    conn_system_status: this.getRndInteger(0,1)
                    },
                    {
                    conn_system_name: "E2E",
                    conn_system_status: this.getRndInteger(0,1)
                    },
                    {
                    conn_system_name: "SDNC",
                    conn_system_status: this.getRndInteger(0,1)
                    }
                    ]
                },
                {
                    system_id: "7",
                    system_name: "DB#1",
                    cpu_status: this.getRndInteger(1,3),
                    process_status: this.getRndInteger(1,3),
                    disk_status: this.getRndInteger(1,3),
                    nic_status: this.getRndInteger(1,3),
                    mem_status: this.getRndInteger(1,3),
                    conn_system_info: [
                    {
                    conn_system_name: "WAS#1",
                    conn_system_status: this.getRndInteger(0,1)
                    },
                    {
                    conn_system_name: "WAS#2",
                    conn_system_status: this.getRndInteger(0,1)
                    },
                    {
                    conn_system_name: "Collector#1",
                    conn_system_status: this.getRndInteger(0,1)
                    },
                    {
                    conn_system_name: "Collector#2",
                    conn_system_status: this.getRndInteger(0,1)
                    },
                    {
                    conn_system_name: "WEB#1",
                    conn_system_status: this.getRndInteger(0,1)
                    },
                    {
                    conn_system_name: "WEB#2",
                    conn_system_status: this.getRndInteger(0,1)
                    },
                    {
                    conn_system_name: "DB#2",
                    conn_system_status: this.getRndInteger(0,1)
                    },
                    {
                    conn_system_name: "E2E",
                    conn_system_status: this.getRndInteger(0,1)
                    },
                    {
                    conn_system_name: "SDNC",
                    conn_system_status: this.getRndInteger(0,1)
                    }
                    ]
                },
                {
                    system_id: "8",
                    system_name: "DB#2",
                    cpu_status: this.getRndInteger(1,3),
                    process_status: this.getRndInteger(1,3),
                    disk_status: this.getRndInteger(1,3),
                    nic_status: this.getRndInteger(1,3),
                    mem_status: this.getRndInteger(1,3),
                    conn_system_info: [
                    {
                    conn_system_name: "WAS#1",
                    conn_system_status: this.getRndInteger(0,1)
                    },
                    {
                    conn_system_name: "WAS#2",
                    conn_system_status: this.getRndInteger(0,1)
                    },
                    {
                    conn_system_name: "Collector#1",
                    conn_system_status: this.getRndInteger(0,1)
                    },
                    {
                    conn_system_name: "Collector#2",
                    conn_system_status: this.getRndInteger(0,1)
                    },
                    {
                    conn_system_name: "WEB#1",
                    conn_system_status: this.getRndInteger(0,1)
                    },
                    {
                    conn_system_name: "WEB#2",
                    conn_system_status: this.getRndInteger(0,1)
                    },
                    {
                    conn_system_name: "DB#1",
                    conn_system_status: this.getRndInteger(0,1)
                    },
                    {
                    conn_system_name: "E2E",
                    conn_system_status: this.getRndInteger(0,1)
                    },
                    {
                    conn_system_name: "SDNC",
                    conn_system_status: this.getRndInteger(0,1)
                    }
                    ]
                },
                {
                    system_id: "9",
                    system_name: "E2E",
                    cpu_status: this.getRndInteger(1,3),
                    process_status: this.getRndInteger(1,3),
                    disk_status: this.getRndInteger(1,3),
                    nic_status: this.getRndInteger(1,3),
                    mem_status: this.getRndInteger(1,3),
                    conn_system_info: [
                    {
                    conn_system_name: "WAS#1",
                    conn_system_status: this.getRndInteger(0,1)
                    },
                    {
                    conn_system_name: "WAS#2",
                    conn_system_status: this.getRndInteger(0,1)
                    },
                    {
                    conn_system_name: "Collector#1",
                    conn_system_status: this.getRndInteger(0,1)
                    },
                    {
                    conn_system_name: "Collector#2",
                    conn_system_status: this.getRndInteger(0,1)
                    },
                    {
                    conn_system_name: "WEB#1",
                    conn_system_status: this.getRndInteger(0,1)
                    },
                    {
                    conn_system_name: "WEB#2",
                    conn_system_status: this.getRndInteger(0,1)
                    },
                    {
                    conn_system_name: "DB#1",
                    conn_system_status: this.getRndInteger(0,1)
                    },
                    {
                    conn_system_name: "DB#2",
                    conn_system_status: this.getRndInteger(0,1)
                    },
                    {
                    conn_system_name: "SDNC",
                    conn_system_status: this.getRndInteger(0,1)
                    }
                    ]
                },
                {
                    system_id: "10",
                    system_name: "SDNC",
                    cpu_status: this.getRndInteger(1,3),
                    process_status: this.getRndInteger(1,3),
                    disk_status: this.getRndInteger(1,3),
                    nic_status: this.getRndInteger(1,3),
                    mem_status: this.getRndInteger(1,3),
                    conn_system_info: [
                    {
                    conn_system_name: "WAS#1",
                    conn_system_status: this.getRndInteger(0,1)
                    },
                    {
                    conn_system_name: "WAS#2",
                    conn_system_status: this.getRndInteger(0,1)
                    },
                    {
                    conn_system_name: "Collector#1",
                    conn_system_status: this.getRndInteger(0,1)
                    },
                    {
                    conn_system_name: "Collector#2",
                    conn_system_status: this.getRndInteger(0,1)
                    },
                    {
                    conn_system_name: "WEB#1",
                    conn_system_status: this.getRndInteger(0,1)
                    },
                    {
                    conn_system_name: "WEB#2",
                    conn_system_status: this.getRndInteger(0,1)
                    },
                    {
                    conn_system_name: "DB#1",
                    conn_system_status: this.getRndInteger(0,1)
                    },
                    {
                    conn_system_name: "DB#2",
                    conn_system_status: this.getRndInteger(0,1)
                    },
                    {
                    conn_system_name: "E2E",
                    conn_system_status: this.getRndInteger(0,1)
                    }
                    ]
                }               
                

            ]
        }          
           return of(data);
       // return this.http.get(`${this.url}/hw.php`)
     }

     getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }


}