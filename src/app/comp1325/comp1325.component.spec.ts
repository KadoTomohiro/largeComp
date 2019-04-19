import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1325Component } from './comp1325.component';

describe('Comp1325Component', () => {
  let component: Comp1325Component;
  let fixture: ComponentFixture<Comp1325Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1325Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1325Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
