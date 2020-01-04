import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './country.component';
import { XyzComponent } from './xyz/xyz.component';
import { CountryRoutingModule } from './country.routing';

@NgModule({
  declarations: [
    CountryComponent,
    XyzComponent
  ],
  imports: [
    CommonModule,
    CountryRoutingModule
  ]
})
export class CountryModule { }
