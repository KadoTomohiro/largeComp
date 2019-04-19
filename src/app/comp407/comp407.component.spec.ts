import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp407Component } from './comp407.component';

describe('Comp407Component', () => {
  let component: Comp407Component;
  let fixture: ComponentFixture<Comp407Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp407Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp407Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
