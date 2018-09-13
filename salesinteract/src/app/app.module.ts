import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AsideComponent } from './ui/aside/aside.component';
import { TopMenuComponent } from './ui/top-menu/top-menu.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RoutingModule } from './routing.module';
import { ContactListPageComponent } from './pages/contact-list-page/contact-list-page.component';

// Bootstrap
import { TabsModule, PaginationModule, ButtonsModule, ModalModule, PopoverModule, CollapseModule } from 'ngx-bootstrap';
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
import { NotPresentComponent } from './components/new-task-tab/not-present/not-present.component';
import { NotInterestedComponent } from './components/new-task-tab/not-interested/not-interested.component';
import { NotTimeComponent } from './components/new-task-tab/not-time/not-time.component';
import { VisitComponent } from './components/new-task-tab/visit/visit.component';
import { SalesDoNotHaveTimeComponent } from './components/new-task-tab/sales-do-not-have-time/sales-do-not-have-time.component';
import { SendInformationComponent } from './components/new-task-tab/send-information/send-information.component';
import { CallBackLaterComponent } from './components/new-task-tab/call-back-later/call-back-later.component';
import { ChooseExistingComponent } from './components/new-task-tab/send-information/choose-existing/choose-existing.component';
import { UploadNewFileComponent } from './components/new-task-tab/send-information/upload-new-file/upload-new-file.component';
import { QuotationComponent } from './components/new-task-tab/send-information/quotation/quotation.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { FullCalendarModule } from 'ng-fullcalendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { EventSesrvice } from './services/event.service';
import { StatisticsPageComponent } from './pages/statistics-page/statistics-page.component';

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
    NewMessageTabComponent,
    NotPresentComponent,
    NotInterestedComponent,
    NotTimeComponent,
    VisitComponent,
    SalesDoNotHaveTimeComponent,
    SendInformationComponent,
    CallBackLaterComponent,
    ChooseExistingComponent,
    UploadNewFileComponent,
    QuotationComponent,
    DashboardPageComponent,
    StatisticsPageComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
    ButtonsModule.forRoot(),
    ModalModule.forRoot(),
    PopoverModule.forRoot(),
    CollapseModule.forRoot(),
    FullCalendarModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [EventSesrvice],
  bootstrap: [AppComponent]
})
export class AppModule { }
