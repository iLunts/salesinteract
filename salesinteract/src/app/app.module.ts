import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AsideComponent } from './ui/aside/aside.component';
import { TopMenuComponent } from './ui/top-menu/top-menu.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    TopMenuComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
