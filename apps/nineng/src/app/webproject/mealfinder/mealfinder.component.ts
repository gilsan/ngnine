import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// tslint:disable-next-line:ordered-imports
import { map, tap, take } from 'rxjs/operators';
import { MealsearchService } from '../services/mealsearch.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-mealfinder',
  templateUrl: './mealfinder.component.html',
  styleUrls: ['./mealfinder.component.scss'],
})
export class MealfinderComponent implements OnInit {

  search$: Observable<any>;
  single$: Observable<any>;
  searchResult = false;
  ingredients = [];

  term: string;

  constructor(
    private service: MealsearchService,
  ) { }

  ngOnInit(): void {
  }

  searchMeal(name: string) {
    this.term = name;
    this.search$ = this.service.searchMeal(name)
      .pipe(
        map((data) => data['meals']),
      );

    this.search$.subscribe((data) => {

      if (data.length) {
        this.searchResult = false;
      } else {
        this.searchResult = true;
      }
    });
  }

  random() {
    this.search$ = this.service.getRandomMeal()
      .pipe(
        map((data) => data['meals']),
      );
  }

  getMealById(id: number) {
    this.single$ = this.service.getMealById(id)
      .pipe(
        map((data) => data['meals']),
        take(1),
        tap((meal) => {
          for (let i = 1; i <= 20; i++) {
            if (meal[0][`strIngredient${i}`]) {
              this.ingredients.push(`
               ${meal[0][`strIngredient${i}`].trim()} - ${meal[0][`strMeasure${i}`].trim()}
               `);
            }
          }
        }),
      );
  }

}
