import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Ingredient } from '../shared/ingredient.model';
import { ArsipListService } from './arsip-list.service';


@Component({
  selector: 'app-arsip-list',
  templateUrl: './arsip-list.component.html',
  styleUrls: ['./arsip-list.component.css']
})
export class ArsipListComponent implements OnInit, OnDestroy {
  ingredients:Ingredient[]
  private subscription: Subscription;

  constructor(private slsService:ArsipListService) { }

  ngOnInit() {
    this.ingredients=this.slsService.getIngredients();
    this.subscription = this.slsService.ingredientsChanged
    .subscribe(
      (ingredients:Ingredient[])=>{
        this.ingredients=ingredients;
      }
    );
  }

  onEditItem(index: number){
    this.slsService.startedEditing.next(index);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
