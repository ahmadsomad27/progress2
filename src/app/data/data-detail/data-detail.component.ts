import { Component, OnInit, Input } from '@angular/core';
import { Data } from '../data.model';
import { DataService } from '../data.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-data-detail',
  templateUrl: './data-detail.component.html',
  styleUrls: ['./data-detail.component.css']
})
export class DataDetailComponent implements OnInit {
  // @Input() data:Data;
  data:Data;
  id:number;

  constructor(private dataService:DataService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
    (params:Params)=>{
      this.id=+params['id'];
      this.data=this.dataService.getData(this.id);
    }
  )
  }

  //membuat method onAddArsipList
  onAddArsipList(){
    this.dataService.addIngredientsToArsipList(this.data.ingredients);
  }

  onEditData(){
    this.router.navigate(['edit'],{relativeTo:this.route});
  }

  onDeleteData(){
    this.dataService.deleteData(this.id);
    this.router.navigate(['/datas']);
  }
}
