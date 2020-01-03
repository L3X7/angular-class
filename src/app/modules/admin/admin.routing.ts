import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            {
                path: 'user', component: UserComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(
            routes,
        )
    ],
    exports: [
        RouterModule
    ]
})

export class AdminRoutingModule { }
