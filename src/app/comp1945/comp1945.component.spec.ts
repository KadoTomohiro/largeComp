import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1945Component } from './comp1945.component';

describe('Comp1945Component', () => {
  let component: Comp1945Component;
  let fixture: ComponentFixture<Comp1945Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1945Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1945Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
