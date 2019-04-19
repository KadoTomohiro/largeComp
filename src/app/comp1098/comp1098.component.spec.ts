import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1098Component } from './comp1098.component';

describe('Comp1098Component', () => {
  let component: Comp1098Component;
  let fixture: ComponentFixture<Comp1098Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1098Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1098Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
