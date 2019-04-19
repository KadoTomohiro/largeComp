import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp143Component } from './comp143.component';

describe('Comp143Component', () => {
  let component: Comp143Component;
  let fixture: ComponentFixture<Comp143Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp143Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp143Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
