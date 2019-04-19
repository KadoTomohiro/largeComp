import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1391Component } from './comp1391.component';

describe('Comp1391Component', () => {
  let component: Comp1391Component;
  let fixture: ComponentFixture<Comp1391Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1391Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1391Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
