import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactListPageComponent } from './pages/contact-list-page/contact-list-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';

const routes: Routes = [
    { path: '', component: HomePageComponent, pathMatch: 'full' },
    { path: 'crm', component: ContactListPageComponent, pathMatch: 'full' },
    { path: 'dashboard', component: DashboardPageComponent, pathMatch: 'full' },

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