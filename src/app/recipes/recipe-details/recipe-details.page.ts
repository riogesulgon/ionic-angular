import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
})
export class RecipeDetailsPage implements OnInit {
  
  loadedRecipe: Recipe;

  constructor(private activateRoute: ActivatedRoute, private recipeService: RecipesService) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe( paramMap => {
      if(!paramMap.has('recipeId')) {
        return;
      }
      this.loadedRecipe = this.recipeService.getRecipe(paramMap.get('recipeId'));

    })
  }

}
