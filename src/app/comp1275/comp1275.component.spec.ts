import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1275Component } from './comp1275.component';

describe('Comp1275Component', () => {
  let component: Comp1275Component;
  let fixture: ComponentFixture<Comp1275Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1275Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1275Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
