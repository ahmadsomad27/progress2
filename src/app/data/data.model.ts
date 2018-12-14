import { Ingredient } from "../shared/ingredient.model";

export class Data{
    public name : string;
    public description : string;
    public imagePath : string;
    // public ingredient:Ingredient[];
    public ingredients:Ingredient[];

    constructor(name:string,desc:string,imagePath:string,ingredients:Ingredient[]){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        // this.ingredient=ingredient;
        this.ingredients=ingredients;
    }
}