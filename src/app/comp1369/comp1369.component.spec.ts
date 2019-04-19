import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1369Component } from './comp1369.component';

describe('Comp1369Component', () => {
  let component: Comp1369Component;
  let fixture: ComponentFixture<Comp1369Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1369Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1369Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
