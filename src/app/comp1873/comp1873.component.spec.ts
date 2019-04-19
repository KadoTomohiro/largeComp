import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1873Component } from './comp1873.component';

describe('Comp1873Component', () => {
  let component: Comp1873Component;
  let fixture: ComponentFixture<Comp1873Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1873Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1873Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
