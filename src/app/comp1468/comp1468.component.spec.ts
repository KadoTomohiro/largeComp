import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1468Component } from './comp1468.component';

describe('Comp1468Component', () => {
  let component: Comp1468Component;
  let fixture: ComponentFixture<Comp1468Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1468Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1468Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
