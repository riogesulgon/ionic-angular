import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
})
export class RecipeDetailsPage implements OnInit {
  
  loadedRecipe: Recipe;

  constructor(
    private activateRoute: ActivatedRoute, 
    private recipeService: RecipesService,
    private router: Router, 
    private alertCtrl: AlertController) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe( paramMap => {
      if(!paramMap.has('recipeId')) {
        this.router.navigate(['/recipes']);
        return;
      }
      this.loadedRecipe = this.recipeService.getRecipe(paramMap.get('recipeId'));
    })
  }

  deleteRecipe() {
    this.alertCtrl.create({
      message: 'Do you really want to delete this recipe?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Ok',
          handler: () => {
            this.recipeService.deleteRecipe(this.loadedRecipe.id);
            this.router.navigate(['/recipes']);
          }
        }
      ]
    }).then( alert => alert.present());
  
    
  }

}
