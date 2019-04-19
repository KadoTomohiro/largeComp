import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp590Component } from './comp590.component';

describe('Comp590Component', () => {
  let component: Comp590Component;
  let fixture: ComponentFixture<Comp590Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp590Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp590Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
