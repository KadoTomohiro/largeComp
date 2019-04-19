import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1574Component } from './comp1574.component';

describe('Comp1574Component', () => {
  let component: Comp1574Component;
  let fixture: ComponentFixture<Comp1574Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1574Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1574Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
