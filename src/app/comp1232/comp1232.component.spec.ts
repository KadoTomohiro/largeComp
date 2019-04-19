import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1232Component } from './comp1232.component';

describe('Comp1232Component', () => {
  let component: Comp1232Component;
  let fixture: ComponentFixture<Comp1232Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1232Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1232Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
