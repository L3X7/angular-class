import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejerciciootro1Component } from './ejerciciootro1.component';

describe('Ejerciciootro1Component', () => {
  let component: Ejerciciootro1Component;
  let fixture: ComponentFixture<Ejerciciootro1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ejerciciootro1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejerciciootro1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
