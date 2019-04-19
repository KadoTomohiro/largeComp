import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1642Component } from './comp1642.component';

describe('Comp1642Component', () => {
  let component: Comp1642Component;
  let fixture: ComponentFixture<Comp1642Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1642Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1642Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
