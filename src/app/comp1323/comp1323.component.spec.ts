import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1323Component } from './comp1323.component';

describe('Comp1323Component', () => {
  let component: Comp1323Component;
  let fixture: ComponentFixture<Comp1323Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1323Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1323Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
