import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1436Component } from './comp1436.component';

describe('Comp1436Component', () => {
  let component: Comp1436Component;
  let fixture: ComponentFixture<Comp1436Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1436Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1436Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
