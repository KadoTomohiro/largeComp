import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1165Component } from './comp1165.component';

describe('Comp1165Component', () => {
  let component: Comp1165Component;
  let fixture: ComponentFixture<Comp1165Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1165Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1165Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
