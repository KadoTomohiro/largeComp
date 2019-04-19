import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1007Component } from './comp1007.component';

describe('Comp1007Component', () => {
  let component: Comp1007Component;
  let fixture: ComponentFixture<Comp1007Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1007Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1007Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
