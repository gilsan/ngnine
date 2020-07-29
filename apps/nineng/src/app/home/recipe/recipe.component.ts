import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { init } from 'echarts';
import { Observable, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SubSink } from 'subsink';
import { HomeService } from '../home.service';
import { IRecipe, IRecipes } from '../models/recipe';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent implements OnInit, OnDestroy {

  likesList = [];
  recipes: IRecipe[];
  recipes$: Observable<IRecipes>;
  private subs = new SubSink();
  count = 0;

  form: FormGroup;

  constructor(
    private service: HomeService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.recipes$ = this.service.getData('pizza');

    this.subs.sink = this.recipes$.subscribe((data) => {
      this.count = data.count;
      this.recipes = data.recipes;
      console.log('[count]-[recipes] ', this.count, this.recipes);
    });

  }

  init() {
    this.form = this.fb.group({
      search: ['pizza'],
    });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  limitRecipeTitle(title: string) {
    const newTitle = [];
    const limit = 10;
    if (title.length > limit) {
      title.split(' ').reduce((acc, cur) => {
        if (acc + cur.length < limit) {
          newTitle.push(cur);
        }
        return acc + cur.length;
      }, 0);
      return `${newTitle.join(' ')}...`;
    }
    return newTitle;
  }

  getRecipe(recipe: IRecipe) {
    console.log(recipe);
    this.service.getRecipes(parseInt(recipe.recipe_id, 0))
      .subscribe((data) => {
        console.log(data);
      });
  }

  searchRecipe() {
    console.log('searchRecipe');
  }

}
