import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp671Component } from './comp671.component';

describe('Comp671Component', () => {
  let component: Comp671Component;
  let fixture: ComponentFixture<Comp671Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp671Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp671Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
