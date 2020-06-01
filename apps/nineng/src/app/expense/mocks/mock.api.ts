import {InMemoryDbService,RequestInfo} from 'angular-in-memory-web-api';

export class MockApi implements InMemoryDbService {
    createDb(): {} | import("rxjs").Observable<{}> | Promise<{}> {
        throw new Error("Method not implemented.");
    }

}