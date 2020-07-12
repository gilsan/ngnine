import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Url } from '../../../server.url';
import { Exercise, ExerciseList } from '../../core/models';


@Injectable()
export class WorkoutBuilderService {

  constructor(
    public http: HttpClient,
  ) { }

  getExerciseByName(name: string): Observable<Exercise> {
    const params = new HttpParams()
      .set('name', `${name}`);
    return this.http.get<Exercise>(`${Url}/fitness/getExerciseByName`, { params });

  }


}
