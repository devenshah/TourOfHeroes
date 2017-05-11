import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';

import { HeroDetailComponent } from './hero-detail.component';
import { HeroListComponent } from './hero-list.component';
import { CrisisListComponent } from './crisis-list.component';
import { PageNotFoundComponent } from './not-found.component';
import { DashboardComponent } from './dashboard.component';

import { HeroService } from './hero.service';


@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroListComponent,
    CrisisListComponent,
    PageNotFoundComponent,
    DashboardComponent,
  ],
  providers: [
    HeroService,
  ],
  bootstrap: [ 
    AppComponent 
  ]
})
export class AppModule { }
