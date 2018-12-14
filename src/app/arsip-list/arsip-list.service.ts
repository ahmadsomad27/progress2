// import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model"
import { Subject } from 'rxjs/Subject';

export class ArsipListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients:Ingredient[]=[
    new Ingredient('Perancangan Sistem Pembelajaran Jarak Jauh Berbasis WEB',2013),
    new Ingredient('Media Pembelajaran Teknologi DNA Rekombinan',2010),
  ];

getIngredients(){
  return this.ingredients.slice();
}
getIngredient(index: number){
  return this.ingredients[index];
}
addIngredient(ingredient:Ingredient){
  this.ingredients.push(ingredient);
  this.ingredientsChanged.next(this.ingredients.slice());
}
addIngredients(ingredients: Ingredient[]){
  this.ingredients.push(...ingredients);
  this.ingredientsChanged.next(this.ingredients.slice());
}
updateIngredient(index: number, newIngredient: Ingredient) {
  this.ingredients[index] = newIngredient;
  this.ingredientsChanged.next(this.ingredients.slice());
}
deleteIngredient(index: number){
  this.ingredients.splice(index, 1);
  this.ingredientsChanged.next(this.ingredients.slice());
}
}
