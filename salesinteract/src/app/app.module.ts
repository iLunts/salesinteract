import { FilterByMomentPipe } from './pipes/filterByMoment.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AsideComponent } from './ui/aside/aside.component';
import { TopMenuComponent } from './ui/top-menu/top-menu.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactListPageComponent } from './pages/contact-list-page/contact-list-page.component';
import { RouterModule} from '@angular/router';

// Bootstrap
import { TabsModule, PaginationModule, ButtonsModule, ModalModule, PopoverModule, CollapseModule, BsDropdownModule } from 'ngx-bootstrap';
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
import { EmptyComponent } from './ui/empty/empty.component';
import { NewCompanyComponent } from './ui/sidebar/new-company/new-company.component';
import { NewCompanyTabComponent } from './components/new-company-tab/new-company-tab.component';
import { NewContactTabComponent } from './components/new-contact-tab/new-contact-tab.component';
import { NewCompanyAdditionalAddressesComponent } from './components/new-company-tab/additional-addresses/additional-addresses.component';
import { NewCompanySocialOnlineComponent } from './components/new-company-tab/social-online/social-online.component';
import { NewCompanyDescriptionComponent } from './components/new-company-tab/description/description.component';
import { NewContactAccountManagerComponent } from './components/new-contact-tab/account-manager/account-manager.component';
import { NewContactDescriptionComponent } from './components/new-contact-tab/description/description.component';
import { NewContactSocialOnlineComponent } from './components/new-contact-tab/social-online/social-online.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { SurveyPageComponent } from './pages/settings-page/survey-page/survey-page.component';
import { SurveyEditPageComponent } from './pages/settings-page/survey-page/survey-edit-page/survey-edit-page.component';
import { DragulaModule } from 'ng2-dragula';
import { SurveyTextFieldComponent } from './ui/survey/survey-text-field/survey-text-field.component';
import { SurveyTextareaFieldComponent } from './ui/survey/survey-textarea-field/survey-textarea-field.component';
import { SurveyCheckboxFieldComponent } from './ui/survey/survey-checkbox-field/survey-checkbox-field.component';
import { SurveyRadioFieldComponent } from './ui/survey/survey-radio-field/survey-radio-field.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { SurveyMultiplyFieldComponent } from './ui/survey/survey-multiply-field/survey-multiply-field.component';
import { SearchCocTabComponent } from './components/search-coc-tab/search-coc-tab.component';
import { CrmPageComponent } from './pages/crm-page/crm-page.component';
import { TooltipModule } from 'ngx-bootstrap';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { CalendarPageComponent } from './pages/calendar-page/calendar-page.component';
import { QuickViewsPageComponent } from './pages/quick-views-page/quick-views-page.component';
import { TaskHistoryListComponent } from './ui/task-history-list/task-history-list.component';
import { ContactListComponent } from './ui/contact-list/contact-list.component';
import { CompleteTaskComponent } from './ui/complete-task/complete-task.component';
import { OpenQuotationsListComponent } from './ui/open-quotations-list/open-quotations-list.component';
import { FormsModule } from '@angular/forms';
import { NewTaskFollowupTabComponent } from './components/new-task-followup-tab/new-task-followup-tab.component';
import { SharedFilesPageComponent } from './pages/shared-files-page/shared-files-page.component';
import { TreeModule } from 'ng2-tree';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { EmptyLayoutComponent } from './layout/empty-layout/empty-layout.component';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { routing } from './app.routing';
import { DashGuard } from './guards/auth.guard';
import { IAuthenticationService, AuthenticationService } from './services/auth.service';
import { JwtModule } from '@auth0/angular-jwt';
import { SidebarOpenQuotationsComponent } from './ui/sidebar-open-quotations/sidebar-open-quotations.component';
import { SidebarTaskHistoryComponent } from './ui/sidebar-task-history/sidebar-task-history.component';
import { OverdueTasksPipe } from './pipes/overdueTasks.pipe';
import { TokenInterceptor } from './guards/auth.interceptor';
import { CountPipe } from './pipes/count.pipe';
import { GtPipe } from './pipes/gt.pipe';
import { TranslateModule, TranslateLoader, MissingTranslationHandler, MissingTranslationHandlerParams } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SidebarSelectCompanyComponent } from './ui/sidebar-select-company/sidebar-select-company.component';
import { EqPipe } from './pipes/eq.pipe';
import { HeaderNotificationListComponent } from './ui/header-notification-list/header-notification-list.component';
import { SidebarNotificationComponent } from './ui/sidebar-notification/sidebar-notification.component';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export class MyMissingTranslationHandler implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams) {
      if (params.translateService.currentLang === params.translateService.defaultLang) {
          return params.key;
      } else {
          return params.key;
      }
  }
}


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
    StatisticsPageComponent,
    EmptyComponent,
    NewCompanyComponent,
    NewCompanyTabComponent,
    NewCompanyAdditionalAddressesComponent,
    NewCompanySocialOnlineComponent,
    NewCompanyDescriptionComponent,
    NewContactTabComponent,
    NewContactAccountManagerComponent,
    NewContactDescriptionComponent,
    NewContactSocialOnlineComponent,
    SettingsPageComponent,
    SurveyPageComponent,
    SurveyEditPageComponent,
    SurveyTextFieldComponent,
    SurveyTextareaFieldComponent,
    SurveyCheckboxFieldComponent,
    SurveyRadioFieldComponent,
    SurveyMultiplyFieldComponent,
    SearchCocTabComponent,
    CrmPageComponent,
    ProductPageComponent,
    CalendarPageComponent,
    QuickViewsPageComponent,
    TaskHistoryListComponent,
    ContactListComponent,
    CompleteTaskComponent,
    OpenQuotationsListComponent,
    NewTaskFollowupTabComponent,
    SharedFilesPageComponent,
    LoginPageComponent,
    AdminLayoutComponent,
    EmptyLayoutComponent,
    RegistrationPageComponent,
    SidebarOpenQuotationsComponent,
    SidebarTaskHistoryComponent,
    FilterByMomentPipe,
    OverdueTasksPipe,
    CountPipe,
    GtPipe,
    SidebarSelectCompanyComponent,
    EqPipe,
    HeaderNotificationListComponent,
    SidebarNotificationComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      missingTranslationHandler: {provide: MissingTranslationHandler, useClass: MyMissingTranslationHandler},
    }),
    BrowserModule,
    RouterModule,
    routing,
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
    ButtonsModule.forRoot(),
    ModalModule.forRoot(),
    PopoverModule.forRoot(),
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    FullCalendarModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    DragulaModule.forRoot(),
    AngularSvgIconModule,
    TreeModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['*']
      }
    }),
  ],
  providers: [
    DashGuard,
    { provide: IAuthenticationService, useClass: AuthenticationService},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    EventSesrvice],
  bootstrap: [AppComponent]
})
export class AppModule { }
