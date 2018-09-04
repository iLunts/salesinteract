import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AsideComponent } from './ui/aside/aside.component';
import { TopMenuComponent } from './ui/top-menu/top-menu.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RoutingModule } from './routing.module';
import { ContactListPageComponent } from './pages/contact-list-page/contact-list-page.component';

// Bootstrap
import { TabsModule, PaginationModule } from 'ngx-bootstrap';
import { TaskItemComponent } from './ui/task-item/task-item.component';
import { ContactInformationComponent } from './ui/contact-information/contact-information.component';
import { ManagerInformationComponent } from './ui/manager-information/manager-information.component';
import { CompanyInformationComponent } from './ui/company-information/company-information.component';

@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    TopMenuComponent,
    HomePageComponent,
    ContactListPageComponent,
    TaskItemComponent,
    ContactInformationComponent,
    ManagerInformationComponent,
    CompanyInformationComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
