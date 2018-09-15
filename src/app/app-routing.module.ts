import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FooddetailComponent } from './fooddetail/fooddetail.component';
import { FoodgridComponent } from './foodgrid/foodgrid.component';
import { FoodlistComponent } from './foodlist/foodlist.component';
import { PolicyComponent } from './policy/policy.component';
import { TermsComponent } from './terms/terms.component';

const app_routes: Routes = [
  {path: 'loginorregister', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'abouts', component: AboutusComponent},
  {path: 'fooddetail', component: FooddetailComponent},
  {path: 'foodgrid', component: FoodgridComponent},
  {path: 'foodlist', component: FoodlistComponent},
  {path: 'policy', component: PolicyComponent},
  {path: 'terms', component: TermsComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(app_routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, HomeComponent, AboutusComponent, FooddetailComponent, FoodgridComponent, FoodlistComponent, PolicyComponent, TermsComponent];
