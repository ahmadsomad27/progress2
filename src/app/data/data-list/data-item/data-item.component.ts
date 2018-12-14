import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Data } from '../../data.model';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-data-item',
  templateUrl: './data-item.component.html',
  styleUrls: ['./data-item.component.css']
})
export class DataItemComponent implements OnInit {
  @Input() data:Data;
  @Input() index:number;
  // @Output() recipeSelected = new EventEmitter<void>();

  // constructor(private recipeService:RecipeService) { }

  ngOnInit() {
  }

  // onSelected(){
    // this.recipeSelected.emit();
    // this.recipeService.recipeSelected.emit(this.recipe);
  // }
}
