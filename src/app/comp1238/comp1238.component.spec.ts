import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1238Component } from './comp1238.component';

describe('Comp1238Component', () => {
  let component: Comp1238Component;
  let fixture: ComponentFixture<Comp1238Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1238Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1238Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
