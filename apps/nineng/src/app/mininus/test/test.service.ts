import { Observable, Subject, of } from 'rxjs';
import { first, map } from 'rxjs/operators';

import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../models/nav-item';
import { IUser } from './test.model';


@Injectable()
export class TestService {

    url = "https://221.141.251.58/opensys";

    constructor(
        private afs: AngularFirestore,
        private http: HttpClient
    ) { }

    testHttps() {
        return this.http.get(`${this.url}/rm.php`);
    }

    getAws() {
        //   https://5w5qzxqoci.execute-api.ap-northeast-2.amazonaws.com/dev
        const url = 'https://vwzu5tm6ha.execute-api.ap-northeast-2.amazonaws.com/dev/data-post';
        return this.http.post(`${url}`, {
            age: 19,
            height: 19,
            income: 2000

        });
    }

    fetchAws() {
        const url = 'https://xsh5pe4fw8.execute-api.ap-northeast-2.amazonaws.com/dev/fetch-data';
        return this.http.get(`${url}`);
    }

    storeAws() {
        const url = 'https://mxpkd321oi.execute-api.ap-northeast-2.amazonaws.com/dev/store-data';
        return this.http.post(`${url}`, {});
    }

    deleteAws() {
        const url = 'https://vwzu5tm6ha.execute-api.ap-northeast-2.amazonaws.com/dev/data-post';
        return this.http.delete(`${url}/all`);

    }

    postAws(user: IUser) {
        const url = 'https://5w5qzxqoci.execute-api.ap-northeast-2.amazonaws.com/dev/post-data';
        return this.http.post(`${url}`, { user });
    }

    postUser() {
        const url = 'https://3fax4x59j1.execute-api.ap-northeast-2.amazonaws.com/dev/products';
        return this.http.post(`${url}`, { id: "esde56", productName: "Angular 강좌" });
    }

    getProducts() {
        const url = 'https://3fax4x59j1.execute-api.ap-northeast-2.amazonaws.com/dev/products';
        return this.http.get(`${url}`);
    }

    getProduct() {
        const url = 'https://3fax4x59j1.execute-api.ap-northeast-2.amazonaws.com/dev/products/test123';
        return this.http.get(`${url}`);
    }

    updateProduct() {
        const headers = new HttpHeaders()
            .set("Content-Type", "application/json");

        const url = ' https://3fax4x59j1.execute-api.ap-northeast-2.amazonaws.com/dev/products/test123';
        return this.http.put(`${url}`, { id: 'test123', productName: 'angular' }, { headers });
    }

    /*****
     *
      exports.handler =  (event, context, callback) => {
     callback(null, {message: '안녕하세요. AWS 람다 입니다.'} )
  };
  
     */

    // getCities(): Observable<Item[]> {
    //     return  this.afs.collection('cities', ref=>  
    //               ref.where('userId','==','ssnqs3D247OXgfntjDca2yVi8r13'))
    //              .snapshotChanges()
    //              .pipe(
    //                  map(snaps => snaps.map( snap => {
    //                      return  <Item> {
    //                          id: snap.payload.doc.id,
    //                          ...snap.payload.doc.data()
    //                      }
    //                  }),
    //                  first() 
    //                  )
    //              );
    // }

    // getAlarm() {
    //     return this.http.get(`${this.url}/alarm.php`);
    //  }

