import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1130Component } from './comp1130.component';

describe('Comp1130Component', () => {
  let component: Comp1130Component;
  let fixture: ComponentFixture<Comp1130Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1130Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1130Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
