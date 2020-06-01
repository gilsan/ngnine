import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MealsearchService {

  url = 'https://www.themealdb.com/api/json/v1/1';

  constructor(
    private http: HttpClient,
  ) { }

  searchMeal(item: string) {
    return this.http.get(`${this.url}/search.php?s=${item}`);
  }

  getMealById(mealID: number) {
    return this.http.get(`${this.url}/lookup.php?i=${mealID}`);
  }

  getRandomMeal() {
    return this.http.get(`${this.url}/random.php`);
  }

}
