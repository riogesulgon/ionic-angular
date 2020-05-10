import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes:Recipe[] = [
    { 
      id: '1',
      title: "Kare-kare", 
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Kare-kare_oxtail_stew_1.jpg/800px-Kare-kare_oxtail_stew_1.jpg',
      ingredients: [ 'stewed meat', 'peanut sauce', 'vegetables']
    },
    {
      id: '2',
      title: 'Pinapaitan',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Bicol_Express.jpg',
      ingredients: ['chilli', 'coconut milk', 'pork meat']
    }
  ]

  constructor() { }

  getAllRecipes():Recipe[] {
    return [...this.recipes];
  }

  getRecipe(recipeId: string):Recipe {
    return {...this.recipes.find( recipe => { 
       return (recipe.id === recipeId); }
    )};
  }

}
