import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Ejercicio1Component} from './ejercicio1.component';
import {Ejerciciootro1Component} from './ejerciciootro1/ejerciciootro1.component';

const routes: Routes = [
    {
        path: '',
        component: Ejercicio1Component,
        children: [
            {
                path: 'ejerciciootro1',
                component: Ejerciciootro1Component
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class Ejercicio1RoutingModule { }