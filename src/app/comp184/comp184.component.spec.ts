import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp184Component } from './comp184.component';

describe('Comp184Component', () => {
  let component: Comp184Component;
  let fixture: ComponentFixture<Comp184Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp184Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp184Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
