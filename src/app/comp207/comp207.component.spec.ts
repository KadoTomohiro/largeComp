import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp207Component } from './comp207.component';

describe('Comp207Component', () => {
  let component: Comp207Component;
  let fixture: ComponentFixture<Comp207Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp207Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp207Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
