import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ejercicio2Component } from './ejercicio2.component';
import { Ejercicio2RoutingModule } from './ejercicio2.routing';
import { Ejerciciootro2Component } from './ejerciciootro2/ejerciciootro2.component';

@NgModule({
  declarations: [
    Ejercicio2Component,
    Ejerciciootro2Component
  ],
  imports: [
    CommonModule,
    Ejercicio2RoutingModule
  ]
})
export class Ejercicio2Module { }
