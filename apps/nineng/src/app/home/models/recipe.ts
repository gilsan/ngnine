
export interface IRecipe {
  image_url: string;
  publisher: string;
  publisher_url: string;
  recipe_id: string;
  social_rank: number;
  source_url: string;
  title: string;
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

export interface Ingredient {
  title: string;
  author: string;
  img: string;
  url: string;
  ingredients: string[];
}

