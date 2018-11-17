import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactListPageComponent } from './pages/contact-list-page/contact-list-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { StatisticsPageComponent } from './pages/statistics-page/statistics-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { SurveyPageComponent } from './pages/settings-page/survey-page/survey-page.component';
import { SurveyEditPageComponent } from './pages/settings-page/survey-page/survey-edit-page/survey-edit-page.component';
import { CrmPageComponent } from './pages/crm-page/crm-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { CalendarPageComponent } from './pages/calendar-page/calendar-page.component';
import { QuickViewsPageComponent } from './pages/quick-views-page/quick-views-page.component';
import { SharedFilesPageComponent } from './pages/shared-files-page/shared-files-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { EmptyLayoutComponent } from './layout/empty-layout/empty-layout.component';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { DashGuard } from './guards/auth.guard';

// const routes: Routes = [
//     { path: '', component: DashboardPageComponent },
//     { path: 'login', component: LoginPageComponent },
//     { path: 'crm', component: CrmPageComponent },
//     { path: 'crm/:id', component: ContactListPageComponent },
//     { path: 'dashboard', component: DashboardPageComponent },
//     { path: 'quick-views', component: QuickViewsPageComponent },
//     { path: 'statistics', component: StatisticsPageComponent },
//     { path: 'products', component: ProductPageComponent },
//     { path: 'calendar', component: CalendarPageComponent },
//     { path: 'shared-files', component: SharedFilesPageComponent },
//     { path: 'settings', component: SettingsPageComponent},
//     { path: 'settings/survey', component: SurveyPageComponent, pathMatch: 'full'},
//     { path: 'settings/survey/:id/edit', component: SurveyEditPageComponent, pathMatch: 'full'},

//     { path: '**', component: DashboardPageComponent }
// ];


const appRoutes: Routes = [

    // Admin side routes
    {
        path: '',
        canActivate: [DashGuard],
        component: AdminLayoutComponent,
        children: [
            {
                path: 'quick-views',
                component: QuickViewsPageComponent,
            },
            {
                path: 'statistics',
                component: StatisticsPageComponent,
            },
            {
                path: 'crm',
                component: CrmPageComponent,
            },
            {
                path: 'crm/:id',
                component: ContactListPageComponent,
            },
            {
                path: 'settings',
                component: SettingsPageComponent,
            },
            {
                path: 'settings/survey',
                component: SurveyPageComponent,
            },
            {
                path: 'settings/survey/:id/edit',
                component: SurveyEditPageComponent,
            },
            {
              path: '',
              component: DashboardPageComponent,
              pathMatch: 'full'
          }
        ]
    },

    // Empty layout routes
    { path: 'login', component: LoginPageComponent },
    { path: 'register', component: RegistrationPageComponent },

    // Otherwise redirect to dashboard page
    { path: '**', redirectTo: '' }
];


export const routing = RouterModule.forRoot(appRoutes);
