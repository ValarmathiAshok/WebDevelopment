import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductAlertsComponent } from './product-list/product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule,
   RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      {path : 'cart',component:CartComponent},
    ]) ],
  declarations: [ AppComponent, HelloComponent, ProductListComponent, TopBarComponent, ProductAlertsComponent, ProductDetailsComponent, CartComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
