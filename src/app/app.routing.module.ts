import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './pages/error/not-found/not-found.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path: 'admin',
        loadChildren: './modules/admin/admin.module#AdminModule',
    },
    {
        path:'country',
        loadChildren: './modules/country/country.module#CountryModule'
    },
    {
        path: '',
        redirectTo: 'admin',
        pathMatch: 'full'
    },
    {
        path: '***',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes,
        )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }
