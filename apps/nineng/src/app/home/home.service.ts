import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRecipes, Ingredient } from './models/recipe';
import { map } from 'rxjs/operators';

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

  getRecipes(id: number): Observable<Ingredient> {
    //  const res = await axios(`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`);
    return this.http.get<{ recipe: Ingredient }>(`https://forkify-api.herokuapp.com/api/get?rId=${id}`)
      .pipe(
        map((data) => data.recipe),
      );
  }

}
