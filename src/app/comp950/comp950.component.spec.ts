import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp950Component } from './comp950.component';

describe('Comp950Component', () => {
  let component: Comp950Component;
  let fixture: ComponentFixture<Comp950Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp950Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp950Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
