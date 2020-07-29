
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
