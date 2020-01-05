import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ejercicio1Component } from './ejercicio1.component';
import { Ejercicio1RoutingModule } from './ejercicio1.routing';
import { Ejerciciootro1Component } from './ejerciciootro1/ejerciciootro1.component';

@NgModule({
  declarations: [
    Ejercicio1Component,
    Ejerciciootro1Component
  ],
  imports: [
    CommonModule,
    Ejercicio1RoutingModule
  ]
})
export class Ejercicio1Module { }
