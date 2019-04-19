import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1320Component } from './comp1320.component';

describe('Comp1320Component', () => {
  let component: Comp1320Component;
  let fixture: ComponentFixture<Comp1320Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1320Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1320Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
