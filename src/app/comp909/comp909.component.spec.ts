import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp909Component } from './comp909.component';

describe('Comp909Component', () => {
  let component: Comp909Component;
  let fixture: ComponentFixture<Comp909Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp909Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp909Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
