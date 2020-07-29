import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRecipes } from './models/recipe';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  // const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=pizza`);
  url = 'https://forkify-api.herokuapp.com/api/search?q=';
  constructor(
    private http: HttpClient,
  ) { }

  getData(query: string): Observable<IRecipes> {
    return this.http.get<IRecipes>(`${this.url}${query}`);
  }

  getRecipes(id: number) {
    //  const res = await axios(`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`);
    return this.http.get(`https://forkify-api.herokuapp.com/api/get?rId=${id}`);
  }

}
