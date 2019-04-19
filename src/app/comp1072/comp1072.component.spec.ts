import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1072Component } from './comp1072.component';

describe('Comp1072Component', () => {
  let component: Comp1072Component;
  let fixture: ComponentFixture<Comp1072Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1072Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1072Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
