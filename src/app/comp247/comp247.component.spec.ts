import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp247Component } from './comp247.component';

describe('Comp247Component', () => {
  let component: Comp247Component;
  let fixture: ComponentFixture<Comp247Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp247Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp247Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
