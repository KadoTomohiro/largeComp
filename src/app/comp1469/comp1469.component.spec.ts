import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1469Component } from './comp1469.component';

describe('Comp1469Component', () => {
  let component: Comp1469Component;
  let fixture: ComponentFixture<Comp1469Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1469Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1469Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
