import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroListComponent } from './hero-list.component';
import { CrisisListComponent } from './crisis-list.component';
import { PageNotFoundComponent } from './not-found.component';
import { DashboardComponent } from './dashboard.component';
import { HeroService } from './hero.service';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'heroes', component: HeroListComponent },
  { path: '', redirectTo: '/dashboard', pathMatch:'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes) 
    ],
  declarations: [
     AppComponent,
     HeroListComponent,
     HeroDetailComponent,
     CrisisListComponent,
     PageNotFoundComponent,
     DashboardComponent
   ],
   providers: [
     HeroService,
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
