import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1473Component } from './comp1473.component';

describe('Comp1473Component', () => {
  let component: Comp1473Component;
  let fixture: ComponentFixture<Comp1473Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1473Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1473Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