    //  getSystem() {
    //      return this.http.get(`${this.url}/rm.php`)
    //  }
    getAlarm() {
        const data = {
            resultCode: "SUCCESS",
            data: [
                {
                    dc_id: 'dc0',
                    dc_name: '우면',
                    today_alarm_cirtical: this.getRndInteger(80, 100),
                    today_alarm_major: this.getRndInteger(40, 70),
                    today_alarm_minor: this.getRndInteger(1, 39),
                    top_no: 1,
                    yesterday_alarm_cirtical: this.getRndInteger(80, 100),
                    yesterday_alarm_major: this.getRndInteger(40, 70),
                    yesterday_alarm_minor: this.getRndInteger(1, 39),
                    week_alarm_cirtical: this.getRndInteger(80, 100),
                    week_alarm_major: this.getRndInteger(40, 70),
                    week_alarm_minor: this.getRndInteger(1, 39),
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
                    cpu_usage: this.getRndInteger(20, 90),
                    mem_usage: this.getRndInteger(10, 100),
                    num_directory: this.getRndInteger(1, 3),
                    directory_info: [
                        {
                            directory_name: "/etc/directory3",
                            directory_usage: this.getRndInteger(10, 80)
                        },
                        {
                            directory_name: "/etc/directory1",
                            directory_usage: this.getRndInteger(10, 80)
                        },
                        {
                            directory_name: "/etc/directory2",
                            directory_usage: this.getRndInteger(10, 80)
                        }
                    ],
                    num_nic: "1",
                    nic_info: [
                        {
                            nic_name: "nic1",
                            nic_status: this.getRndInteger(0, 1)
                        }
                    ],
                    num_process: this.getRndInteger(1, 4),
                    process_info: [
                        {
                            process_name: "process3",
                            process_status: this.getRndInteger(0, 1)
                        }
                    ]
                },
                {
                    system_id: "2",
                    system_name: "WAS#2",
                    cpu_usage: this.getRndInteger(20, 90),
                    mem_usage: this.getRndInteger(10, 100),
                    num_directory: this.getRndInteger(1, 3),
                    directory_info: [
                        {
                            directory_name: "/etc/directory3",
                            directory_usage: this.getRndInteger(10, 80)
                        },
                        {
                            directory_name: "/etc/directory1",
                            directory_usage: this.getRndInteger(10, 80)
                        },
                        {
                            directory_name: "/etc/directory2",
                            directory_usage: this.getRndInteger(10, 80)
                        },
                        {
                            directory_name: "/etc/directory2",
                            directory_usage: this.getRndInteger(10, 80)
                        }
                    ],
                    num_nic: "2",
                    nic_info: [
                        {
                            nic_name: "nic1",
                            nic_status: this.getRndInteger(0, 1)
                        },
                        {
                            nic_name: "nic2",
                            nic_status: this.getRndInteger(0, 1)
                        },
                        {
                            nic_name: "nic3",
                            nic_status: this.getRndInteger(0, 1)
                        }
                    ],
                    num_process: this.getRndInteger(1, 3),
                    process_info: [
                        {
                            process_name: "process3",
                            process_status: this.getRndInteger(0, 1)
                        },
                        {
                            process_name: "process3",
                            process_status: this.getRndInteger(0, 1)
                        },
                        {
                            process_name: "process4",
                            process_status: this.getRndInteger(0, 1)
                        },
                        {
                            process_name: "process4",
                            process_status: this.getRndInteger(0, 1)
                        }
                    ]
                },
                {
                    system_id: "3",
                    system_name: "Collector#1",
                    cpu_usage: this.getRndInteger(20, 90),
                    mem_usage: this.getRndInteger(10, 100),
                    num_directory: this.getRndInteger(1, 3),
                    directory_info: [
                        {
                            directory_name: "/etc/directory3",
                            directory_usage: this.getRndInteger(10, 80)
                        },
                        {
                            directory_name: "/etc/directory1",
                            directory_usage: this.getRndInteger(10, 80)
                        },
                        {
                            directory_name: "/etc/directory2",
                            directory_usage: this.getRndInteger(10, 80)
                        },
                        {
                            directory_name: "/etc/directory2",
                            directory_usage: this.getRndInteger(10, 80)
                        },
                        {
                            directory_name: "/etc/directory3",
                            directory_usage: this.getRndInteger(10, 80)
                        },
                        {
                            directory_name: "/etc/directory2",
                            directory_usage: this.getRndInteger(10, 80)
                        },
                        {
                            directory_name: "/etc/directory1",
                            directory_usage: this.getRndInteger(10, 80)
                        }
                    ],
                    num_nic: "1",
                    nic_info: [
                        {
                            nic_name: "nic1",
                            nic_status: this.getRndInteger(0, 1)
                        },
                        {
                            nic_name: "nic2",
                            nic_status: this.getRndInteger(0, 1)
                        },
                        {
                            nic_name: "nic3",
                            nic_status: this.getRndInteger(0, 1)
                        },
                        {
                            nic_name: "nic2",
                            nic_status: this.getRndInteger(0, 1)
                        }
                    ],
                    num_process: "1",
                    process_info: [
                        {
                            process_name: "process3",
                            process_status: this.getRndInteger(0, 1)
                        },
                        {
                            process_name: "process3",
                            process_status: this.getRndInteger(0, 1)
                        },
                        {
                            process_name: "process4",
                            process_status: this.getRndInteger(0, 1)
                        },
                        {
                            process_name: "process4",
                            process_status: this.getRndInteger(0, 1)
                        },
                        {
                            process_name: "process3",
                            process_status: this.getRndInteger(0, 1)
                        }
                    ]
                },
                {
                    system_id: "4",
                    system_name: "Collector#2",
                    cpu_usage: this.getRndInteger(20, 90),
                    mem_usage: this.getRndInteger(10, 100),
                    num_directory: this.getRndInteger(1, 3),
                    directory_info: [
                        {
                            directory_name: "/etc/directory3",
                            directory_usage: this.getRndInteger(10, 80)
                        },
                        {
                            directory_name: "/etc/directory1",
                            directory_usage: this.getRndInteger(10, 80)
                        },
                        {
                            directory_name: "/etc/directory2",
                            directory_usage: this.getRndInteger(10, 80)
                        },
                        {
                            directory_name: "/etc/directory2",
                            directory_usage: this.getRndInteger(10, 80)
                        },
                        {
                            directory_name: "/etc/directory3",
                            directory_usage: this.getRndInteger(10, 80)
                        },
                        {
                            directory_name: "/etc/directory2",
                            directory_usage: this.getRndInteger(10, 80)
                        },
                        {
                            directory_name: "/etc/directory1",
                            directory_usage: this.getRndInteger(10, 80)
                        },
                        {
                            directory_name: "/etc/directory1",
                            directory_usage: this.getRndInteger(10, 80)
                        },
                        {
                            directory_name: "/etc/directory2",
                            directory_usage: this.getRndInteger(10, 80)
                        }
                    ],
                    num_nic: "2",
                    nic_info: [
                        {
                            nic_name: "nic1",
                            nic_status: this.getRndInteger(0, 1)
                        },
                        {
                            nic_name: "nic2",
                            nic_status: this.getRndInteger(0, 1)
                        },
                        {
                            nic_name: "nic3",
                            nic_status: this.getRndInteger(0, 1)
                        },
                        {
                            nic_name: "nic2",
                            nic_status: this.getRndInteger(0, 1)
                        },
                        {
                            nic_name: "nic2",
                            nic_status: this.getRndInteger(0, 1)
                        },
                        {
                            nic_name: "nic4",
                            nic_status: this.getRndInteger(0, 1)
                        }
                    ],
                    num_process: "1",
                    process_info: [
                        {
                            process_name: "process3",
                            process_status: this.getRndInteger(0, 1)
                        },
                        {
                            process_name: "process3",
                            process_status: this.getRndInteger(0, 1)
                        },
                        {
                            process_name: "process4",
                            process_status: this.getRndInteger(0, 1)
                        },
                        {
                            process_name: "process4",
                            process_status: this.getRndInteger(0, 1)
                        },
                        {
                            process_name: "process3",
                            process_status: this.getRndInteger(0, 1)
                        },
                        {
                            process_name: "process1",
                            process_status: this.getRndInteger(0, 1)
                        }
                    ]
                },
                {
                    system_id: "5",
                    system_name: "WEB#1",
                    cpu_usage: this.getRndInteger(20, 90),
                    mem_usage: this.getRndInteger(10, 100),
                    num_directory: this.getRndInteger(1, 3),
                    directory_info: [
                        {
                            directory_name: "/etc/directory3",
                            directory_usage: this.getRndInteger(10, 80)
                        },
                        {
                            directory_name: "/etc/directory1",
                            directory_usage: this.getRndInteger(10, 80)
                        },
                        {
                            directory_name: "/etc/directory2",
                            directory_usage: this.getRndInteger(10, 80)
                        },
                        {
                            directory_name: "/etc/directory2",
                            directory_usage: this.getRndInteger(10, 80)
                        },
                        {
                            directory_name: "/etc/directory3",
                            directory_usage: this.getRndInteger(10, 80)
                        },
                        {
                            directory_name: "/etc/directory2",
                            directory_usage: this.getRndInteger(10, 80)
                        },
                        {
                            directory_name: "/etc/directory1",
                            directory_usage: this.getRndInteger(10, 80)
                        },
                        {
                            directory_name: "/etc/directory1",
                            directory_usage: this.getRndInteger(10, 80)
                        },
                        {
                            directory_name: "/etc/directory2",
                            directory_usage: this.getRndInteger(10, 80)
                        },
                        {
                            directory_name: "/etc/directory2",
                            directory_usage: this.getRndInteger(10, 80)
                        },
                        {
                            directory_name: "/etc/directory2",
                            directory_usage: this.getRndInteger(10, 80)
                        },
                        {
                            directory_name: "/etc/directory1",
                            directory_usage: this.getRndInteger(10, 80)
                        }
                    ],
                    num_nic: "2",
                    nic_info: [
                        {
                            nic_name: "nic1",
                            nic_status: this.getRndInteger(0, 1)
                        },
                        {
                            nic_name: "nic2",
                            nic_status: this.getRndInteger(0, 1)
                        },
                        {
                            nic_name: "nic3",
                            nic_status: this.getRndInteger(0, 1)
                        },
                        {
                            nic_name: "nic2",
                            nic_status: this.getRndInteger(0, 1)
                        },
                        {
                            nic_name: "nic2",
                            nic_status: this.getRndInteger(0, 1)
                        },
                        {
                            nic_name: "nic4",
                            nic_status: this.getRndInteger(0, 1)
                        },
                        {
                            nic_name: "nic2",
                            nic_status: this.getRndInteger(0, 1)
                        },
                        {
                            nic_name: "nic3",
                            nic_status: this.getRndInteger(0, 1)
                        }
                    ],
                    num_process: this.getRndInteger(1, 3),
                    process_info: [
                        {
                            process_name: "process3",
                            process_status: this.getRndInteger(0, 1)
                        },
                        {
                            process_name: "process3",
                            process_status: this.getRndInteger(0, 1)
                        },
                        {
                            process_name: "process4",
                            process_status: this.getRndInteger(0, 1)
                        },
                        {
                            process_name: "process4",
                            process_status: this.getRndInteger(0, 1)
                        },
                        {
                            process_name: "process3",
                            process_status: this.getRndInteger(0, 1)
                        },
                        {
                            process_name: "process1",
                            process_status: "0"
                        },
                        {
                            process_name: "process3",
                            process_status: this.getRndInteger(0, 1)
                        }
                    ]
                },
                {
                    system_id: "6",
                    system_name: "WEB#2",
                    cpu_usage: this.getRndInteger(20, 90),
                    mem_usage: this.getRndInteger(10, 100),
                    num_directory: this.getRndInteger(1, 3),
                    directory_info: [
                        {
                            directory_name: "/etc/directory3",
                            directory_usage: this.getRndInteger(10, 80)
                        },
                        {
                            directory_name: "/etc/directory1",
                            directory_usage: this.getRndInteger(10, 80)
                        },
                        {
                            directory_name: "/etc/directory2",
                            directory_usage: this.getRndInteger(10, 80)
                        },
                        {
                            directory_name: "/etc/directory2",
                            directory_usage: this.getRndInteger(10, 80)
                        },
                        {
                            directory_name: "/etc/directory3",
                            directory_usage: this.getRndInteger(10, 80)
                        },
                        {
                            directory_name: "/etc/directory2",
                            directory_usage: this.getRndInteger(10, 80)
                        },
                        {
                            directory_name: "/etc/directory1",
                            directory_usage: this.getRndInteger(10, 80)
                        },
                        {
                            directory_name: "/etc/directory1",
                            directory_usage: this.getRndInteger(10, 80)
                        },
                        {
                            directory_name: "/etc/directory2",
                            directory_usage: this.getRndInteger(10, 80)
                        },
                        {
                            directory_name: "/etc/directory2",
                            directory_usage: this.getRndInteger(10, 80)
                        },
                        {
                            directory_name: "/etc/directory2",
                            directory_usage: this.getRndInteger(10, 80)
                        },
                        {
                            directory_name: "/etc/directory1",
                            directory_usage: this.getRndInteger(10, 80)
                        },
                        {
                            directory_name: "/etc/directory2",
                            directory_usage: this.getRndInteger(10, 80)
                        },
                        {
                            directory_name: "/etc/directory1",
                            directory_usage: this.getRndInteger(10, 80)
                        }
                    ],
                    num_nic: this.getRndInteger(1, 3),
                    nic_info: [
                        {
                            nic_name: "nic1",
                            nic_status: this.getRndInteger(0, 1)
                        },
                        {
                            nic_name: "nic2",
                            nic_status: this.getRndInteger(0, 1)
                        },
                        {
                            nic_name: "nic3",
                            nic_status: this.getRndInteger(0, 1)
                        },
                        {
                            nic_name: "nic2",
                            nic_status: this.getRndInteger(0, 1)
                        },
                        {
                            nic_name: "nic2",
                            nic_status: this.getRndInteger(0, 1)
                        },
                        {
                            nic_name: "nic4",
                            nic_status: this.getRndInteger(0, 1)
                        },
                        {
                            nic_name: "nic2",
                            nic_status: this.getRndInteger(0, 1)
                        },
                        {
                            nic_name: "nic3",
                            nic_status: this.getRndInteger(0, 1)
                        },
                        {
                            nic_name: "nic4",
                            nic_status: this.getRndInteger(0, 1)
                        },
                        {
                            nic_name: "nic4",
                            nic_status: this.getRndInteger(0, 1)
                        },
                        {
                            nic_name: "nic1",
                            nic_status: this.getRndInteger(0, 1)
                        }
                    ],
                    num_process: this.getRndInteger(1, 3),
                    process_info: [
                        {
                            process_name: "process3",
                            process_status: this.getRndInteger(0, 1)
                        },
                        {
                            process_name: "process3",
                            process_status: this.getRndInteger(0, 1)
                        },
                        {
                            process_name: "process4",
                            process_status: this.getRndInteger(0, 1)
                        },
                        {
                            process_name: "process4",
                            process_status: this.getRndInteger(0, 1)
                        },
                        {
                            process_name: "process3",
                            process_status: this.getRndInteger(0, 1)
                        },
                        {
                            process_name: "process1",
                            process_status: this.getRndInteger(0, 1)
                        },
                        {
                            process_name: "process3",
                            process_status: this.getRndInteger(0, 1)
                        },
                        {
                            process_name: "process3",
                            process_status: this.getRndInteger(0, 1)
                        },
                        {
                            process_name: "process4",
                            process_status: this.getRndInteger(0, 1)
                        },
                        {
                            process_name: "process2",
                            process_status: this.getRndInteger(0, 1)
                        }
                    ]
                },
                {
                    system_id: "7",
                    system_name: "DB#1",
                    cpu_usage: this.getRndInteger(20, 90),
                    mem_usage: this.getRndInteger(10, 100),
                    num_directory: this.getRndInteger(1, 3),
                    directory_info: [
                        {
                            directory_name: "/etc/directory3",
                            directory_usage: this.getRndInteger(0, 1)
                        },
                        {
                            directory_name: "/etc/directory1",
                            directory_usage: this.getRndInteger(0, 1)
                        },
                        {
                            directory_name: "/etc/directory2",
                            directory_usage: this.getRndInteger(0, 1)
                        },
                        {
                            directory_name: "/etc/directory2",
                            directory_usage: this.getRndInteger(0, 1)
                        },
                        {
                            directory_name: "/etc/directory3",
                            directory_usage: this.getRndInteger(0, 1)
                        },
                        {
                            directory_name: "/etc/directory2",
                            directory_usage: this.getRndInteger(0, 1)
                        },
                        {
                            directory_name: "/etc/directory1",
                            directory_usage: this.getRndInteger(0, 1)
                        },
                        {
                            directory_name: "/etc/directory1",
                            directory_usage: this.getRndInteger(0, 1)
                        },
                        {
                            directory_name: "/etc/directory2",
                            directory_usage: this.getRndInteger(0, 1)
                        },
                        {
                            directory_name: "/etc/directory2",
                            directory_usage: this.getRndInteger(0, 1)
                        },
                        {
                            directory_name: "/etc/directory2",
                            directory_usage: this.getRndInteger(0, 1)
                        },
                        {
                            directory_name: "/etc/directory1",
                            directory_usage: this.getRndInteger(0, 1)
                        },
                        {
                            directory_name: "/etc/directory2",
                            directory_usage: this.getRndInteger(0, 1)
                        },
                        {
                            directory_name: "/etc/directory1",
                            directory_usage: this.getRndInteger(0, 1)
                        },
                        {
                            directory_name: "/etc/directory1",
                            directory_usage: this.getRndInteger(0, 1)
                        },
                        {
                            directory_name: "/etc/directory4",
                            directory_usage: this.getRndInteger(0, 1)
                        }
                    ],
                    num_nic: this.getRndInteger(1, 3),
                    nic_info: [
                        {
                            nic_name: "nic1",
                            nic_status: this.getRndInteger(0, 1)
                        },
                        {
                            nic_name: "nic2",
                            nic_status: this.getRndInteger(0, 1)
                        },
                        {
                            nic_name: "nic3",
                            nic_status: this.getRndInteger(0, 1)
                        },
                        {
                            nic_name: "nic2",
                            nic_status: this.getRndInteger(0, 1)
                        },
                        {
                            nic_name: "nic2",
                            nic_status: this.getRndInteger(0, 1)
                        },
                        {
                            nic_name: "nic4",
                            nic_status: this.getRndInteger(0, 1)
                        },
                        {
                            nic_name: "nic2",
                            nic_status: this.getRndInteger(0, 1)
                        },
                        {
                            nic_name: "nic3",
                            nic_status: this.getRndInteger(0, 1)
                        },
                        {
                            nic_name: "nic4",
                            nic_status: this.getRndInteger(0, 1)
                        },
                        {
                            nic_name: "nic4",
                            nic_status: this.getRndInteger(0, 1)
                        },
                        {
                            nic_name: "nic1",
                            nic_status: this.getRndInteger(0, 1)
                        },
                        {
                            nic_name: "nic1",
                            nic_status: this.getRndInteger(0, 1)
                        }
                    ],
                    num_process: this.getRndInteger(1, 3),
                    process_info: [
                        {
                            process_name: "process3",
                            process_status: this.getRndInteger(0, 1)
                        },
                        {
                            process_name: "process3",
                            process_status: this.getRndInteger(0, 1)
                        },
                        {
                            process_name: "process4",
                            process_status: this.getRndInteger(0, 1)
                        },
                        {
                            process_name: "process4",
                            process_status: this.getRndInteger(0, 1)
                        },
                        {
                            process_name: "process3",
                            process_status: this.getRndInteger(0, 1)
                        },
                        {
                            process_name: "process1",
                            process_status: this.getRndInteger(0, 1)
                        },
                        {
                            process_name: "process3",
                            process_status: this.getRndInteger(0, 1)
                        },
                        {
                            process_name: "process3",
                            process_status: this.getRndInteger(0, 1)
                        },
                        {
                            process_name: "process4",
                            process_status: this.getRndInteger(0, 1)
                        },
                        {
                            process_name: "process2",
                            process_status: this.getRndInteger(0, 1)
                        },
                        {
                            process_name: "process4",
                            process_status: this.getRndInteger(0, 1)
                        },
                        {
                            process_name: "process4",
                            process_status: this.getRndInteger(0, 1)
                        }
                    ]
                },
                {
                    system_id: "8",
                    system_name: "DB#2",
                    cpu_usage: this.getRndInteger(20, 90),
                    mem_usage: this.getRndInteger(10, 100),
                    num_directory: this.getRndInteger(1, 3),
                    directory_info: [
                        {
                            directory_name: "/etc/directory3",
                            directory_usage: this.getRndInteger(10, 80)
                        },
                        {
                            directory_name: "/etc/directory1",
                            directory_usage: this.getRndInteger(10, 80)
                        },
                        {
                            directory_name: "/etc/directory2",
                            directory_usage: this.getRndInteger(10, 80)
                        },
                        {
                            directory_name: "/etc/directory2",
                            directory_usage: this.getRndInteger(10, 80)
                        },
                        {
                            directory_name: "/etc/directory3",
                            directory_usage: this.getRndInteger(10, 80)
                        },
                        {
                            directory_name: "/etc/directory2",
                            directory_usage: this.getRndInteger(10, 80)
                        },
                        {
                            directory_name: "/etc/directory1",
                            directory_usage: this.getRndInteger(10, 80)
                        },
                        {
                            directory_name: "/etc/directory1",
                            directory_usage: this.getRndInteger(10, 80)
                        },
                        {
                            directory_name: "/etc/directory2",
                            directory_usage: this.getRndInteger(10, 80)
                        },
                        {
                            directory_name: "/etc/directory2",
                            directory_usage: this.getRndInteger(10, 80)
                        },
                        {
                            directory_name: "/etc/directory2",
                            directory_usage: this.getRndInteger(10, 80)
                        },
                        {
                            directory_name: "/etc/directory1",
                            directory_usage: this.getRndInteger(10, 80)
                        },
                        {
                            directory_name: "/etc/directory2",
                            directory_usage: this.getRndInteger(10, 80)
                        },
                        {
                            directory_name: "/etc/directory1",
                            directory_usage: this.getRndInteger(10, 80)
                        },
                        {
                            directory_name: "/etc/directory1",
                            directory_usage: this.getRndInteger(10, 80)
                        },
                        {
                            directory_name: "/etc/directory4",
                            directory_usage: this.getRndInteger(10, 80)
                        },
                        {
                            directory_name: "/etc/directory4",
                            directory_usage: this.getRndInteger(10, 80)
                        }
                    ],
                    num_nic: this.getRndInteger(1, 3),
                    nic_info: [
                        {
                            nic_name: "nic1",
                            nic_status: this.getRndInteger(0, 1)
                        },
                        {
                            nic_name: "nic2",
                            nic_status: this.getRndInteger(0, 1)
                        },
                        {
                            nic_name: "nic3",
                            nic_status: this.getRndInteger(0, 1)
                        },
                        {
                            nic_name: "nic2",
                            nic_status: this.getRndInteger(0, 1)
                        },
                        {
                            nic_name: "nic2",
                            nic_status: this.getRndInteger(0, 1)
                        },
                        {
                            nic_name: "nic4",
                            nic_status: this.getRndInteger(0, 1)
                        },
                        {
                            nic_name: "nic2",
                            nic_status: this.getRndInteger(0, 1)
                        },
                        {
                            nic_name: "nic3",
                            nic_status: this.getRndInteger(0, 1)
                        },
                        {
                            nic_name: "nic4",
                            nic_status: this.getRndInteger(0, 1)
                        },
                        {
                            nic_name: "nic4",
                            nic_status: this.getRndInteger(0, 1)
                        },
                        {
                            nic_name: "nic1",
                            nic_status: this.getRndInteger(0, 1)
                        },
                        {
                            nic_name: "nic1",
                            nic_status: this.getRndInteger(0, 1)
                        },
                        {
                            nic_name: "nic1",
                            nic_status: this.getRndInteger(0, 1)
                        }
                    ],
                    num_process: this.getRndInteger(1, 3),
                    process_info: [
                        {
                            process_name: "process3",
                            process_status: this.getRndInteger(0, 1)
                        },
                        {
                            process_name: "process3",
                            process_status: this.getRndInteger(0, 1)
                        },
                        {
                            process_name: "process4",
                            process_status: this.getRndInteger(0, 1)
                        },
                        {
                            process_name: "process4",
                            process_status: this.getRndInteger(0, 1)
                        },
                        {
                            process_name: "process3",
                            process_status: "0"
                        },
                        {
                            process_name: "process1",
                            process_status: this.getRndInteger(0, 1)
                        },
                        {
                            process_name: "process3",
                            process_status: this.getRndInteger(0, 1)
                        },
                        {
                            process_name: "process3",
                            process_status: this.getRndInteger(0, 1)
                        },
                        {
                            process_name: "process4",
                            process_status: this.getRndInteger(0, 1)
                        },
                        {
                            process_name: "process2",
                            process_status: this.getRndInteger(0, 1)
                        },
                        {
                            process_name: "process4",
                            process_status: this.getRndInteger(0, 1)
                        },
                        {
                            process_name: "process4",
                            process_status: this.getRndInteger(0, 1)
                        },
                        {
                            process_name: "process1",
                            process_status: this.getRndInteger(0, 1)
                        },
                        {
                            process_name: "process2",
                            process_status: this.getRndInteger(0, 1)
                        },
                        {
                            process_name: "process2",
                            process_status: this.getRndInteger(0, 1)
                        }
                    ]
                }
            ]
        };

        return of(data);

        /******** */
    }

    getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }


}