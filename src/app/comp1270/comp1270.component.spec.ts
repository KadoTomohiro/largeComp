import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1270Component } from './comp1270.component';

describe('Comp1270Component', () => {
  let component: Comp1270Component;
  let fixture: ComponentFixture<Comp1270Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1270Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1270Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
