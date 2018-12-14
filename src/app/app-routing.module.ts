import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataComponent } from './data/data.component';
import { ArsipListComponent } from './arsip-list/arsip-list.component';
import { DataStartComponent } from './data/data-start/data-start.component';
import { DataDetailComponent } from './data/data-detail/data-detail.component';
import { DataEditComponent } from './data/data-edit/data-edit.component';
import { HomeComponent } from './home/home.component';
// import { DataItemComponent } from './data/data-list/data-item/data-item.component';

const appRoutes : Routes =[
    { path : '', redirectTo:'/data',pathMatch:'full'},
    { path : 'datas', component:DataComponent,children:[
        {path : '',component:DataStartComponent},
        {path : 'new',component:DataEditComponent},
        {path : ':id', component:DataDetailComponent},
        {path : ':id/edit',component:DataEditComponent}
    ]},
    { path : 'arsip-list',component:ArsipListComponent},
    { path : 'home', component:HomeComponent },
];

@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports : [RouterModule]
})

export class AppRoutingModule{}