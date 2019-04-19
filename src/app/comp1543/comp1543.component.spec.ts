import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1543Component } from './comp1543.component';

describe('Comp1543Component', () => {
  let component: Comp1543Component;
  let fixture: ComponentFixture<Comp1543Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1543Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1543Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
