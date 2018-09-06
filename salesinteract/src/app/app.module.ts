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
import { FileItemComponent } from './ui/file-item/file-item.component';
import { ProductItemComponent } from './ui/product-item/product-item.component';
import { SidebarComponent } from './ui/sidebar/sidebar.component';
import { NewTaskTabComponent } from './components/new-task-tab/new-task-tab.component';
import { NewFileTabComponent } from './components/new-file-tab/new-file-tab.component';
import { NewMessageTabComponent } from './components/new-message-tab/new-message-tab.component';

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
    CompanyInformationComponent,
    FileItemComponent,
    ProductItemComponent,
    SidebarComponent,
    NewTaskTabComponent,
    NewFileTabComponent,
    NewMessageTabComponent
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
