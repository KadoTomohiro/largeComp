import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1378Component } from './comp1378.component';

describe('Comp1378Component', () => {
  let component: Comp1378Component;
  let fixture: ComponentFixture<Comp1378Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1378Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1378Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
