import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ejercicio2Component } from './ejercicio2.component';
import { Ejerciciootro2Component } from './ejerciciootro2/ejerciciootro2.component';

const routes: Routes = [
    {
        path: '',
        component: Ejercicio2Component,
        children: [
            {
                path: 'ejerciciootro2',
                component: Ejerciciootro2Component
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class Ejercicio2RoutingModule { }