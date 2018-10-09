import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactListPageComponent } from './pages/contact-list-page/contact-list-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { StatisticsPageComponent } from './pages/statistics-page/statistics-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { SurveyPageComponent } from './pages/settings-page/survey-page/survey-page.component';
import { SurveyEditPageComponent } from './pages/settings-page/survey-page/survey-edit-page/survey-edit-page.component';

const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'crm', component: ContactListPageComponent },
    { path: 'dashboard', component: DashboardPageComponent },
    { path: 'statistics', component: StatisticsPageComponent },
    { path: 'settings', component: SettingsPageComponent},
    { path: 'settings/survey', component: SurveyPageComponent, pathMatch: 'full'},
    { path: 'settings/survey/:id/edit', component: SurveyEditPageComponent, pathMatch: 'full'},
    // { path: 'settings/survey', component: SurveyPageComponent, 
    //     children: [
    //         {
    //             path: 'list', component: SurveyPageComponent
    //         },
    //         {
    //             path: ':id/list', component: SurveyEditPageComponent
    //         },
    //     ]
    // },

    // { path: 'contact-list', component: ContactListPageComponent, pathMatch: 'full' },

    { path: '**', component: HomePageComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class RoutingModule { 

 }