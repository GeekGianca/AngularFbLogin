import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FoodlistComponent } from './foodlist/foodlist.component';
import { FoodgridComponent } from './foodgrid/foodgrid.component';
import { FooddetailComponent } from './fooddetail/fooddetail.component';
import { TermsComponent } from './terms/terms.component';
import { PolicyComponent } from './policy/policy.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    routingComponents,
    HomeComponent,
    AboutusComponent,
    FoodlistComponent,
    FoodgridComponent,
    FooddetailComponent,
    TermsComponent,
    PolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
