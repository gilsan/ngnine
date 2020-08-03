import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { init } from 'echarts';
import { Observable, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SubSink } from 'subsink';
import { HomeService } from '../home.service';
import { IRecipe, IRecipes, Ingredient, ILikeRecipes, IngredientList, IObjIng } from '../models/recipe';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent implements OnInit, OnDestroy {

  likesLists: ILikeRecipes[] = [];
  ingredientList: IngredientList;
  recipes: IRecipe[];
  subRecipes: IRecipe[];
  recipes$: Observable<IRecipes>;
  private subs = new SubSink();

  prev = false;
  next = false;
  currentPage = 1;
  totalPage = 0;

  form: FormGroup;
  resPerPage = 10;
  ingredient: Ingredient;

  constructor(
    private service: HomeService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.init();
    this.getInitData(this.form.value.search);

  }

  init() {
    this.form = this.fb.group({
      search: ['pizza'],
    });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  getInitData(query: string) {
    this.recipes$ = this.service.getData(query);

    this.subs.sink = this.recipes$.subscribe((data) => {
      this.recipes = data.recipes;
      this.renderResults();
      // console.log('[count]-[recipes] ', this.count, this.recipes);
    });
  }

  searchRecipe() {
    //  console.log(this.form.value.search);
    this.getInitData(this.form.value.search);
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

    this.service.getRecipes(parseInt(recipe.recipe_id, 0))
      .subscribe((data) => {

        const ingre = this.modifyIngredients(data.ingredients);
        // data.ingredients = [...ingre];
        // this.ingredient = data;
        this.ingredientList = { ...data, ingredients: ingre };
        //  console.log('[93][getRecipe][ingredient]', this.ingredient, this.ingredientList);
      });
  }

  modifyIngredients(ingredients: string[]) {
    // console.log('[][]', ingredients);
    const unitsLong = ['tablespoons', 'tablespoon', 'ounces', 'ounce', 'teaspoons', 'teaspoon', 'cups', 'pounds'];
    const unitsShort = ['tbsp', 'tbsp', 'oz', 'oz', 'tsp', 'tsp', 'cup', 'pound'];
    const units = [...unitsShort, 'kg', 'g'];

    const newIngreidents = ingredients.map((el) => {
      let ingredient = el.toLocaleLowerCase();
      unitsLong.forEach((unit, i) => {
        ingredient = ingredient.replace(unit, unitsShort[i]);
      });

      ingredient = ingredient.replace(/ *\([^)]*\) */g, ' ');
      // console.log('[][modifyIngredients] ', ingredient);

      const arrIng = ingredient.split(' ');
      const unitIndex = arrIng.findIndex((el2) => units.includes(el2));

      let objIng;
      if (unitIndex > -1) {
        const arrCount = arrIng.slice(0, unitIndex);
        let count;
        if (arrCount.length === 1) {
          // tslint:disable-next-line: no-eval
          count = eval(arrIng[0].replace('-', '+'));
        } else {
          // tslint:disable-next-line: no-eval
          count = eval(arrIng.slice(0, unitIndex).join('+'));
        }

        objIng = {
          count: parseInt(count, 10),
          unit: arrIng[unitIndex],
          ingredient: arrIng.slice(1).join(' '),
        };


      } else if (parseInt(arrIng[0], 10)) {
        objIng = {
          count: parseInt(arrIng[0], 10),
          unit: '',
          ingredient: arrIng.slice(1).join(' '),
        };
      } else if (unitIndex === -1) {
        objIng = {
          count: 1,
          unit: '',
          ingredient,
        };
      }
      return objIng;
    });

    return newIngreidents;
  }


  renderResults() {
    const start = (this.currentPage - 1) * this.resPerPage;
    const end = this.currentPage * this.resPerPage;

    this.subRecipes = this.recipes.slice(start, end);
    this.totalPage = Math.ceil(this.recipes.length / this.resPerPage);

    this.buttonShow();
  }

  buttonShow() {
    if (this.currentPage === 1) {
      this.prev = false;
      this.next = true;
    } else if (this.currentPage > 1 && this.currentPage < this.totalPage) {
      this.prev = true;
      this.next = true;
    } else if (this.currentPage === this.totalPage) {
      this.prev = true;
      this.next = false;
    }
  }

  goPrev() {
    this.currentPage--;
    if (this.currentPage <= 0) {
      this.currentPage = 1;
    }
    this.renderResults();
    this.buttonShow();
  }

  goNext() {
    this.currentPage++;
    if (this.currentPage > this.totalPage) {
      this.currentPage = this.totalPage;
    }
    this.renderResults();
    this.buttonShow();
  }

  addLike(ingredient: ILikeRecipes) {
    const recipe_id = parseInt(ingredient.recipe_id, 10);

    const index = this.recipes.findIndex(recipe => recipe.recipe_id === ingredient.recipe_id);
    const subIndex = this.subRecipes.findIndex(recipe => recipe.recipe_id === ingredient.recipe_id);
    const val = this.likesLists.find(item => item === ingredient);
    if (!val) {
      ingredient.isLinked = true;
      this.likesLists.push(ingredient);

      this.recipes.splice(index, 1);
      this.subRecipes.splice(subIndex, 1);
    }
  }

  isLinked(id: string) {

    if (this.likesLists.length) {
      const result = this.likesLists.findIndex(item => item.recipe_id === id);
      if (result !== -1) {
        return false;
      }
      return true;
    }
    return true;
  }

  likeItem(likeList: ILikeRecipes) {
    this.ingredientList = likeList;
    console.log('[225][][likeItem] ', this.ingredientList)
  }

}
