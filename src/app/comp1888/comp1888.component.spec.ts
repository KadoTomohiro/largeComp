import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1888Component } from './comp1888.component';

describe('Comp1888Component', () => {
  let component: Comp1888Component;
  let fixture: ComponentFixture<Comp1888Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1888Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1888Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
