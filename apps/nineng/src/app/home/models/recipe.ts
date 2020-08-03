
export interface IRecipe {
  image_url: string;
  publisher: string;
  publisher_url: string;
  recipe_id: string;
  social_rank: number;
  source_url: string;
  title: string;
}

export interface ILikeRecipes {
  image_url: string;
  publisher: string;
  publisher_url: string;
  recipe_id: string;
  social_rank: number;
  source_url: string;
  title: string;
  ingredients: IObjIng[];
  isLinked: boolean;
}

export interface IRecipes {
  count: number;
  recipes: IRecipe[];
}

export interface IObjIng {
  count: number;
  unit: string;
  ingredient: string[];
}

export interface IngredientList {
  image_url: string;
  publisher: string;
  publisher_url: string;
  recipe_id: string;
  social_rank: number;
  source_url: string;
  title: string;
  ingredients: IObjIng[];
  isLinked?: boolean;
}

export interface Ingredient {
  // title: string;
  // author: string;
  // img: string;
  // url: string;
  image_url: string;
  publisher: string;
  publisher_url: string;
  recipe_id: string;
  social_rank: number;
  source_url: string;
  title: string;
  ingredients: string[];
  isLinked?: boolean;
}


