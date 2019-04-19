import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp264Component } from './comp264.component';

describe('Comp264Component', () => {
  let component: Comp264Component;
  let fixture: ComponentFixture<Comp264Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp264Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp264Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
