import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Data } from '../data.model';
import { DataService } from '../data.service';


@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit, OnDestroy {
  datas: Data[];
  subscription: Subscription;

  constructor(private dataService:DataService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.dataService.datasChanged
      .subscribe(
        (datas: Data[]) => {
          this.datas = datas;
        }
      );
    this.datas = this.dataService.getDatas();
  }

  onNewData(){
    this.router.navigate(['new'],{relativeTo:this.route})
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  }
