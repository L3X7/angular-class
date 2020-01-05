import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejerciciootro2Component } from './ejerciciootro2.component';

describe('Ejerciciootro2Component', () => {
  let component: Ejerciciootro2Component;
  let fixture: ComponentFixture<Ejerciciootro2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ejerciciootro2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejerciciootro2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
