import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1523Component } from './comp1523.component';

describe('Comp1523Component', () => {
  let component: Comp1523Component;
  let fixture: ComponentFixture<Comp1523Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1523Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1523Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
