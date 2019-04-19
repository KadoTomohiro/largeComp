import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1492Component } from './comp1492.component';

describe('Comp1492Component', () => {
  let component: Comp1492Component;
  let fixture: ComponentFixture<Comp1492Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1492Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1492Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
