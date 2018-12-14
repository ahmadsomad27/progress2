import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DataComponent } from './data/data.component';
import { ArsipListComponent } from './arsip-list/arsip-list.component';

//tambahkan code berikut
import {DataListComponent} from "./data/data-list/data-list.component";
import {DataDetailComponent} from "./data/data-detail/data-detail.component";

//tambahkan code berikut (2)
import { DataItemComponent } from './data/data-list/data-item/data-item.component';

//tambahkan code berikut (3)
import { ArsipEditComponent } from "./arsip-list/arsip-edit/arsip-edit.component";
import { DropdownDirective } from './shared/dropdown.directive';
import { ArsipListService } from './arsip-list/arsip-list.service';
import { DataStartComponent } from './data/data-start/data-start.component';
import { DataEditComponent } from './data/data-edit/data-edit.component';
import { DataService } from './data/data.service';
import { DataStorageService } from './shared/data-storage.service';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DataComponent,
    ArsipListComponent,

    //tambahkan code berikut
    DataListComponent,
    DataDetailComponent,

    //tambahkan code berikut (2)
    DataItemComponent,

    //tambahkan code berikut (3)
    ArsipEditComponent,
    DropdownDirective,
    DataStartComponent,
    DataEditComponent,
    LoginComponent,
    FooterComponent,
    HomeComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ArsipListService, DataService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
