import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1315Component } from './comp1315.component';

describe('Comp1315Component', () => {
  let component: Comp1315Component;
  let fixture: ComponentFixture<Comp1315Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1315Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1315Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
