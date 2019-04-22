import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DemoMaterialModule } from './material-module';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponent } from './item-list/item-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ItemSearchPipe } from './item-list/item-search.pipe';
import { FormsModule } from '@angular/forms';


import { DataService } from './services/data.service';
import { ShareDataService } from './services/shared.data.service';

// Following are icons import from fonts awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart, faPlus, faEdit } from '@fortawesome/free-solid-svg-icons';

const appRoutes: Routes = [
  { path: 'main', component: ItemListComponent },
  { path: 'cart', component: ShoppingCartComponent },
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    ShoppingCartComponent,
    ItemSearchPipe
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [DataService, ShareDataService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    // Add an icon to the library for convenient access in other components
    library.add(faShoppingCart);
    library.add(faPlus);
    library.add(faEdit);
  }
}
