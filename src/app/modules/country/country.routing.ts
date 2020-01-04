import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryComponent } from './country.component';
import { XyzComponent } from './xyz/xyz.component';

const routes: Routes = [
    {
        path: '',
        component: CountryComponent, 
        children: [
            {
                path: 'xyz',
                component: XyzComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class CountryRoutingModule { }