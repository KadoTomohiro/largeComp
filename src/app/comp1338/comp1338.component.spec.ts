import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1338Component } from './comp1338.component';

describe('Comp1338Component', () => {
  let component: Comp1338Component;
  let fixture: ComponentFixture<Comp1338Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1338Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1338Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
