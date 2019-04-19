import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp639Component } from './comp639.component';

describe('Comp639Component', () => {
  let component: Comp639Component;
  let fixture: ComponentFixture<Comp639Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp639Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp639Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
